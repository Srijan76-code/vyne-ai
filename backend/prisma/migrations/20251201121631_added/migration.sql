-- CreateTable
CREATE TABLE "ProjectClone" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "projectId" INTEGER NOT NULL,

    CONSTRAINT "ProjectClone_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProjectClone_userId_projectId_key" ON "ProjectClone"("userId", "projectId");

-- AddForeignKey
ALTER TABLE "ProjectClone" ADD CONSTRAINT "ProjectClone_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectClone" ADD CONSTRAINT "ProjectClone_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
