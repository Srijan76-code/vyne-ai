# Vyne Backend

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up Environment Variables:
   Copy `env.example` to `.env` and fill in the values.

3. Set up Prisma:
   Initialize Prisma and generate the client (requires your schema):
   ```bash
   npx prisma init
   # Copy your schema.prisma content to prisma/schema.prisma
   npx prisma generate
   ```

4. Run Development Server:
   ```bash
   npm run dev
   ```

## API Routes

- POST /api/auth/signup
- POST /api/auth/login
- POST /api/auth/logout
- POST /api/deploy
- GET /api/projects
- GET /api/user
- GET /api/user/projects
- POST /api/user/projects
- PUT /api/user/projects
- POST /api/vyne
