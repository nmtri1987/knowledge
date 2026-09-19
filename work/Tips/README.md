# Tips feed

`knowledge.html` is an offline file, so the browser cannot reliably fetch RSS feeds from other domains. The updater downloads public metadata, keeps short excerpts and writes the snapshot into the portal.

## Update now

```powershell
python .\tools\update_tips.py
```

## Know whether a feed has new articles

The command output contains two levels of counters:

- `newItemCount`: total new articles across all sources.
- `sourceStatus[].newItems`: new articles from each source.

Example:

```json
{
  "newItemCount": 2,
  "sourceStatus": [
    { "id": "microsoft-dotnet", "items": 10, "newItems": 1 },
    { "id": "kubernetes-blog", "items": 10, "newItems": 1 }
  ]
}
```

The Tips page also shows the total beside `ITEMS`, a `NEW` badge on each new card, and the per-source new count. `seen-items.json` stores URLs seen by previous successful runs. Do not delete this file unless you want the next run to establish a new baseline.

## Article-specific Technical Advisor notes

The updater classifies each feed item from its title, category and RSS excerpt. Current review lenses include AI governance, testing, security, data, Kubernetes and cloud operations, messaging, DevOps, reliability, .NET and architecture. It then creates an article-specific TA view and two questions about evidence and production risk. This deterministic analysis runs locally and does not require an AI API key.

Treat the generated note as a review prompt. The RSS excerpt may omit important context, so open the source before making a recommendation.

## Schedule daily

Run this once from the `Knowledge` folder:

```powershell
.\tools\register-daily-tips-task.ps1
```

The task runs at 08:00 for the current Windows user. It does not require the browser to be open. The updater keeps the last successful snapshot when one source fails and records the error for that source.

## Add another RSS source

Add an entry to `sources.json` with `type: rss`. Prefer official product blogs, release notes and engineering blogs. Do not add credentials, cookies or private feed tokens to this file.

`max_items_per_source: 0` keeps every entry returned by one feed response. This does not mean the complete history of the website: publishers commonly expose only their latest 10–50 entries. Keep daily updates in this mode. A full website archive should be downloaded separately and should not be embedded into `knowledge.html`.

## Archive Library and unlimited “Load 12 more”

Refresh every configured archive:

```powershell
python .\tools\sync_all_tip_archives.py
```

Refresh only one source when needed:

```powershell
python .\tools\sync_all_tip_archives.py --source microsoft-dotnet
```

Available source IDs are `architecture-lab`, `microsoft-dotnet`, `microsoft-azure-sdk`, `kubernetes-blog`, `anthropic-engineering` and `nashtech-blog`.

The current catalog contains 10,263 article records in source-specific folders under `Tips/archive`. WordPress sources use their public posts API. Kubernetes and Anthropic use official sitemap metadata. Architecture Lab uses its complete RSS list.

`knowledge.html` loads only the small catalog at startup. Select a source in **Archive Library** to load its first local chunk. **Xem thêm 12 bài** remains available until that source archive is exhausted. To prevent thousands of DOM nodes, the portal renders a moving window of at most 240 cards; all loaded records remain searchable during the browser session.

## LinkedIn

LinkedIn timelines are authenticated and do not expose a stable personal RSS feed. Do not scrape the logged-in page. Add selected public URLs to `manual-items.json`, subscribe to an author's newsletter when available, or use an approved LinkedIn API/integration subject to company policy.

## Content boundary

The feed stores title, URL, date and a short plain-text excerpt. It does not copy full articles. A feed item is a reading suggestion, not an approved architecture recommendation. Validate important claims against primary documentation and the target project's evidence.
