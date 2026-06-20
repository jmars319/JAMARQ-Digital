#!/usr/bin/env bash
set -euo pipefail

# This template uses defaulted assignments so sourcing it directly matches the repo defaults.
PORT="${PORT:-3201}"
BASE_URL="${BASE_URL:-http://localhost:${PORT}}"
PIDFILE="${PIDFILE:-${PWD}/.dev-server.pid}"
LOGFILE="${LOGFILE:-${PWD}/.dev-server.log}"
START_CMD="${START_CMD:-npm run dev}"
HEALTH_TIMEOUT_SECONDS="${HEALTH_TIMEOUT_SECONDS:-30}"
HEALTH_INTERVAL_SECONDS="${HEALTH_INTERVAL_SECONDS:-1}"
DEV_BROWSER_OPEN="${DEV_BROWSER_OPEN:-1}"
DEV_BROWSER="${DEV_BROWSER:-default}"
