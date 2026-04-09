from __future__ import annotations

import json
from pathlib import Path
from typing import Literal

from fastapi import APIRouter, HTTPException, Query

router = APIRouter(prefix="/api", tags=["content"])

APP_DIR = Path(__file__).resolve().parents[2]
FEATURE_HOTEL_PATHS = {
    "vi": APP_DIR / "mock" / "hotel" / "feature_hotels_vi.json",
    "ja": APP_DIR / "mock" / "hotel" / "feature_hotels_ja.json",
}
HOTEL_PATHS = {
    "vi": APP_DIR / "mock" / "hotel" / "hotels_vi.json",
    "ja": APP_DIR / "mock" / "hotel" / "hotels_ja.json",
}
HOTEL_AMENITIES_PATHS = {
    "vi": APP_DIR / "mock" / "hotel" / "hotel_amenities_vi.json",
    "ja": APP_DIR / "mock" / "hotel" / "hotel_amenities_ja.json",
}
HOTEL_ROOMS_PATHS = {
    "vi": APP_DIR / "mock" / "hotel" / "hotel_rooms_vi.json",
    "ja": APP_DIR / "mock" / "hotel" / "hotel_rooms_ja.json",
}
HOTEL_POLICIES_PATHS = {
    "vi": APP_DIR / "mock" / "hotel" / "hotel_policies_vi.json",
    "ja": APP_DIR / "mock" / "hotel" / "hotel_policies_ja.json",
}


def _read_json(path: Path) -> dict | list:
    with path.open("r", encoding="utf-8") as file:
        return json.load(file)


def _read_json_list(path: Path) -> list:
    content = _read_json(path)
    return content if isinstance(content, list) else []


def _build_hotels_items(locale: Literal["vi", "ja"]) -> list[dict]:
    hotels = _read_json_list(HOTEL_PATHS[locale])
    amenities = _read_json_list(HOTEL_AMENITIES_PATHS[locale])
    rooms = _read_json_list(HOTEL_ROOMS_PATHS[locale])
    policies = _read_json_list(HOTEL_POLICIES_PATHS[locale])

    amenities_map: dict[str, list] = {}
    for item in amenities:
        if not isinstance(item, dict):
            continue

        hotel_id = item.get("hotelId")
        hotel_amenities = item.get("amenities")
        if isinstance(hotel_id, str) and isinstance(hotel_amenities, list):
            amenities_map[hotel_id] = hotel_amenities

    rooms_map: dict[str, list] = {}
    for item in rooms:
        if not isinstance(item, dict):
            continue

        hotel_id = item.get("hotelId")
        hotel_rooms = item.get("rooms")
        if isinstance(hotel_id, str) and isinstance(hotel_rooms, list):
            rooms_map[hotel_id] = hotel_rooms

    policies_map: dict[str, dict] = {}
    for item in policies:
        if not isinstance(item, dict):
            continue

        hotel_id = item.get("hotelId")
        hotel_policies = item.get("policies")
        if isinstance(hotel_id, str) and isinstance(hotel_policies, dict):
            policies_map[hotel_id] = hotel_policies

    items: list[dict] = []
    for hotel in hotels:
        if not isinstance(hotel, dict):
            continue

        hotel_id = hotel.get("id")
        if not isinstance(hotel_id, str):
            continue

        item = dict(hotel)
        item["amenities"] = amenities_map.get(hotel_id, [])
        item["rooms"] = rooms_map.get(hotel_id, [])
        item["policies"] = policies_map.get(hotel_id, {})
        items.append(item)

    return items


@router.get("/feature-hotels")
def get_feature_hotels(locale: Literal["vi", "ja"] = Query(default="vi")) -> dict:
    items = _read_json(FEATURE_HOTEL_PATHS[locale])
    return {
        "success": True,
        "data": {
            "items": items if isinstance(items, list) else [],
        },
    }


@router.get("/hotels")
def get_hotels(locale: Literal["vi", "ja"] = Query(default="vi")) -> dict:
    items = _build_hotels_items(locale)

    return {
        "success": True,
        "data": {
            "items": items,
        },
    }


@router.get("/hotels/{hotel_id}")
def get_hotel_detail(
    hotel_id: str,
    locale: Literal["vi", "ja"] = Query(default="vi"),
) -> dict:
    items = _build_hotels_items(locale)
    for item in items:
        if item.get("id") == hotel_id:
            return {
                "success": True,
                "data": {
                    "item": item,
                },
            }

    raise HTTPException(status_code=404, detail="Hotel not found")
