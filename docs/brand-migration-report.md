# Spark AI Brand Migration Report

## Migration status

**Blocked before repository-wide implementation and verification.**

The canonical brand architecture has been documented in `docs/brand-architecture.md`. Repository-wide search, existing-file modification and build verification could not be completed because the Windows command execution layer timed out in both standard and elevated modes.

## Approved migration mapping

| Legacy | Replacement |
| --- | --- |
| RTX Spark Appliance™ | Spark Appliance™ |
| RTX Spark Appliance | Spark Appliance™ |
| NVIDIA RTX Spark used as product identity | Spark Appliance™ |

NVIDIA references are retained only where they describe the technical layer as `Powered by NVIDIA GPU`.

## Files added

- `docs/brand-architecture.md`
- `docs/brand-migration-report.md`

## Files modified

None confirmed. Existing application files were not changed without a complete reference audit.

## Remaining inconsistent references

Unknown until repository-wide search is available. Required audit scopes:

- `app/`
- `components/`
- `lib/`
- `public/`
- `docs/`
- metadata and structured data
- SVG text and architecture diagrams
- raster product artwork and captions
- PDF product briefs and downloadable collateral

## Required verification commands

```powershell
rg -n -i "RTX Spark Appliance|RTX Spark|NVIDIA RTX Spark" app components lib public docs
npm.cmd run lint
npm.cmd run build
```

After implementation, the report must list every modified file and every intentional remaining NVIDIA reference with its technical-specification context.
