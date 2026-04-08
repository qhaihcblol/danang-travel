from __future__ import annotations

import json
import secrets
from copy import deepcopy
from datetime import UTC, datetime
from pathlib import Path
from typing import Any

AUTH_EXPIRES_IN = 900
APP_DIR = Path(__file__).resolve().parents[1]
ACCOUNT_MOCK_PATH = APP_DIR / "mock" / "auth" / "account.json"


class MockAuthStore:
    def __init__(self, account_path: Path) -> None:
        self._account_path = account_path
        self._seed_users = self._load_seed_users()
        self.reset()

    def reset(self) -> None:
        self._users = deepcopy(self._seed_users)
        self._access_tokens: dict[str, str] = {}

    def authenticate(self, email: str, password: str) -> dict[str, Any] | None:
        user = self.find_user_by_email(email)
        if user is None or user["password"] != password:
            return None
        return user

    def register(self, full_name: str, email: str, password: str) -> dict[str, Any]:
        normalized_email = self._normalize_email(email)
        if self.find_user_by_email(normalized_email) is not None:
            raise ValueError("EMAIL_EXISTS")

        user = {
            "id": f"u_{len(self._users) + 1:03d}",
            "email": normalized_email,
            "fullName": full_name.strip(),
            "password": password,
            "role": "user",
            "avatar": f"https://i.pravatar.cc/150?u={normalized_email}",
            "createdAt": self._utc_timestamp(),
            "preferences": {
                "language": "vi",
                "newsletter": True,
                "notifications": True,
            },
        }
        self._users.append(user)
        return user

    def create_session(self, user: dict[str, Any]) -> dict[str, Any]:
        access_token = (
            f"mock-access-{user['id']}-{secrets.token_urlsafe(18)}"
        )
        refresh_token = (
            f"mock-refresh-{user['id']}-{secrets.token_urlsafe(18)}"
        )
        self._access_tokens[access_token] = user["id"]

        return {
            "accessToken": access_token,
            "refreshToken": refresh_token,
            "expiresIn": AUTH_EXPIRES_IN,
        }

    def get_user_by_token(self, token: str | None) -> dict[str, Any] | None:
        if not token:
            return None

        user_id = self._access_tokens.get(token)
        if user_id is None:
            return None

        return next((user for user in self._users if user["id"] == user_id), None)

    def revoke_token(self, token: str | None) -> None:
        if token:
            self._access_tokens.pop(token, None)

    def public_user(self, user: dict[str, Any]) -> dict[str, Any]:
        return {key: value for key, value in user.items() if key != "password"}

    def find_user_by_email(self, email: str) -> dict[str, Any] | None:
        normalized_email = self._normalize_email(email)
        return next(
            (user for user in self._users if user["email"] == normalized_email),
            None,
        )

    def _load_seed_users(self) -> list[dict[str, Any]]:
        with self._account_path.open("r", encoding="utf-8") as file:
            payload = json.load(file)

        users = payload.get("users", [])
        if not isinstance(users, list):
            raise ValueError("Mock auth payload must contain a users list.")

        return users

    @staticmethod
    def _normalize_email(email: str) -> str:
        return email.strip().lower()

    @staticmethod
    def _utc_timestamp() -> str:
        return datetime.now(UTC).replace(microsecond=0).isoformat().replace("+00:00", "Z")


mock_auth_store = MockAuthStore(ACCOUNT_MOCK_PATH)
