from __future__ import annotations

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes.auth import router as auth_router
from app.api.routes.hotel import router as hotel_router
from app.api.routes.place import router as place_router

app = FastAPI(title="Danang Travel Mock Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(hotel_router)
app.include_router(place_router)


@app.get("/health")
def healthcheck() -> dict[str, str]:
    return {"status": "ok"}
