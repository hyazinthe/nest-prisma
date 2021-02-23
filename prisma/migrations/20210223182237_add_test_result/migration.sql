-- CreateTable
CREATE TABLE "TestResult" (
    "id" TEXT NOT NULL,
    "score" REAL,
    "content" TEXT,
    "published" BOOLEAN DEFAULT false,
    "authorId" INTEGER,
    FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "TestResult.id_unique" ON "TestResult"("id");
