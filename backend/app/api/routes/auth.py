from __future__ import annotations

from typing import Literal

from fastapi import APIRouter, Header, status
from fastapi.responses import JSONResponse
from pydantic import BaseModel

from app.services.mock_auth import mock_auth_store

router = APIRouter(prefix="/api/auth", tags=["auth"])

INVALID_CREDENTIALS_MESSAGE = "Invalid email or password"
EMAIL_EXISTS_MESSAGE = "Email already registered"
INVALID_TOKEN_MESSAGE = "Invalid or expired token"


class UserPreferences(BaseModel):
    language: Literal["vi", "ja"]
    newsletter: bool
    notifications: bool


class UserResponse(BaseModel):
    id: str
    email: str
    fullName: str
    role: Literal["user", "admin"]
    avatar: str | None = None
    createdAt: str
    preferences: UserPreferences


class LoginRequest(BaseModel):
    email: str
    password: str


class RegisterRequest(BaseModel):
    fullName: str
    email: str
    password: str


class ForgotPasswordRequest(BaseModel):
    email: str


class AuthSessionData(BaseModel):
    user: UserResponse
    accessToken: str
    refreshToken: str
    expiresIn: int


class CurrentUserData(BaseModel):
    user: UserResponse


class SuccessResponse(BaseModel):
    success: bool = True
    message: str


class ErrorResponse(BaseModel):
    success: bool = False
    error: str


class AuthResponse(SuccessResponse):
    data: AuthSessionData


class CurrentUserResponse(BaseModel):
    success: bool = True
    data: CurrentUserData


def _extract_bearer_token(authorization: str | None) -> str | None:
    if not authorization:
        return None

    scheme, _, token = authorization.partition(" ")
    if scheme.lower() != "bearer" or not token:
        return None

    return token.strip()


def _error_response(status_code: int, message: str) -> JSONResponse:
    return JSONResponse(
        status_code=status_code,
        content={"success": False, "error": message},
    )

@router.post(
    "/login",
    response_model=AuthResponse,
    responses={401: {"model": ErrorResponse}},
)
def login(payload: LoginRequest) -> dict | JSONResponse:
    user = mock_auth_store.authenticate(payload.email, payload.password)
    if user is None:
        return _error_response(
            status.HTTP_401_UNAUTHORIZED,
            INVALID_CREDENTIALS_MESSAGE,
        )

    session = mock_auth_store.create_session(user)
    return {
        "success": True,
        "message": "Login successful",
        "data": {
            "user": mock_auth_store.public_user(user),
            **session,
        },
    }


@router.post(
    "/register",
    status_code=status.HTTP_201_CREATED,
    response_model=AuthResponse,
    responses={409: {"model": ErrorResponse}},
)
def register(payload: RegisterRequest) -> dict | JSONResponse:
    try:
        user = mock_auth_store.register(
            full_name=payload.fullName,
            email=payload.email,
            password=payload.password,
        )
    except ValueError as error:
        if str(error) != "EMAIL_EXISTS":
            raise

        return _error_response(status.HTTP_409_CONFLICT, EMAIL_EXISTS_MESSAGE)

    session = mock_auth_store.create_session(user)
    return {
        "success": True,
        "message": "Register successful",
        "data": {
            "user": mock_auth_store.public_user(user),
            **session,
        },
    }


@router.post(
    "/forgot-password",
    response_model=SuccessResponse,
)
def forgot_password(_: ForgotPasswordRequest) -> dict:
    return {
        "success": True,
        "message": "If the email exists, we'll send reset instructions.",
    }


@router.get(
    "/me",
    response_model=CurrentUserResponse,
    responses={401: {"model": ErrorResponse}},
)
def get_current_user(authorization: str | None = Header(default=None)) -> dict | JSONResponse:
    token = _extract_bearer_token(authorization)
    user = mock_auth_store.get_user_by_token(token)
    if user is None:
        return _error_response(status.HTTP_401_UNAUTHORIZED, INVALID_TOKEN_MESSAGE)

    return {
        "success": True,
        "data": {
            "user": mock_auth_store.public_user(user),
        },
    }


@router.post("/logout", response_model=SuccessResponse)
def logout(authorization: str | None = Header(default=None)) -> dict:
    token = _extract_bearer_token(authorization)
    mock_auth_store.revoke_token(token)
    return {
        "success": True,
        "message": "Logout successful",
    }
