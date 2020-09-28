import assert from './assert'

// TODO: define a type that's actually serializable
export type Serializable = object

/**
 * Describes the API for application-level persistant storage. Values must be
 * objects that can be persisted via JSON.stringify and JSON.parse.
 */
export interface Storage<M extends Serializable> {
  /**
   * Gets an object from storage by key.
   */
  get<K extends keyof M>(key: K): Promise<M[K] | undefined>

  /**
   * Sets an object in storage by key.
   */
  set<K extends keyof M>(key: K, value: M[K]): Promise<void>

  /**
   * Removes an object in storage by key.
   */
  remove<K extends keyof M>(key: K): Promise<void>

  /**
   * Clears all objects out of storage.
   */
  clear(): Promise<void>
}

/**
 * Implements the storage API using `localStorage` as the backing store.
 */
export class LocalStorage<M extends Serializable> implements Storage<M> {
  /**
   * Gets an object from storage by key.
   */
  public async get<K extends keyof M>(key: K): Promise<M[K] | undefined> {
    assert(typeof key === 'string')
    const value = window.localStorage.getItem(key)
    return value ? JSON.parse(value) : undefined
  }

  /**
   * Sets an object in storage by key.
   */
  public async set<K extends keyof M>(key: K, value: M[K]): Promise<void> {
    assert(typeof key === 'string')
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  /**
   * Removes an object in storage by key.
   */
  public async remove<K extends keyof M>(key: K): Promise<void> {
    assert(typeof key === 'string')
    window.localStorage.removeItem(key)
  }

  /**
   * Clears all objects out of storage.
   */
  public async clear(): Promise<void> {
    window.localStorage.clear()
  }
}

/**
 * Implements the storage API using Kiosk Storage as the backing store.
 */
export class KioskStorage<M extends Serializable> implements Storage<M> {
  /**
   * Gets an object from storage by key.
   */
  public async get<K extends keyof M>(key: K): Promise<M[K] | undefined> {
    assert(typeof key === 'string')
    return window.kiosk!.storage.get(key)
  }

  /**
   * Sets an object in storage by key.
   */
  public async set<K extends keyof M>(key: K, value: M[K]): Promise<void> {
    assert(typeof key === 'string')
    await window.kiosk!.storage.set(key, value)
  }

  /**
   * Removes an object in storage by key.
   */
  public async remove<K extends keyof M>(key: K): Promise<void> {
    assert(typeof key === 'string')
    await window.kiosk!.storage.remove(key)
  }

  /**
   * Clears all objects out of storage.
   */
  public async clear(): Promise<void> {
    await window.kiosk!.storage.clear()
  }
}

/**
 * Implements the storage API for storing objects in memory. Data stored in
 * this object only lasts as long as the program runs.
 */
export class MemoryStorage<M extends Serializable> implements Storage<M> {
  private data = new Map<keyof M, string>()

  /**
   * @param initial data to load into storage
   */
  public constructor(initial?: Partial<M>) {
    if (initial) {
      for (const key in initial) {
        /* istanbul ignore else */
        if (Object.prototype.hasOwnProperty.call(initial, key)) {
          this.set(key, initial[key] as M[keyof M])
        }
      }
    }
  }

  /**
   * Gets an object from storage by key.
   */
  public async get<K extends keyof M>(key: K): Promise<M[K] | undefined> {
    const serialized = this.data.get(key)

    if (typeof serialized === 'undefined') {
      return serialized
    }

    return JSON.parse(serialized)
  }

  /**
   * Sets an object in storage by key.
   */
  public async set<K extends keyof M>(key: K, value: M[K]): Promise<void> {
    this.data.set(key, JSON.stringify(value))
  }

  /**
   * Removes an object in storage by key.
   */
  public async remove<K extends keyof M>(key: K): Promise<void> {
    this.data.delete(key)
  }

  /**
   * Clears all objects out of storage.
   */
  public async clear(): Promise<void> {
    this.data.clear()
  }
}
