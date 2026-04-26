# Personal Card Site

Static personal card site served by Nginx.

## Docker

Build:

```bash
docker build -t personal-card-site:latest .
```

Run locally:

```bash
docker run --rm -p 8080:80 personal-card-site:latest
```

Or with Docker Compose:

```bash
docker compose up -d --build
```

Open:

```text
http://localhost:8080
```

Deploy on a server:

```bash
docker save personal-card-site:latest | gzip > personal-card-site.tar.gz
```

On the server:

```bash
gunzip -c personal-card-site.tar.gz | docker load
docker run -d --name personal-card-site --restart unless-stopped -p 80:80 personal-card-site:latest
```
