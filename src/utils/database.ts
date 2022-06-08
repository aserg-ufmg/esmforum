import sqlite3 from 'sqlite3'

export const openConnection = () => {
  const db = new sqlite3.Database('./src/forum.db')
  return db
}

export const dbQueryFirst = async (query: string, params?: any[]) => {
  const ret = await dbQuery(query, params)
  return ret[0]
}

export const dbQuery = (query: string, params?: any[]) => {
  const db = openConnection()
  return new Promise<any[]>((resolve, reject) => {
    db.all(query, params, (err, rows) => {
      if (err) { reject(err) } else { resolve(rows) }
    })
  })
    .finally(() => {
      db.close()
    })
}
