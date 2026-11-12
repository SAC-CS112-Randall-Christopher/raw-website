-- Aggregate counters only: no form contents, visitor IDs, IPs or full URLs.
CREATE TABLE IF NOT EXISTS marketing_daily (
  day TEXT NOT NULL,
  event TEXT NOT NULL,
  page TEXT NOT NULL,
  landing TEXT NOT NULL,
  channel TEXT NOT NULL,
  campaign TEXT NOT NULL,
  environment TEXT NOT NULL CHECK(environment IN ('production','test')),
  count INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY(day,event,page,landing,channel,campaign,environment)
) WITHOUT ROWID;
