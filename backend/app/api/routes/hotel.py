from __future__ import annotations

import json
from pathlib import Path
from typing import Literal

from fastapi import APIRouter, Query

router = APIRouter(prefix="/api", tags=["content"])

APP_DIR = Path(__file__).resolve().parents[2]
FEATURE_HOTEL_PATHS = {
    "vi": APP_DIR / "mock" / "hotel" / "feature_hotels_vi.json",
    "ja": APP_DIR / "mock" / "hotel" / "feature_hotels_ja.json",
}


def _read_json(path: Path) -> dict | list:
    with path.open("r", encoding="utf-8") as file:
        return json.load(file)


@router.get("/feature-hotels")
def get_feature_hotels(locale: Literal["vi", "ja"] = Query(default="vi")) -> dict:
    items = _read_json(FEATURE_HOTEL_PATHS[locale])
    return {
        "success": True,
        "data": {
            "items": items if isinstance(items, list) else [],
        },
    }
