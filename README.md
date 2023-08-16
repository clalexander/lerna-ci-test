# Lerna CI Test

## Lerna Setup Notes

```json
{
  "command": {
    "version": {
      "ignoreChanges": ["**/*.md", "**/*.json", "packages/**/tsconfig.json"]
    },
    "publish": {
      "ignoreChanges": ["**/*.md", "**/*.json", "packages/**/tsconfig.json"]
    }
  }
}
```
