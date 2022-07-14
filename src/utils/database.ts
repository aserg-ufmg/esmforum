import sqlite3 from 'sqlite3'
import fs from 'fs'

export const dbQueryFirst = async (query: string, params?: any[], file?: string) => {
  const ret = await dbQuery(query, params, file)
  return ret[0]
}

export const dbQuery = (query: string, params?: any[], file = './src/forum.db') => {
  if (!fs.existsSync(file)) {
    fs.openSync(file, 'w')
    const db = new sqlite3.Database(file)
    return new Promise<any[]>((resolve, reject) => {
      db.serialize(() => {
        db.run('CREATE TABLE comment ("commentid" INTEGER,"parentid" INTEGER,"userid" INTEGER,"text" TEXT,"createdAt" TEXT,PRIMARY KEY("commentid" AUTOINCREMENT),FOREIGN KEY("userid") REFERENCES "user"("userid") ON DELETE CASCADE)')
        db.all(query, params, (err, rows) => {
          if (err) { reject(err) } else { resolve(rows) }
        })
      })
    })
      .finally(() => {
        db.close()
      })
  } else {
    const db = new sqlite3.Database(file)
    return new Promise<any[]>((resolve, reject) => {
      db.all(query, params, (err, rows) => {
        if (err) { reject(err) } else { resolve(rows) }
      })
    })
      .finally(() => {
        db.close()
      })
  }
}
