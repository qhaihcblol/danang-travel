from __future__ import annotations

import json
from pathlib import Path
from typing import Literal

from fastapi import APIRouter, Query

router = APIRouter(prefix="/api", tags=["content"])

APP_DIR = Path(__file__).resolve().parents[2]
FEATURE_IMAGE_LIST_PATH = APP_DIR / "mock" / "place" / "feature_image_list.json"
FEATURE_PLACE_PATHS = {
    "vi": APP_DIR / "mock" / "place" / "feature_places_vi.json",
    "ja": APP_DIR / "mock" / "place" / "feature_places_ja.json",
}


def _read_json(path: Path) -> dict | list:
    with path.open("r", encoding="utf-8") as file:
        return json.load(file)


@router.get("/feature-images")
def get_feature_image_list() -> dict:
    return {
        "success": True,
        "data": {
            "items": _read_json(FEATURE_IMAGE_LIST_PATH),
        },
    }


@router.get("/feature-places")
def get_feature_places(locale: Literal["vi", "ja"] = Query(default="vi")) -> dict:
    items = _read_json(FEATURE_PLACE_PATHS[locale])
    return {
        "success": True,
        "data": {
            "items": items if isinstance(items, list) else [],
        },
    }
