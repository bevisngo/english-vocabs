
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Word
 * 
 */
export type Word = $Result.DefaultSelection<Prisma.$WordPayload>
/**
 * Model Avatar
 * 
 */
export type Avatar = $Result.DefaultSelection<Prisma.$AvatarPayload>
/**
 * Model UserAvatar
 * 
 */
export type UserAvatar = $Result.DefaultSelection<Prisma.$UserAvatarPayload>
/**
 * Model SharedWord
 * 
 */
export type SharedWord = $Result.DefaultSelection<Prisma.$SharedWordPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.word`: Exposes CRUD operations for the **Word** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Words
    * const words = await prisma.word.findMany()
    * ```
    */
  get word(): Prisma.WordDelegate<ExtArgs>;

  /**
   * `prisma.avatar`: Exposes CRUD operations for the **Avatar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avatars
    * const avatars = await prisma.avatar.findMany()
    * ```
    */
  get avatar(): Prisma.AvatarDelegate<ExtArgs>;

  /**
   * `prisma.userAvatar`: Exposes CRUD operations for the **UserAvatar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAvatars
    * const userAvatars = await prisma.userAvatar.findMany()
    * ```
    */
  get userAvatar(): Prisma.UserAvatarDelegate<ExtArgs>;

  /**
   * `prisma.sharedWord`: Exposes CRUD operations for the **SharedWord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SharedWords
    * const sharedWords = await prisma.sharedWord.findMany()
    * ```
    */
  get sharedWord(): Prisma.SharedWordDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Category: 'Category',
    Word: 'Word',
    Avatar: 'Avatar',
    UserAvatar: 'UserAvatar',
    SharedWord: 'SharedWord'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'category' | 'word' | 'avatar' | 'userAvatar' | 'sharedWord'
      txIsolationLevel: never
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CategoryFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.CategoryAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Word: {
        payload: Prisma.$WordPayload<ExtArgs>
        fields: Prisma.WordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WordFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WordFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          findFirst: {
            args: Prisma.WordFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WordFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          findMany: {
            args: Prisma.WordFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WordPayload>[]
          }
          create: {
            args: Prisma.WordCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          createMany: {
            args: Prisma.WordCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WordDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          update: {
            args: Prisma.WordUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          deleteMany: {
            args: Prisma.WordDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WordUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WordUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          aggregate: {
            args: Prisma.WordAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWord>
          }
          groupBy: {
            args: Prisma.WordGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WordGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.WordFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.WordAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.WordCountArgs<ExtArgs>,
            result: $Utils.Optional<WordCountAggregateOutputType> | number
          }
        }
      }
      Avatar: {
        payload: Prisma.$AvatarPayload<ExtArgs>
        fields: Prisma.AvatarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvatarFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvatarFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          findFirst: {
            args: Prisma.AvatarFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvatarFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          findMany: {
            args: Prisma.AvatarFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>[]
          }
          create: {
            args: Prisma.AvatarCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          createMany: {
            args: Prisma.AvatarCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AvatarDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          update: {
            args: Prisma.AvatarUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          deleteMany: {
            args: Prisma.AvatarDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AvatarUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AvatarUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          aggregate: {
            args: Prisma.AvatarAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAvatar>
          }
          groupBy: {
            args: Prisma.AvatarGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AvatarGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AvatarFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.AvatarAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.AvatarCountArgs<ExtArgs>,
            result: $Utils.Optional<AvatarCountAggregateOutputType> | number
          }
        }
      }
      UserAvatar: {
        payload: Prisma.$UserAvatarPayload<ExtArgs>
        fields: Prisma.UserAvatarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAvatarFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserAvatarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAvatarFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserAvatarPayload>
          }
          findFirst: {
            args: Prisma.UserAvatarFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserAvatarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAvatarFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserAvatarPayload>
          }
          findMany: {
            args: Prisma.UserAvatarFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserAvatarPayload>[]
          }
          create: {
            args: Prisma.UserAvatarCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserAvatarPayload>
          }
          createMany: {
            args: Prisma.UserAvatarCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserAvatarDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserAvatarPayload>
          }
          update: {
            args: Prisma.UserAvatarUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserAvatarPayload>
          }
          deleteMany: {
            args: Prisma.UserAvatarDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserAvatarUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserAvatarUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserAvatarPayload>
          }
          aggregate: {
            args: Prisma.UserAvatarAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserAvatar>
          }
          groupBy: {
            args: Prisma.UserAvatarGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserAvatarGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserAvatarFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAvatarAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.UserAvatarCountArgs<ExtArgs>,
            result: $Utils.Optional<UserAvatarCountAggregateOutputType> | number
          }
        }
      }
      SharedWord: {
        payload: Prisma.$SharedWordPayload<ExtArgs>
        fields: Prisma.SharedWordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SharedWordFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SharedWordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SharedWordFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SharedWordPayload>
          }
          findFirst: {
            args: Prisma.SharedWordFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SharedWordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SharedWordFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SharedWordPayload>
          }
          findMany: {
            args: Prisma.SharedWordFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SharedWordPayload>[]
          }
          create: {
            args: Prisma.SharedWordCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SharedWordPayload>
          }
          createMany: {
            args: Prisma.SharedWordCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SharedWordDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SharedWordPayload>
          }
          update: {
            args: Prisma.SharedWordUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SharedWordPayload>
          }
          deleteMany: {
            args: Prisma.SharedWordDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SharedWordUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SharedWordUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SharedWordPayload>
          }
          aggregate: {
            args: Prisma.SharedWordAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSharedWord>
          }
          groupBy: {
            args: Prisma.SharedWordGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SharedWordGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SharedWordFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.SharedWordAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.SharedWordCountArgs<ExtArgs>,
            result: $Utils.Optional<SharedWordCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    words: number
    categories: number
    userAvatart: number
    sharedWords: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    words?: boolean | UserCountOutputTypeCountWordsArgs
    categories?: boolean | UserCountOutputTypeCountCategoriesArgs
    userAvatart?: boolean | UserCountOutputTypeCountUserAvatartArgs
    sharedWords?: boolean | UserCountOutputTypeCountSharedWordsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WordWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserAvatartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAvatarWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSharedWordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharedWordWhereInput
  }



  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    words: number
    sharedWords: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    words?: boolean | CategoryCountOutputTypeCountWordsArgs
    sharedWords?: boolean | CategoryCountOutputTypeCountSharedWordsArgs
  }

  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountWordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WordWhereInput
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountSharedWordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharedWordWhereInput
  }



  /**
   * Count Type WordCountOutputType
   */

  export type WordCountOutputType = {
    sharedWords: number
  }

  export type WordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sharedWords?: boolean | WordCountOutputTypeCountSharedWordsArgs
  }

  // Custom InputTypes

  /**
   * WordCountOutputType without action
   */
  export type WordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordCountOutputType
     */
    select?: WordCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * WordCountOutputType without action
   */
  export type WordCountOutputTypeCountSharedWordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharedWordWhereInput
  }



  /**
   * Count Type AvatarCountOutputType
   */

  export type AvatarCountOutputType = {
    userAvatar: number
  }

  export type AvatarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userAvatar?: boolean | AvatarCountOutputTypeCountUserAvatarArgs
  }

  // Custom InputTypes

  /**
   * AvatarCountOutputType without action
   */
  export type AvatarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvatarCountOutputType
     */
    select?: AvatarCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AvatarCountOutputType without action
   */
  export type AvatarCountOutputTypeCountUserAvatarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAvatarWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    firstname: string | null
    lastname: string | null
    password: string | null
    avatarId: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    firstname: string | null
    lastname: string | null
    password: string | null
    avatarId: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    firstname: number
    lastname: number
    password: number
    avatarId: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    firstname?: true
    lastname?: true
    password?: true
    avatarId?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    firstname?: true
    lastname?: true
    password?: true
    avatarId?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    firstname?: true
    lastname?: true
    password?: true
    avatarId?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    firstname: string
    lastname: string
    password: string
    avatarId: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    firstname?: boolean
    lastname?: boolean
    password?: boolean
    avatarId?: boolean
    createdAt?: boolean
    words?: boolean | User$wordsArgs<ExtArgs>
    categories?: boolean | User$categoriesArgs<ExtArgs>
    userAvatart?: boolean | User$userAvatartArgs<ExtArgs>
    sharedWords?: boolean | User$sharedWordsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    firstname?: boolean
    lastname?: boolean
    password?: boolean
    avatarId?: boolean
    createdAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    words?: boolean | User$wordsArgs<ExtArgs>
    categories?: boolean | User$categoriesArgs<ExtArgs>
    userAvatart?: boolean | User$userAvatartArgs<ExtArgs>
    sharedWords?: boolean | User$sharedWordsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      words: Prisma.$WordPayload<ExtArgs>[]
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      userAvatart: Prisma.$UserAvatarPayload<ExtArgs>[]
      sharedWords: Prisma.$SharedWordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      firstname: string
      lastname: string
      password: string
      avatarId: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    words<T extends User$wordsArgs<ExtArgs> = {}>(args?: Subset<T, User$wordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, 'findMany'> | Null>;

    categories<T extends User$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    userAvatart<T extends User$userAvatartArgs<ExtArgs> = {}>(args?: Subset<T, User$userAvatartArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAvatarPayload<ExtArgs>, T, 'findMany'> | Null>;

    sharedWords<T extends User$sharedWordsArgs<ExtArgs> = {}>(args?: Subset<T, User$sharedWordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedWordPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly firstname: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatarId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User.words
   */
  export type User$wordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude<ExtArgs> | null
    where?: WordWhereInput
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    cursor?: WordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }


  /**
   * User.categories
   */
  export type User$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * User.userAvatart
   */
  export type User$userAvatartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatar
     */
    select?: UserAvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAvatarInclude<ExtArgs> | null
    where?: UserAvatarWhereInput
    orderBy?: UserAvatarOrderByWithRelationInput | UserAvatarOrderByWithRelationInput[]
    cursor?: UserAvatarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAvatarScalarFieldEnum | UserAvatarScalarFieldEnum[]
  }


  /**
   * User.sharedWords
   */
  export type User$sharedWordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedWord
     */
    select?: SharedWordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SharedWordInclude<ExtArgs> | null
    where?: SharedWordWhereInput
    orderBy?: SharedWordOrderByWithRelationInput | SharedWordOrderByWithRelationInput[]
    cursor?: SharedWordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SharedWordScalarFieldEnum | SharedWordScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    color: string | null
    createdBy: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    color: string | null
    createdBy: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    color: number
    createdBy: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    color?: true
    createdBy?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    color?: true
    createdBy?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    color?: true
    createdBy?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    color: string | null
    createdBy: string
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    createdBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    words?: boolean | Category$wordsArgs<ExtArgs>
    sharedWords?: boolean | Category$sharedWordsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    color?: boolean
    createdBy?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    words?: boolean | Category$wordsArgs<ExtArgs>
    sharedWords?: boolean | Category$sharedWordsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      words: Prisma.$WordPayload<ExtArgs>[]
      sharedWords: Prisma.$SharedWordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      color: string | null
      createdBy: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }


  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * @param {CategoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const category = await prisma.category.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: CategoryFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Category.
     * @param {CategoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const category = await prisma.category.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: CategoryAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    words<T extends Category$wordsArgs<ExtArgs> = {}>(args?: Subset<T, Category$wordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, 'findMany'> | Null>;

    sharedWords<T extends Category$sharedWordsArgs<ExtArgs> = {}>(args?: Subset<T, Category$sharedWordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedWordPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly color: FieldRef<"Category", 'String'>
    readonly createdBy: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category findRaw
   */
  export type CategoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Category aggregateRaw
   */
  export type CategoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Category.words
   */
  export type Category$wordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude<ExtArgs> | null
    where?: WordWhereInput
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    cursor?: WordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }


  /**
   * Category.sharedWords
   */
  export type Category$sharedWordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedWord
     */
    select?: SharedWordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SharedWordInclude<ExtArgs> | null
    where?: SharedWordWhereInput
    orderBy?: SharedWordOrderByWithRelationInput | SharedWordOrderByWithRelationInput[]
    cursor?: SharedWordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SharedWordScalarFieldEnum | SharedWordScalarFieldEnum[]
  }


  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
  }



  /**
   * Model Word
   */

  export type AggregateWord = {
    _count: WordCountAggregateOutputType | null
    _min: WordMinAggregateOutputType | null
    _max: WordMaxAggregateOutputType | null
  }

  export type WordMinAggregateOutputType = {
    id: string | null
    value: string | null
    desc: string | null
    spelling: string | null
    date: string | null
    color: string | null
    createdAt: Date | null
    createdBy: string | null
    categoryId: string | null
  }

  export type WordMaxAggregateOutputType = {
    id: string | null
    value: string | null
    desc: string | null
    spelling: string | null
    date: string | null
    color: string | null
    createdAt: Date | null
    createdBy: string | null
    categoryId: string | null
  }

  export type WordCountAggregateOutputType = {
    id: number
    value: number
    desc: number
    spelling: number
    date: number
    color: number
    createdAt: number
    createdBy: number
    categoryId: number
    _all: number
  }


  export type WordMinAggregateInputType = {
    id?: true
    value?: true
    desc?: true
    spelling?: true
    date?: true
    color?: true
    createdAt?: true
    createdBy?: true
    categoryId?: true
  }

  export type WordMaxAggregateInputType = {
    id?: true
    value?: true
    desc?: true
    spelling?: true
    date?: true
    color?: true
    createdAt?: true
    createdBy?: true
    categoryId?: true
  }

  export type WordCountAggregateInputType = {
    id?: true
    value?: true
    desc?: true
    spelling?: true
    date?: true
    color?: true
    createdAt?: true
    createdBy?: true
    categoryId?: true
    _all?: true
  }

  export type WordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Word to aggregate.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Words
    **/
    _count?: true | WordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WordMaxAggregateInputType
  }

  export type GetWordAggregateType<T extends WordAggregateArgs> = {
        [P in keyof T & keyof AggregateWord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWord[P]>
      : GetScalarType<T[P], AggregateWord[P]>
  }




  export type WordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WordWhereInput
    orderBy?: WordOrderByWithAggregationInput | WordOrderByWithAggregationInput[]
    by: WordScalarFieldEnum[] | WordScalarFieldEnum
    having?: WordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WordCountAggregateInputType | true
    _min?: WordMinAggregateInputType
    _max?: WordMaxAggregateInputType
  }

  export type WordGroupByOutputType = {
    id: string
    value: string
    desc: string
    spelling: string
    date: string
    color: string | null
    createdAt: Date
    createdBy: string
    categoryId: string
    _count: WordCountAggregateOutputType | null
    _min: WordMinAggregateOutputType | null
    _max: WordMaxAggregateOutputType | null
  }

  type GetWordGroupByPayload<T extends WordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WordGroupByOutputType[P]>
            : GetScalarType<T[P], WordGroupByOutputType[P]>
        }
      >
    >


  export type WordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    desc?: boolean
    spelling?: boolean
    date?: boolean
    color?: boolean
    createdAt?: boolean
    createdBy?: boolean
    categoryId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    sharedWords?: boolean | Word$sharedWordsArgs<ExtArgs>
    _count?: boolean | WordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["word"]>

  export type WordSelectScalar = {
    id?: boolean
    value?: boolean
    desc?: boolean
    spelling?: boolean
    date?: boolean
    color?: boolean
    createdAt?: boolean
    createdBy?: boolean
    categoryId?: boolean
  }

  export type WordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    sharedWords?: boolean | Word$sharedWordsArgs<ExtArgs>
    _count?: boolean | WordCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $WordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Word"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
      sharedWords: Prisma.$SharedWordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      value: string
      desc: string
      spelling: string
      date: string
      color: string | null
      createdAt: Date
      createdBy: string
      categoryId: string
    }, ExtArgs["result"]["word"]>
    composites: {}
  }


  type WordGetPayload<S extends boolean | null | undefined | WordDefaultArgs> = $Result.GetResult<Prisma.$WordPayload, S>

  type WordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WordFindManyArgs, 'select' | 'include'> & {
      select?: WordCountAggregateInputType | true
    }

  export interface WordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Word'], meta: { name: 'Word' } }
    /**
     * Find zero or one Word that matches the filter.
     * @param {WordFindUniqueArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WordFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WordFindUniqueArgs<ExtArgs>>
    ): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Word that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WordFindUniqueOrThrowArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WordFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WordFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Word that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFindFirstArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WordFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WordFindFirstArgs<ExtArgs>>
    ): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Word that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFindFirstOrThrowArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WordFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WordFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Words that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Words
     * const words = await prisma.word.findMany()
     * 
     * // Get first 10 Words
     * const words = await prisma.word.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wordWithIdOnly = await prisma.word.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WordFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WordFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Word.
     * @param {WordCreateArgs} args - Arguments to create a Word.
     * @example
     * // Create one Word
     * const Word = await prisma.word.create({
     *   data: {
     *     // ... data to create a Word
     *   }
     * })
     * 
    **/
    create<T extends WordCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WordCreateArgs<ExtArgs>>
    ): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Words.
     *     @param {WordCreateManyArgs} args - Arguments to create many Words.
     *     @example
     *     // Create many Words
     *     const word = await prisma.word.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WordCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WordCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Word.
     * @param {WordDeleteArgs} args - Arguments to delete one Word.
     * @example
     * // Delete one Word
     * const Word = await prisma.word.delete({
     *   where: {
     *     // ... filter to delete one Word
     *   }
     * })
     * 
    **/
    delete<T extends WordDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WordDeleteArgs<ExtArgs>>
    ): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Word.
     * @param {WordUpdateArgs} args - Arguments to update one Word.
     * @example
     * // Update one Word
     * const word = await prisma.word.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WordUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WordUpdateArgs<ExtArgs>>
    ): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Words.
     * @param {WordDeleteManyArgs} args - Arguments to filter Words to delete.
     * @example
     * // Delete a few Words
     * const { count } = await prisma.word.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WordDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WordDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Words.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Words
     * const word = await prisma.word.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WordUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WordUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Word.
     * @param {WordUpsertArgs} args - Arguments to update or create a Word.
     * @example
     * // Update or create a Word
     * const word = await prisma.word.upsert({
     *   create: {
     *     // ... data to create a Word
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Word we want to update
     *   }
     * })
    **/
    upsert<T extends WordUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WordUpsertArgs<ExtArgs>>
    ): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Words that matches the filter.
     * @param {WordFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const word = await prisma.word.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: WordFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Word.
     * @param {WordAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const word = await prisma.word.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: WordAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Words.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordCountArgs} args - Arguments to filter Words to count.
     * @example
     * // Count the number of Words
     * const count = await prisma.word.count({
     *   where: {
     *     // ... the filter for the Words we want to count
     *   }
     * })
    **/
    count<T extends WordCountArgs>(
      args?: Subset<T, WordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Word.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WordAggregateArgs>(args: Subset<T, WordAggregateArgs>): Prisma.PrismaPromise<GetWordAggregateType<T>>

    /**
     * Group by Word.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WordGroupByArgs['orderBy'] }
        : { orderBy?: WordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Word model
   */
  readonly fields: WordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Word.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    sharedWords<T extends Word$sharedWordsArgs<ExtArgs> = {}>(args?: Subset<T, Word$sharedWordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedWordPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Word model
   */ 
  interface WordFieldRefs {
    readonly id: FieldRef<"Word", 'String'>
    readonly value: FieldRef<"Word", 'String'>
    readonly desc: FieldRef<"Word", 'String'>
    readonly spelling: FieldRef<"Word", 'String'>
    readonly date: FieldRef<"Word", 'String'>
    readonly color: FieldRef<"Word", 'String'>
    readonly createdAt: FieldRef<"Word", 'DateTime'>
    readonly createdBy: FieldRef<"Word", 'String'>
    readonly categoryId: FieldRef<"Word", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Word findUnique
   */
  export type WordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where: WordWhereUniqueInput
  }


  /**
   * Word findUniqueOrThrow
   */
  export type WordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where: WordWhereUniqueInput
  }


  /**
   * Word findFirst
   */
  export type WordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Words.
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Words.
     */
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }


  /**
   * Word findFirstOrThrow
   */
  export type WordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Words.
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Words.
     */
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }


  /**
   * Word findMany
   */
  export type WordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Words to fetch.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Words.
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }


  /**
   * Word create
   */
  export type WordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * The data needed to create a Word.
     */
    data: XOR<WordCreateInput, WordUncheckedCreateInput>
  }


  /**
   * Word createMany
   */
  export type WordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Words.
     */
    data: WordCreateManyInput | WordCreateManyInput[]
  }


  /**
   * Word update
   */
  export type WordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * The data needed to update a Word.
     */
    data: XOR<WordUpdateInput, WordUncheckedUpdateInput>
    /**
     * Choose, which Word to update.
     */
    where: WordWhereUniqueInput
  }


  /**
   * Word updateMany
   */
  export type WordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Words.
     */
    data: XOR<WordUpdateManyMutationInput, WordUncheckedUpdateManyInput>
    /**
     * Filter which Words to update
     */
    where?: WordWhereInput
  }


  /**
   * Word upsert
   */
  export type WordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * The filter to search for the Word to update in case it exists.
     */
    where: WordWhereUniqueInput
    /**
     * In case the Word found by the `where` argument doesn't exist, create a new Word with this data.
     */
    create: XOR<WordCreateInput, WordUncheckedCreateInput>
    /**
     * In case the Word was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WordUpdateInput, WordUncheckedUpdateInput>
  }


  /**
   * Word delete
   */
  export type WordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter which Word to delete.
     */
    where: WordWhereUniqueInput
  }


  /**
   * Word deleteMany
   */
  export type WordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Words to delete
     */
    where?: WordWhereInput
  }


  /**
   * Word findRaw
   */
  export type WordFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Word aggregateRaw
   */
  export type WordAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Word.sharedWords
   */
  export type Word$sharedWordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedWord
     */
    select?: SharedWordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SharedWordInclude<ExtArgs> | null
    where?: SharedWordWhereInput
    orderBy?: SharedWordOrderByWithRelationInput | SharedWordOrderByWithRelationInput[]
    cursor?: SharedWordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SharedWordScalarFieldEnum | SharedWordScalarFieldEnum[]
  }


  /**
   * Word without action
   */
  export type WordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude<ExtArgs> | null
  }



  /**
   * Model Avatar
   */

  export type AggregateAvatar = {
    _count: AvatarCountAggregateOutputType | null
    _min: AvatarMinAggregateOutputType | null
    _max: AvatarMaxAggregateOutputType | null
  }

  export type AvatarMinAggregateOutputType = {
    id: string | null
    path: string | null
  }

  export type AvatarMaxAggregateOutputType = {
    id: string | null
    path: string | null
  }

  export type AvatarCountAggregateOutputType = {
    id: number
    path: number
    _all: number
  }


  export type AvatarMinAggregateInputType = {
    id?: true
    path?: true
  }

  export type AvatarMaxAggregateInputType = {
    id?: true
    path?: true
  }

  export type AvatarCountAggregateInputType = {
    id?: true
    path?: true
    _all?: true
  }

  export type AvatarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avatar to aggregate.
     */
    where?: AvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avatars
    **/
    _count?: true | AvatarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvatarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvatarMaxAggregateInputType
  }

  export type GetAvatarAggregateType<T extends AvatarAggregateArgs> = {
        [P in keyof T & keyof AggregateAvatar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvatar[P]>
      : GetScalarType<T[P], AggregateAvatar[P]>
  }




  export type AvatarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvatarWhereInput
    orderBy?: AvatarOrderByWithAggregationInput | AvatarOrderByWithAggregationInput[]
    by: AvatarScalarFieldEnum[] | AvatarScalarFieldEnum
    having?: AvatarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvatarCountAggregateInputType | true
    _min?: AvatarMinAggregateInputType
    _max?: AvatarMaxAggregateInputType
  }

  export type AvatarGroupByOutputType = {
    id: string
    path: string
    _count: AvatarCountAggregateOutputType | null
    _min: AvatarMinAggregateOutputType | null
    _max: AvatarMaxAggregateOutputType | null
  }

  type GetAvatarGroupByPayload<T extends AvatarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvatarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvatarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvatarGroupByOutputType[P]>
            : GetScalarType<T[P], AvatarGroupByOutputType[P]>
        }
      >
    >


  export type AvatarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    userAvatar?: boolean | Avatar$userAvatarArgs<ExtArgs>
    _count?: boolean | AvatarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avatar"]>

  export type AvatarSelectScalar = {
    id?: boolean
    path?: boolean
  }

  export type AvatarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userAvatar?: boolean | Avatar$userAvatarArgs<ExtArgs>
    _count?: boolean | AvatarCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AvatarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Avatar"
    objects: {
      userAvatar: Prisma.$UserAvatarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      path: string
    }, ExtArgs["result"]["avatar"]>
    composites: {}
  }


  type AvatarGetPayload<S extends boolean | null | undefined | AvatarDefaultArgs> = $Result.GetResult<Prisma.$AvatarPayload, S>

  type AvatarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AvatarFindManyArgs, 'select' | 'include'> & {
      select?: AvatarCountAggregateInputType | true
    }

  export interface AvatarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Avatar'], meta: { name: 'Avatar' } }
    /**
     * Find zero or one Avatar that matches the filter.
     * @param {AvatarFindUniqueArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AvatarFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AvatarFindUniqueArgs<ExtArgs>>
    ): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Avatar that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AvatarFindUniqueOrThrowArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AvatarFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AvatarFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Avatar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarFindFirstArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AvatarFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AvatarFindFirstArgs<ExtArgs>>
    ): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Avatar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarFindFirstOrThrowArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AvatarFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AvatarFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Avatars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avatars
     * const avatars = await prisma.avatar.findMany()
     * 
     * // Get first 10 Avatars
     * const avatars = await prisma.avatar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const avatarWithIdOnly = await prisma.avatar.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AvatarFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AvatarFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Avatar.
     * @param {AvatarCreateArgs} args - Arguments to create a Avatar.
     * @example
     * // Create one Avatar
     * const Avatar = await prisma.avatar.create({
     *   data: {
     *     // ... data to create a Avatar
     *   }
     * })
     * 
    **/
    create<T extends AvatarCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AvatarCreateArgs<ExtArgs>>
    ): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Avatars.
     *     @param {AvatarCreateManyArgs} args - Arguments to create many Avatars.
     *     @example
     *     // Create many Avatars
     *     const avatar = await prisma.avatar.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AvatarCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AvatarCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Avatar.
     * @param {AvatarDeleteArgs} args - Arguments to delete one Avatar.
     * @example
     * // Delete one Avatar
     * const Avatar = await prisma.avatar.delete({
     *   where: {
     *     // ... filter to delete one Avatar
     *   }
     * })
     * 
    **/
    delete<T extends AvatarDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AvatarDeleteArgs<ExtArgs>>
    ): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Avatar.
     * @param {AvatarUpdateArgs} args - Arguments to update one Avatar.
     * @example
     * // Update one Avatar
     * const avatar = await prisma.avatar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AvatarUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AvatarUpdateArgs<ExtArgs>>
    ): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Avatars.
     * @param {AvatarDeleteManyArgs} args - Arguments to filter Avatars to delete.
     * @example
     * // Delete a few Avatars
     * const { count } = await prisma.avatar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AvatarDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AvatarDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avatars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avatars
     * const avatar = await prisma.avatar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AvatarUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AvatarUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Avatar.
     * @param {AvatarUpsertArgs} args - Arguments to update or create a Avatar.
     * @example
     * // Update or create a Avatar
     * const avatar = await prisma.avatar.upsert({
     *   create: {
     *     // ... data to create a Avatar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avatar we want to update
     *   }
     * })
    **/
    upsert<T extends AvatarUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AvatarUpsertArgs<ExtArgs>>
    ): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Avatars that matches the filter.
     * @param {AvatarFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const avatar = await prisma.avatar.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: AvatarFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Avatar.
     * @param {AvatarAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const avatar = await prisma.avatar.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: AvatarAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Avatars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarCountArgs} args - Arguments to filter Avatars to count.
     * @example
     * // Count the number of Avatars
     * const count = await prisma.avatar.count({
     *   where: {
     *     // ... the filter for the Avatars we want to count
     *   }
     * })
    **/
    count<T extends AvatarCountArgs>(
      args?: Subset<T, AvatarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvatarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avatar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvatarAggregateArgs>(args: Subset<T, AvatarAggregateArgs>): Prisma.PrismaPromise<GetAvatarAggregateType<T>>

    /**
     * Group by Avatar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvatarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvatarGroupByArgs['orderBy'] }
        : { orderBy?: AvatarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvatarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvatarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Avatar model
   */
  readonly fields: AvatarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avatar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvatarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    userAvatar<T extends Avatar$userAvatarArgs<ExtArgs> = {}>(args?: Subset<T, Avatar$userAvatarArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAvatarPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Avatar model
   */ 
  interface AvatarFieldRefs {
    readonly id: FieldRef<"Avatar", 'String'>
    readonly path: FieldRef<"Avatar", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Avatar findUnique
   */
  export type AvatarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatar to fetch.
     */
    where: AvatarWhereUniqueInput
  }


  /**
   * Avatar findUniqueOrThrow
   */
  export type AvatarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatar to fetch.
     */
    where: AvatarWhereUniqueInput
  }


  /**
   * Avatar findFirst
   */
  export type AvatarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatar to fetch.
     */
    where?: AvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avatars.
     */
    cursor?: AvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avatars.
     */
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[]
  }


  /**
   * Avatar findFirstOrThrow
   */
  export type AvatarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatar to fetch.
     */
    where?: AvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avatars.
     */
    cursor?: AvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avatars.
     */
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[]
  }


  /**
   * Avatar findMany
   */
  export type AvatarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatars to fetch.
     */
    where?: AvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avatars.
     */
    cursor?: AvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[]
  }


  /**
   * Avatar create
   */
  export type AvatarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * The data needed to create a Avatar.
     */
    data: XOR<AvatarCreateInput, AvatarUncheckedCreateInput>
  }


  /**
   * Avatar createMany
   */
  export type AvatarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Avatars.
     */
    data: AvatarCreateManyInput | AvatarCreateManyInput[]
  }


  /**
   * Avatar update
   */
  export type AvatarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * The data needed to update a Avatar.
     */
    data: XOR<AvatarUpdateInput, AvatarUncheckedUpdateInput>
    /**
     * Choose, which Avatar to update.
     */
    where: AvatarWhereUniqueInput
  }


  /**
   * Avatar updateMany
   */
  export type AvatarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avatars.
     */
    data: XOR<AvatarUpdateManyMutationInput, AvatarUncheckedUpdateManyInput>
    /**
     * Filter which Avatars to update
     */
    where?: AvatarWhereInput
  }


  /**
   * Avatar upsert
   */
  export type AvatarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * The filter to search for the Avatar to update in case it exists.
     */
    where: AvatarWhereUniqueInput
    /**
     * In case the Avatar found by the `where` argument doesn't exist, create a new Avatar with this data.
     */
    create: XOR<AvatarCreateInput, AvatarUncheckedCreateInput>
    /**
     * In case the Avatar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvatarUpdateInput, AvatarUncheckedUpdateInput>
  }


  /**
   * Avatar delete
   */
  export type AvatarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter which Avatar to delete.
     */
    where: AvatarWhereUniqueInput
  }


  /**
   * Avatar deleteMany
   */
  export type AvatarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avatars to delete
     */
    where?: AvatarWhereInput
  }


  /**
   * Avatar findRaw
   */
  export type AvatarFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Avatar aggregateRaw
   */
  export type AvatarAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Avatar.userAvatar
   */
  export type Avatar$userAvatarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatar
     */
    select?: UserAvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAvatarInclude<ExtArgs> | null
    where?: UserAvatarWhereInput
    orderBy?: UserAvatarOrderByWithRelationInput | UserAvatarOrderByWithRelationInput[]
    cursor?: UserAvatarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAvatarScalarFieldEnum | UserAvatarScalarFieldEnum[]
  }


  /**
   * Avatar without action
   */
  export type AvatarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvatarInclude<ExtArgs> | null
  }



  /**
   * Model UserAvatar
   */

  export type AggregateUserAvatar = {
    _count: UserAvatarCountAggregateOutputType | null
    _min: UserAvatarMinAggregateOutputType | null
    _max: UserAvatarMaxAggregateOutputType | null
  }

  export type UserAvatarMinAggregateOutputType = {
    id: string | null
    current: boolean | null
    userId: string | null
    avatarId: string | null
  }

  export type UserAvatarMaxAggregateOutputType = {
    id: string | null
    current: boolean | null
    userId: string | null
    avatarId: string | null
  }

  export type UserAvatarCountAggregateOutputType = {
    id: number
    current: number
    userId: number
    avatarId: number
    _all: number
  }


  export type UserAvatarMinAggregateInputType = {
    id?: true
    current?: true
    userId?: true
    avatarId?: true
  }

  export type UserAvatarMaxAggregateInputType = {
    id?: true
    current?: true
    userId?: true
    avatarId?: true
  }

  export type UserAvatarCountAggregateInputType = {
    id?: true
    current?: true
    userId?: true
    avatarId?: true
    _all?: true
  }

  export type UserAvatarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAvatar to aggregate.
     */
    where?: UserAvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAvatars to fetch.
     */
    orderBy?: UserAvatarOrderByWithRelationInput | UserAvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAvatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAvatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAvatars
    **/
    _count?: true | UserAvatarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAvatarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAvatarMaxAggregateInputType
  }

  export type GetUserAvatarAggregateType<T extends UserAvatarAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAvatar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAvatar[P]>
      : GetScalarType<T[P], AggregateUserAvatar[P]>
  }




  export type UserAvatarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAvatarWhereInput
    orderBy?: UserAvatarOrderByWithAggregationInput | UserAvatarOrderByWithAggregationInput[]
    by: UserAvatarScalarFieldEnum[] | UserAvatarScalarFieldEnum
    having?: UserAvatarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAvatarCountAggregateInputType | true
    _min?: UserAvatarMinAggregateInputType
    _max?: UserAvatarMaxAggregateInputType
  }

  export type UserAvatarGroupByOutputType = {
    id: string
    current: boolean
    userId: string
    avatarId: string
    _count: UserAvatarCountAggregateOutputType | null
    _min: UserAvatarMinAggregateOutputType | null
    _max: UserAvatarMaxAggregateOutputType | null
  }

  type GetUserAvatarGroupByPayload<T extends UserAvatarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAvatarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAvatarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAvatarGroupByOutputType[P]>
            : GetScalarType<T[P], UserAvatarGroupByOutputType[P]>
        }
      >
    >


  export type UserAvatarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    current?: boolean
    userId?: boolean
    avatarId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    avatar?: boolean | AvatarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAvatar"]>

  export type UserAvatarSelectScalar = {
    id?: boolean
    current?: boolean
    userId?: boolean
    avatarId?: boolean
  }

  export type UserAvatarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    avatar?: boolean | AvatarDefaultArgs<ExtArgs>
  }


  export type $UserAvatarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAvatar"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      avatar: Prisma.$AvatarPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      current: boolean
      userId: string
      avatarId: string
    }, ExtArgs["result"]["userAvatar"]>
    composites: {}
  }


  type UserAvatarGetPayload<S extends boolean | null | undefined | UserAvatarDefaultArgs> = $Result.GetResult<Prisma.$UserAvatarPayload, S>

  type UserAvatarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserAvatarFindManyArgs, 'select' | 'include'> & {
      select?: UserAvatarCountAggregateInputType | true
    }

  export interface UserAvatarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAvatar'], meta: { name: 'UserAvatar' } }
    /**
     * Find zero or one UserAvatar that matches the filter.
     * @param {UserAvatarFindUniqueArgs} args - Arguments to find a UserAvatar
     * @example
     * // Get one UserAvatar
     * const userAvatar = await prisma.userAvatar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserAvatarFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserAvatarFindUniqueArgs<ExtArgs>>
    ): Prisma__UserAvatarClient<$Result.GetResult<Prisma.$UserAvatarPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserAvatar that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserAvatarFindUniqueOrThrowArgs} args - Arguments to find a UserAvatar
     * @example
     * // Get one UserAvatar
     * const userAvatar = await prisma.userAvatar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserAvatarFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserAvatarFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserAvatarClient<$Result.GetResult<Prisma.$UserAvatarPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserAvatar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAvatarFindFirstArgs} args - Arguments to find a UserAvatar
     * @example
     * // Get one UserAvatar
     * const userAvatar = await prisma.userAvatar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserAvatarFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserAvatarFindFirstArgs<ExtArgs>>
    ): Prisma__UserAvatarClient<$Result.GetResult<Prisma.$UserAvatarPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserAvatar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAvatarFindFirstOrThrowArgs} args - Arguments to find a UserAvatar
     * @example
     * // Get one UserAvatar
     * const userAvatar = await prisma.userAvatar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserAvatarFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserAvatarFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserAvatarClient<$Result.GetResult<Prisma.$UserAvatarPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserAvatars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAvatarFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAvatars
     * const userAvatars = await prisma.userAvatar.findMany()
     * 
     * // Get first 10 UserAvatars
     * const userAvatars = await prisma.userAvatar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAvatarWithIdOnly = await prisma.userAvatar.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserAvatarFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserAvatarFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAvatarPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserAvatar.
     * @param {UserAvatarCreateArgs} args - Arguments to create a UserAvatar.
     * @example
     * // Create one UserAvatar
     * const UserAvatar = await prisma.userAvatar.create({
     *   data: {
     *     // ... data to create a UserAvatar
     *   }
     * })
     * 
    **/
    create<T extends UserAvatarCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserAvatarCreateArgs<ExtArgs>>
    ): Prisma__UserAvatarClient<$Result.GetResult<Prisma.$UserAvatarPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserAvatars.
     *     @param {UserAvatarCreateManyArgs} args - Arguments to create many UserAvatars.
     *     @example
     *     // Create many UserAvatars
     *     const userAvatar = await prisma.userAvatar.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserAvatarCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserAvatarCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserAvatar.
     * @param {UserAvatarDeleteArgs} args - Arguments to delete one UserAvatar.
     * @example
     * // Delete one UserAvatar
     * const UserAvatar = await prisma.userAvatar.delete({
     *   where: {
     *     // ... filter to delete one UserAvatar
     *   }
     * })
     * 
    **/
    delete<T extends UserAvatarDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserAvatarDeleteArgs<ExtArgs>>
    ): Prisma__UserAvatarClient<$Result.GetResult<Prisma.$UserAvatarPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserAvatar.
     * @param {UserAvatarUpdateArgs} args - Arguments to update one UserAvatar.
     * @example
     * // Update one UserAvatar
     * const userAvatar = await prisma.userAvatar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserAvatarUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserAvatarUpdateArgs<ExtArgs>>
    ): Prisma__UserAvatarClient<$Result.GetResult<Prisma.$UserAvatarPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserAvatars.
     * @param {UserAvatarDeleteManyArgs} args - Arguments to filter UserAvatars to delete.
     * @example
     * // Delete a few UserAvatars
     * const { count } = await prisma.userAvatar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserAvatarDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserAvatarDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAvatars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAvatarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAvatars
     * const userAvatar = await prisma.userAvatar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserAvatarUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserAvatarUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserAvatar.
     * @param {UserAvatarUpsertArgs} args - Arguments to update or create a UserAvatar.
     * @example
     * // Update or create a UserAvatar
     * const userAvatar = await prisma.userAvatar.upsert({
     *   create: {
     *     // ... data to create a UserAvatar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAvatar we want to update
     *   }
     * })
    **/
    upsert<T extends UserAvatarUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserAvatarUpsertArgs<ExtArgs>>
    ): Prisma__UserAvatarClient<$Result.GetResult<Prisma.$UserAvatarPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more UserAvatars that matches the filter.
     * @param {UserAvatarFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userAvatar = await prisma.userAvatar.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserAvatarFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserAvatar.
     * @param {UserAvatarAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userAvatar = await prisma.userAvatar.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserAvatarAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of UserAvatars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAvatarCountArgs} args - Arguments to filter UserAvatars to count.
     * @example
     * // Count the number of UserAvatars
     * const count = await prisma.userAvatar.count({
     *   where: {
     *     // ... the filter for the UserAvatars we want to count
     *   }
     * })
    **/
    count<T extends UserAvatarCountArgs>(
      args?: Subset<T, UserAvatarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAvatarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAvatar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAvatarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAvatarAggregateArgs>(args: Subset<T, UserAvatarAggregateArgs>): Prisma.PrismaPromise<GetUserAvatarAggregateType<T>>

    /**
     * Group by UserAvatar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAvatarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserAvatarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAvatarGroupByArgs['orderBy'] }
        : { orderBy?: UserAvatarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserAvatarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAvatarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAvatar model
   */
  readonly fields: UserAvatarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAvatar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAvatarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    avatar<T extends AvatarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvatarDefaultArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserAvatar model
   */ 
  interface UserAvatarFieldRefs {
    readonly id: FieldRef<"UserAvatar", 'String'>
    readonly current: FieldRef<"UserAvatar", 'Boolean'>
    readonly userId: FieldRef<"UserAvatar", 'String'>
    readonly avatarId: FieldRef<"UserAvatar", 'String'>
  }
    

  // Custom InputTypes

  /**
   * UserAvatar findUnique
   */
  export type UserAvatarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatar
     */
    select?: UserAvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAvatarInclude<ExtArgs> | null
    /**
     * Filter, which UserAvatar to fetch.
     */
    where: UserAvatarWhereUniqueInput
  }


  /**
   * UserAvatar findUniqueOrThrow
   */
  export type UserAvatarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatar
     */
    select?: UserAvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAvatarInclude<ExtArgs> | null
    /**
     * Filter, which UserAvatar to fetch.
     */
    where: UserAvatarWhereUniqueInput
  }


  /**
   * UserAvatar findFirst
   */
  export type UserAvatarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatar
     */
    select?: UserAvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAvatarInclude<ExtArgs> | null
    /**
     * Filter, which UserAvatar to fetch.
     */
    where?: UserAvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAvatars to fetch.
     */
    orderBy?: UserAvatarOrderByWithRelationInput | UserAvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAvatars.
     */
    cursor?: UserAvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAvatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAvatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAvatars.
     */
    distinct?: UserAvatarScalarFieldEnum | UserAvatarScalarFieldEnum[]
  }


  /**
   * UserAvatar findFirstOrThrow
   */
  export type UserAvatarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatar
     */
    select?: UserAvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAvatarInclude<ExtArgs> | null
    /**
     * Filter, which UserAvatar to fetch.
     */
    where?: UserAvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAvatars to fetch.
     */
    orderBy?: UserAvatarOrderByWithRelationInput | UserAvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAvatars.
     */
    cursor?: UserAvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAvatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAvatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAvatars.
     */
    distinct?: UserAvatarScalarFieldEnum | UserAvatarScalarFieldEnum[]
  }


  /**
   * UserAvatar findMany
   */
  export type UserAvatarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatar
     */
    select?: UserAvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAvatarInclude<ExtArgs> | null
    /**
     * Filter, which UserAvatars to fetch.
     */
    where?: UserAvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAvatars to fetch.
     */
    orderBy?: UserAvatarOrderByWithRelationInput | UserAvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAvatars.
     */
    cursor?: UserAvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAvatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAvatars.
     */
    skip?: number
    distinct?: UserAvatarScalarFieldEnum | UserAvatarScalarFieldEnum[]
  }


  /**
   * UserAvatar create
   */
  export type UserAvatarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatar
     */
    select?: UserAvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAvatarInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAvatar.
     */
    data: XOR<UserAvatarCreateInput, UserAvatarUncheckedCreateInput>
  }


  /**
   * UserAvatar createMany
   */
  export type UserAvatarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAvatars.
     */
    data: UserAvatarCreateManyInput | UserAvatarCreateManyInput[]
  }


  /**
   * UserAvatar update
   */
  export type UserAvatarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatar
     */
    select?: UserAvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAvatarInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAvatar.
     */
    data: XOR<UserAvatarUpdateInput, UserAvatarUncheckedUpdateInput>
    /**
     * Choose, which UserAvatar to update.
     */
    where: UserAvatarWhereUniqueInput
  }


  /**
   * UserAvatar updateMany
   */
  export type UserAvatarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAvatars.
     */
    data: XOR<UserAvatarUpdateManyMutationInput, UserAvatarUncheckedUpdateManyInput>
    /**
     * Filter which UserAvatars to update
     */
    where?: UserAvatarWhereInput
  }


  /**
   * UserAvatar upsert
   */
  export type UserAvatarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatar
     */
    select?: UserAvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAvatarInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAvatar to update in case it exists.
     */
    where: UserAvatarWhereUniqueInput
    /**
     * In case the UserAvatar found by the `where` argument doesn't exist, create a new UserAvatar with this data.
     */
    create: XOR<UserAvatarCreateInput, UserAvatarUncheckedCreateInput>
    /**
     * In case the UserAvatar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAvatarUpdateInput, UserAvatarUncheckedUpdateInput>
  }


  /**
   * UserAvatar delete
   */
  export type UserAvatarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatar
     */
    select?: UserAvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAvatarInclude<ExtArgs> | null
    /**
     * Filter which UserAvatar to delete.
     */
    where: UserAvatarWhereUniqueInput
  }


  /**
   * UserAvatar deleteMany
   */
  export type UserAvatarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAvatars to delete
     */
    where?: UserAvatarWhereInput
  }


  /**
   * UserAvatar findRaw
   */
  export type UserAvatarFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * UserAvatar aggregateRaw
   */
  export type UserAvatarAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * UserAvatar without action
   */
  export type UserAvatarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatar
     */
    select?: UserAvatarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserAvatarInclude<ExtArgs> | null
  }



  /**
   * Model SharedWord
   */

  export type AggregateSharedWord = {
    _count: SharedWordCountAggregateOutputType | null
    _min: SharedWordMinAggregateOutputType | null
    _max: SharedWordMaxAggregateOutputType | null
  }

  export type SharedWordMinAggregateOutputType = {
    id: string | null
    date: string | null
    userId: string | null
    wordId: string | null
    categoryId: string | null
  }

  export type SharedWordMaxAggregateOutputType = {
    id: string | null
    date: string | null
    userId: string | null
    wordId: string | null
    categoryId: string | null
  }

  export type SharedWordCountAggregateOutputType = {
    id: number
    date: number
    userId: number
    wordId: number
    categoryId: number
    _all: number
  }


  export type SharedWordMinAggregateInputType = {
    id?: true
    date?: true
    userId?: true
    wordId?: true
    categoryId?: true
  }

  export type SharedWordMaxAggregateInputType = {
    id?: true
    date?: true
    userId?: true
    wordId?: true
    categoryId?: true
  }

  export type SharedWordCountAggregateInputType = {
    id?: true
    date?: true
    userId?: true
    wordId?: true
    categoryId?: true
    _all?: true
  }

  export type SharedWordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SharedWord to aggregate.
     */
    where?: SharedWordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedWords to fetch.
     */
    orderBy?: SharedWordOrderByWithRelationInput | SharedWordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SharedWordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedWords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedWords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SharedWords
    **/
    _count?: true | SharedWordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SharedWordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SharedWordMaxAggregateInputType
  }

  export type GetSharedWordAggregateType<T extends SharedWordAggregateArgs> = {
        [P in keyof T & keyof AggregateSharedWord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSharedWord[P]>
      : GetScalarType<T[P], AggregateSharedWord[P]>
  }




  export type SharedWordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharedWordWhereInput
    orderBy?: SharedWordOrderByWithAggregationInput | SharedWordOrderByWithAggregationInput[]
    by: SharedWordScalarFieldEnum[] | SharedWordScalarFieldEnum
    having?: SharedWordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SharedWordCountAggregateInputType | true
    _min?: SharedWordMinAggregateInputType
    _max?: SharedWordMaxAggregateInputType
  }

  export type SharedWordGroupByOutputType = {
    id: string
    date: string
    userId: string
    wordId: string
    categoryId: string
    _count: SharedWordCountAggregateOutputType | null
    _min: SharedWordMinAggregateOutputType | null
    _max: SharedWordMaxAggregateOutputType | null
  }

  type GetSharedWordGroupByPayload<T extends SharedWordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SharedWordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SharedWordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SharedWordGroupByOutputType[P]>
            : GetScalarType<T[P], SharedWordGroupByOutputType[P]>
        }
      >
    >


  export type SharedWordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    userId?: boolean
    wordId?: boolean
    categoryId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    word?: boolean | WordDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sharedWord"]>

  export type SharedWordSelectScalar = {
    id?: boolean
    date?: boolean
    userId?: boolean
    wordId?: boolean
    categoryId?: boolean
  }

  export type SharedWordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    word?: boolean | WordDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }


  export type $SharedWordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SharedWord"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      word: Prisma.$WordPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: string
      userId: string
      wordId: string
      categoryId: string
    }, ExtArgs["result"]["sharedWord"]>
    composites: {}
  }


  type SharedWordGetPayload<S extends boolean | null | undefined | SharedWordDefaultArgs> = $Result.GetResult<Prisma.$SharedWordPayload, S>

  type SharedWordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SharedWordFindManyArgs, 'select' | 'include'> & {
      select?: SharedWordCountAggregateInputType | true
    }

  export interface SharedWordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SharedWord'], meta: { name: 'SharedWord' } }
    /**
     * Find zero or one SharedWord that matches the filter.
     * @param {SharedWordFindUniqueArgs} args - Arguments to find a SharedWord
     * @example
     * // Get one SharedWord
     * const sharedWord = await prisma.sharedWord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SharedWordFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SharedWordFindUniqueArgs<ExtArgs>>
    ): Prisma__SharedWordClient<$Result.GetResult<Prisma.$SharedWordPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SharedWord that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SharedWordFindUniqueOrThrowArgs} args - Arguments to find a SharedWord
     * @example
     * // Get one SharedWord
     * const sharedWord = await prisma.sharedWord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SharedWordFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SharedWordFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SharedWordClient<$Result.GetResult<Prisma.$SharedWordPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SharedWord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedWordFindFirstArgs} args - Arguments to find a SharedWord
     * @example
     * // Get one SharedWord
     * const sharedWord = await prisma.sharedWord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SharedWordFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SharedWordFindFirstArgs<ExtArgs>>
    ): Prisma__SharedWordClient<$Result.GetResult<Prisma.$SharedWordPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SharedWord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedWordFindFirstOrThrowArgs} args - Arguments to find a SharedWord
     * @example
     * // Get one SharedWord
     * const sharedWord = await prisma.sharedWord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SharedWordFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SharedWordFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SharedWordClient<$Result.GetResult<Prisma.$SharedWordPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SharedWords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedWordFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SharedWords
     * const sharedWords = await prisma.sharedWord.findMany()
     * 
     * // Get first 10 SharedWords
     * const sharedWords = await prisma.sharedWord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sharedWordWithIdOnly = await prisma.sharedWord.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SharedWordFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SharedWordFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedWordPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SharedWord.
     * @param {SharedWordCreateArgs} args - Arguments to create a SharedWord.
     * @example
     * // Create one SharedWord
     * const SharedWord = await prisma.sharedWord.create({
     *   data: {
     *     // ... data to create a SharedWord
     *   }
     * })
     * 
    **/
    create<T extends SharedWordCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SharedWordCreateArgs<ExtArgs>>
    ): Prisma__SharedWordClient<$Result.GetResult<Prisma.$SharedWordPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SharedWords.
     *     @param {SharedWordCreateManyArgs} args - Arguments to create many SharedWords.
     *     @example
     *     // Create many SharedWords
     *     const sharedWord = await prisma.sharedWord.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SharedWordCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SharedWordCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SharedWord.
     * @param {SharedWordDeleteArgs} args - Arguments to delete one SharedWord.
     * @example
     * // Delete one SharedWord
     * const SharedWord = await prisma.sharedWord.delete({
     *   where: {
     *     // ... filter to delete one SharedWord
     *   }
     * })
     * 
    **/
    delete<T extends SharedWordDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SharedWordDeleteArgs<ExtArgs>>
    ): Prisma__SharedWordClient<$Result.GetResult<Prisma.$SharedWordPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SharedWord.
     * @param {SharedWordUpdateArgs} args - Arguments to update one SharedWord.
     * @example
     * // Update one SharedWord
     * const sharedWord = await prisma.sharedWord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SharedWordUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SharedWordUpdateArgs<ExtArgs>>
    ): Prisma__SharedWordClient<$Result.GetResult<Prisma.$SharedWordPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SharedWords.
     * @param {SharedWordDeleteManyArgs} args - Arguments to filter SharedWords to delete.
     * @example
     * // Delete a few SharedWords
     * const { count } = await prisma.sharedWord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SharedWordDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SharedWordDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SharedWords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedWordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SharedWords
     * const sharedWord = await prisma.sharedWord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SharedWordUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SharedWordUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SharedWord.
     * @param {SharedWordUpsertArgs} args - Arguments to update or create a SharedWord.
     * @example
     * // Update or create a SharedWord
     * const sharedWord = await prisma.sharedWord.upsert({
     *   create: {
     *     // ... data to create a SharedWord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SharedWord we want to update
     *   }
     * })
    **/
    upsert<T extends SharedWordUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SharedWordUpsertArgs<ExtArgs>>
    ): Prisma__SharedWordClient<$Result.GetResult<Prisma.$SharedWordPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more SharedWords that matches the filter.
     * @param {SharedWordFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const sharedWord = await prisma.sharedWord.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: SharedWordFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SharedWord.
     * @param {SharedWordAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const sharedWord = await prisma.sharedWord.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: SharedWordAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of SharedWords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedWordCountArgs} args - Arguments to filter SharedWords to count.
     * @example
     * // Count the number of SharedWords
     * const count = await prisma.sharedWord.count({
     *   where: {
     *     // ... the filter for the SharedWords we want to count
     *   }
     * })
    **/
    count<T extends SharedWordCountArgs>(
      args?: Subset<T, SharedWordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SharedWordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SharedWord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedWordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SharedWordAggregateArgs>(args: Subset<T, SharedWordAggregateArgs>): Prisma.PrismaPromise<GetSharedWordAggregateType<T>>

    /**
     * Group by SharedWord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedWordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SharedWordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SharedWordGroupByArgs['orderBy'] }
        : { orderBy?: SharedWordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SharedWordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSharedWordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SharedWord model
   */
  readonly fields: SharedWordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SharedWord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SharedWordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    word<T extends WordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WordDefaultArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SharedWord model
   */ 
  interface SharedWordFieldRefs {
    readonly id: FieldRef<"SharedWord", 'String'>
    readonly date: FieldRef<"SharedWord", 'String'>
    readonly userId: FieldRef<"SharedWord", 'String'>
    readonly wordId: FieldRef<"SharedWord", 'String'>
    readonly categoryId: FieldRef<"SharedWord", 'String'>
  }
    

  // Custom InputTypes

  /**
   * SharedWord findUnique
   */
  export type SharedWordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedWord
     */
    select?: SharedWordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SharedWordInclude<ExtArgs> | null
    /**
     * Filter, which SharedWord to fetch.
     */
    where: SharedWordWhereUniqueInput
  }


  /**
   * SharedWord findUniqueOrThrow
   */
  export type SharedWordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedWord
     */
    select?: SharedWordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SharedWordInclude<ExtArgs> | null
    /**
     * Filter, which SharedWord to fetch.
     */
    where: SharedWordWhereUniqueInput
  }


  /**
   * SharedWord findFirst
   */
  export type SharedWordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedWord
     */
    select?: SharedWordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SharedWordInclude<ExtArgs> | null
    /**
     * Filter, which SharedWord to fetch.
     */
    where?: SharedWordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedWords to fetch.
     */
    orderBy?: SharedWordOrderByWithRelationInput | SharedWordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SharedWords.
     */
    cursor?: SharedWordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedWords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedWords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SharedWords.
     */
    distinct?: SharedWordScalarFieldEnum | SharedWordScalarFieldEnum[]
  }


  /**
   * SharedWord findFirstOrThrow
   */
  export type SharedWordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedWord
     */
    select?: SharedWordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SharedWordInclude<ExtArgs> | null
    /**
     * Filter, which SharedWord to fetch.
     */
    where?: SharedWordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedWords to fetch.
     */
    orderBy?: SharedWordOrderByWithRelationInput | SharedWordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SharedWords.
     */
    cursor?: SharedWordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedWords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedWords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SharedWords.
     */
    distinct?: SharedWordScalarFieldEnum | SharedWordScalarFieldEnum[]
  }


  /**
   * SharedWord findMany
   */
  export type SharedWordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedWord
     */
    select?: SharedWordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SharedWordInclude<ExtArgs> | null
    /**
     * Filter, which SharedWords to fetch.
     */
    where?: SharedWordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedWords to fetch.
     */
    orderBy?: SharedWordOrderByWithRelationInput | SharedWordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SharedWords.
     */
    cursor?: SharedWordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedWords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedWords.
     */
    skip?: number
    distinct?: SharedWordScalarFieldEnum | SharedWordScalarFieldEnum[]
  }


  /**
   * SharedWord create
   */
  export type SharedWordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedWord
     */
    select?: SharedWordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SharedWordInclude<ExtArgs> | null
    /**
     * The data needed to create a SharedWord.
     */
    data: XOR<SharedWordCreateInput, SharedWordUncheckedCreateInput>
  }


  /**
   * SharedWord createMany
   */
  export type SharedWordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SharedWords.
     */
    data: SharedWordCreateManyInput | SharedWordCreateManyInput[]
  }


  /**
   * SharedWord update
   */
  export type SharedWordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedWord
     */
    select?: SharedWordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SharedWordInclude<ExtArgs> | null
    /**
     * The data needed to update a SharedWord.
     */
    data: XOR<SharedWordUpdateInput, SharedWordUncheckedUpdateInput>
    /**
     * Choose, which SharedWord to update.
     */
    where: SharedWordWhereUniqueInput
  }


  /**
   * SharedWord updateMany
   */
  export type SharedWordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SharedWords.
     */
    data: XOR<SharedWordUpdateManyMutationInput, SharedWordUncheckedUpdateManyInput>
    /**
     * Filter which SharedWords to update
     */
    where?: SharedWordWhereInput
  }


  /**
   * SharedWord upsert
   */
  export type SharedWordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedWord
     */
    select?: SharedWordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SharedWordInclude<ExtArgs> | null
    /**
     * The filter to search for the SharedWord to update in case it exists.
     */
    where: SharedWordWhereUniqueInput
    /**
     * In case the SharedWord found by the `where` argument doesn't exist, create a new SharedWord with this data.
     */
    create: XOR<SharedWordCreateInput, SharedWordUncheckedCreateInput>
    /**
     * In case the SharedWord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SharedWordUpdateInput, SharedWordUncheckedUpdateInput>
  }


  /**
   * SharedWord delete
   */
  export type SharedWordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedWord
     */
    select?: SharedWordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SharedWordInclude<ExtArgs> | null
    /**
     * Filter which SharedWord to delete.
     */
    where: SharedWordWhereUniqueInput
  }


  /**
   * SharedWord deleteMany
   */
  export type SharedWordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SharedWords to delete
     */
    where?: SharedWordWhereInput
  }


  /**
   * SharedWord findRaw
   */
  export type SharedWordFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * SharedWord aggregateRaw
   */
  export type SharedWordAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * SharedWord without action
   */
  export type SharedWordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedWord
     */
    select?: SharedWordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SharedWordInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    firstname: 'firstname',
    lastname: 'lastname',
    password: 'password',
    avatarId: 'avatarId',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    color: 'color',
    createdBy: 'createdBy'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const WordScalarFieldEnum: {
    id: 'id',
    value: 'value',
    desc: 'desc',
    spelling: 'spelling',
    date: 'date',
    color: 'color',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    categoryId: 'categoryId'
  };

  export type WordScalarFieldEnum = (typeof WordScalarFieldEnum)[keyof typeof WordScalarFieldEnum]


  export const AvatarScalarFieldEnum: {
    id: 'id',
    path: 'path'
  };

  export type AvatarScalarFieldEnum = (typeof AvatarScalarFieldEnum)[keyof typeof AvatarScalarFieldEnum]


  export const UserAvatarScalarFieldEnum: {
    id: 'id',
    current: 'current',
    userId: 'userId',
    avatarId: 'avatarId'
  };

  export type UserAvatarScalarFieldEnum = (typeof UserAvatarScalarFieldEnum)[keyof typeof UserAvatarScalarFieldEnum]


  export const SharedWordScalarFieldEnum: {
    id: 'id',
    date: 'date',
    userId: 'userId',
    wordId: 'wordId',
    categoryId: 'categoryId'
  };

  export type SharedWordScalarFieldEnum = (typeof SharedWordScalarFieldEnum)[keyof typeof SharedWordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatarId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    words?: WordListRelationFilter
    categories?: CategoryListRelationFilter
    userAvatart?: UserAvatarListRelationFilter
    sharedWords?: SharedWordListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    avatarId?: SortOrder
    createdAt?: SortOrder
    words?: WordOrderByRelationAggregateInput
    categories?: CategoryOrderByRelationAggregateInput
    userAvatart?: UserAvatarOrderByRelationAggregateInput
    sharedWords?: SharedWordOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatarId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    words?: WordListRelationFilter
    categories?: CategoryListRelationFilter
    userAvatart?: UserAvatarListRelationFilter
    sharedWords?: SharedWordListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    avatarId?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    firstname?: StringWithAggregatesFilter<"User"> | string
    lastname?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    avatarId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    color?: StringNullableFilter<"Category"> | string | null
    createdBy?: StringFilter<"Category"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    words?: WordListRelationFilter
    sharedWords?: SharedWordListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    createdBy?: SortOrder
    user?: UserOrderByWithRelationInput
    words?: WordOrderByRelationAggregateInput
    sharedWords?: SharedWordOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    color?: StringNullableFilter<"Category"> | string | null
    createdBy?: StringFilter<"Category"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    words?: WordListRelationFilter
    sharedWords?: SharedWordListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    createdBy?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    color?: StringNullableWithAggregatesFilter<"Category"> | string | null
    createdBy?: StringWithAggregatesFilter<"Category"> | string
  }

  export type WordWhereInput = {
    AND?: WordWhereInput | WordWhereInput[]
    OR?: WordWhereInput[]
    NOT?: WordWhereInput | WordWhereInput[]
    id?: StringFilter<"Word"> | string
    value?: StringFilter<"Word"> | string
    desc?: StringFilter<"Word"> | string
    spelling?: StringFilter<"Word"> | string
    date?: StringFilter<"Word"> | string
    color?: StringNullableFilter<"Word"> | string | null
    createdAt?: DateTimeFilter<"Word"> | Date | string
    createdBy?: StringFilter<"Word"> | string
    categoryId?: StringFilter<"Word"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    sharedWords?: SharedWordListRelationFilter
  }

  export type WordOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    desc?: SortOrder
    spelling?: SortOrder
    date?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    categoryId?: SortOrder
    user?: UserOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    sharedWords?: SharedWordOrderByRelationAggregateInput
  }

  export type WordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WordWhereInput | WordWhereInput[]
    OR?: WordWhereInput[]
    NOT?: WordWhereInput | WordWhereInput[]
    value?: StringFilter<"Word"> | string
    desc?: StringFilter<"Word"> | string
    spelling?: StringFilter<"Word"> | string
    date?: StringFilter<"Word"> | string
    color?: StringNullableFilter<"Word"> | string | null
    createdAt?: DateTimeFilter<"Word"> | Date | string
    createdBy?: StringFilter<"Word"> | string
    categoryId?: StringFilter<"Word"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    sharedWords?: SharedWordListRelationFilter
  }, "id">

  export type WordOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    desc?: SortOrder
    spelling?: SortOrder
    date?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    categoryId?: SortOrder
    _count?: WordCountOrderByAggregateInput
    _max?: WordMaxOrderByAggregateInput
    _min?: WordMinOrderByAggregateInput
  }

  export type WordScalarWhereWithAggregatesInput = {
    AND?: WordScalarWhereWithAggregatesInput | WordScalarWhereWithAggregatesInput[]
    OR?: WordScalarWhereWithAggregatesInput[]
    NOT?: WordScalarWhereWithAggregatesInput | WordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Word"> | string
    value?: StringWithAggregatesFilter<"Word"> | string
    desc?: StringWithAggregatesFilter<"Word"> | string
    spelling?: StringWithAggregatesFilter<"Word"> | string
    date?: StringWithAggregatesFilter<"Word"> | string
    color?: StringNullableWithAggregatesFilter<"Word"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Word"> | Date | string
    createdBy?: StringWithAggregatesFilter<"Word"> | string
    categoryId?: StringWithAggregatesFilter<"Word"> | string
  }

  export type AvatarWhereInput = {
    AND?: AvatarWhereInput | AvatarWhereInput[]
    OR?: AvatarWhereInput[]
    NOT?: AvatarWhereInput | AvatarWhereInput[]
    id?: StringFilter<"Avatar"> | string
    path?: StringFilter<"Avatar"> | string
    userAvatar?: UserAvatarListRelationFilter
  }

  export type AvatarOrderByWithRelationInput = {
    id?: SortOrder
    path?: SortOrder
    userAvatar?: UserAvatarOrderByRelationAggregateInput
  }

  export type AvatarWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvatarWhereInput | AvatarWhereInput[]
    OR?: AvatarWhereInput[]
    NOT?: AvatarWhereInput | AvatarWhereInput[]
    path?: StringFilter<"Avatar"> | string
    userAvatar?: UserAvatarListRelationFilter
  }, "id">

  export type AvatarOrderByWithAggregationInput = {
    id?: SortOrder
    path?: SortOrder
    _count?: AvatarCountOrderByAggregateInput
    _max?: AvatarMaxOrderByAggregateInput
    _min?: AvatarMinOrderByAggregateInput
  }

  export type AvatarScalarWhereWithAggregatesInput = {
    AND?: AvatarScalarWhereWithAggregatesInput | AvatarScalarWhereWithAggregatesInput[]
    OR?: AvatarScalarWhereWithAggregatesInput[]
    NOT?: AvatarScalarWhereWithAggregatesInput | AvatarScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Avatar"> | string
    path?: StringWithAggregatesFilter<"Avatar"> | string
  }

  export type UserAvatarWhereInput = {
    AND?: UserAvatarWhereInput | UserAvatarWhereInput[]
    OR?: UserAvatarWhereInput[]
    NOT?: UserAvatarWhereInput | UserAvatarWhereInput[]
    id?: StringFilter<"UserAvatar"> | string
    current?: BoolFilter<"UserAvatar"> | boolean
    userId?: StringFilter<"UserAvatar"> | string
    avatarId?: StringFilter<"UserAvatar"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    avatar?: XOR<AvatarRelationFilter, AvatarWhereInput>
  }

  export type UserAvatarOrderByWithRelationInput = {
    id?: SortOrder
    current?: SortOrder
    userId?: SortOrder
    avatarId?: SortOrder
    user?: UserOrderByWithRelationInput
    avatar?: AvatarOrderByWithRelationInput
  }

  export type UserAvatarWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserAvatarWhereInput | UserAvatarWhereInput[]
    OR?: UserAvatarWhereInput[]
    NOT?: UserAvatarWhereInput | UserAvatarWhereInput[]
    current?: BoolFilter<"UserAvatar"> | boolean
    userId?: StringFilter<"UserAvatar"> | string
    avatarId?: StringFilter<"UserAvatar"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    avatar?: XOR<AvatarRelationFilter, AvatarWhereInput>
  }, "id">

  export type UserAvatarOrderByWithAggregationInput = {
    id?: SortOrder
    current?: SortOrder
    userId?: SortOrder
    avatarId?: SortOrder
    _count?: UserAvatarCountOrderByAggregateInput
    _max?: UserAvatarMaxOrderByAggregateInput
    _min?: UserAvatarMinOrderByAggregateInput
  }

  export type UserAvatarScalarWhereWithAggregatesInput = {
    AND?: UserAvatarScalarWhereWithAggregatesInput | UserAvatarScalarWhereWithAggregatesInput[]
    OR?: UserAvatarScalarWhereWithAggregatesInput[]
    NOT?: UserAvatarScalarWhereWithAggregatesInput | UserAvatarScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserAvatar"> | string
    current?: BoolWithAggregatesFilter<"UserAvatar"> | boolean
    userId?: StringWithAggregatesFilter<"UserAvatar"> | string
    avatarId?: StringWithAggregatesFilter<"UserAvatar"> | string
  }

  export type SharedWordWhereInput = {
    AND?: SharedWordWhereInput | SharedWordWhereInput[]
    OR?: SharedWordWhereInput[]
    NOT?: SharedWordWhereInput | SharedWordWhereInput[]
    id?: StringFilter<"SharedWord"> | string
    date?: StringFilter<"SharedWord"> | string
    userId?: StringFilter<"SharedWord"> | string
    wordId?: StringFilter<"SharedWord"> | string
    categoryId?: StringFilter<"SharedWord"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    word?: XOR<WordRelationFilter, WordWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
  }

  export type SharedWordOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    wordId?: SortOrder
    categoryId?: SortOrder
    user?: UserOrderByWithRelationInput
    word?: WordOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type SharedWordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SharedWordWhereInput | SharedWordWhereInput[]
    OR?: SharedWordWhereInput[]
    NOT?: SharedWordWhereInput | SharedWordWhereInput[]
    date?: StringFilter<"SharedWord"> | string
    userId?: StringFilter<"SharedWord"> | string
    wordId?: StringFilter<"SharedWord"> | string
    categoryId?: StringFilter<"SharedWord"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    word?: XOR<WordRelationFilter, WordWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
  }, "id">

  export type SharedWordOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    wordId?: SortOrder
    categoryId?: SortOrder
    _count?: SharedWordCountOrderByAggregateInput
    _max?: SharedWordMaxOrderByAggregateInput
    _min?: SharedWordMinOrderByAggregateInput
  }

  export type SharedWordScalarWhereWithAggregatesInput = {
    AND?: SharedWordScalarWhereWithAggregatesInput | SharedWordScalarWhereWithAggregatesInput[]
    OR?: SharedWordScalarWhereWithAggregatesInput[]
    NOT?: SharedWordScalarWhereWithAggregatesInput | SharedWordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SharedWord"> | string
    date?: StringWithAggregatesFilter<"SharedWord"> | string
    userId?: StringWithAggregatesFilter<"SharedWord"> | string
    wordId?: StringWithAggregatesFilter<"SharedWord"> | string
    categoryId?: StringWithAggregatesFilter<"SharedWord"> | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    firstname: string
    lastname: string
    password: string
    avatarId?: string | null
    createdAt?: Date | string
    words?: WordCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    userAvatart?: UserAvatarCreateNestedManyWithoutUserInput
    sharedWords?: SharedWordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    firstname: string
    lastname: string
    password: string
    avatarId?: string | null
    createdAt?: Date | string
    words?: WordUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    userAvatart?: UserAvatarUncheckedCreateNestedManyWithoutUserInput
    sharedWords?: SharedWordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    words?: WordUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    userAvatart?: UserAvatarUpdateManyWithoutUserNestedInput
    sharedWords?: SharedWordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    words?: WordUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    userAvatart?: UserAvatarUncheckedUpdateManyWithoutUserNestedInput
    sharedWords?: SharedWordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    firstname: string
    lastname: string
    password: string
    avatarId?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    color?: string | null
    user: UserCreateNestedOneWithoutCategoriesInput
    words?: WordCreateNestedManyWithoutCategoryInput
    sharedWords?: SharedWordCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    color?: string | null
    createdBy: string
    words?: WordUncheckedCreateNestedManyWithoutCategoryInput
    sharedWords?: SharedWordUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCategoriesNestedInput
    words?: WordUpdateManyWithoutCategoryNestedInput
    sharedWords?: SharedWordUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    words?: WordUncheckedUpdateManyWithoutCategoryNestedInput
    sharedWords?: SharedWordUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    color?: string | null
    createdBy: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type WordCreateInput = {
    id?: string
    value: string
    desc: string
    spelling: string
    date: string
    color?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWordsInput
    category: CategoryCreateNestedOneWithoutWordsInput
    sharedWords?: SharedWordCreateNestedManyWithoutWordInput
  }

  export type WordUncheckedCreateInput = {
    id?: string
    value: string
    desc: string
    spelling: string
    date: string
    color?: string | null
    createdAt?: Date | string
    createdBy: string
    categoryId: string
    sharedWords?: SharedWordUncheckedCreateNestedManyWithoutWordInput
  }

  export type WordUpdateInput = {
    value?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    spelling?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWordsNestedInput
    category?: CategoryUpdateOneRequiredWithoutWordsNestedInput
    sharedWords?: SharedWordUpdateManyWithoutWordNestedInput
  }

  export type WordUncheckedUpdateInput = {
    value?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    spelling?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    sharedWords?: SharedWordUncheckedUpdateManyWithoutWordNestedInput
  }

  export type WordCreateManyInput = {
    id?: string
    value: string
    desc: string
    spelling: string
    date: string
    color?: string | null
    createdAt?: Date | string
    createdBy: string
    categoryId: string
  }

  export type WordUpdateManyMutationInput = {
    value?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    spelling?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WordUncheckedUpdateManyInput = {
    value?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    spelling?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type AvatarCreateInput = {
    id?: string
    path: string
    userAvatar?: UserAvatarCreateNestedManyWithoutAvatarInput
  }

  export type AvatarUncheckedCreateInput = {
    id?: string
    path: string
    userAvatar?: UserAvatarUncheckedCreateNestedManyWithoutAvatarInput
  }

  export type AvatarUpdateInput = {
    path?: StringFieldUpdateOperationsInput | string
    userAvatar?: UserAvatarUpdateManyWithoutAvatarNestedInput
  }

  export type AvatarUncheckedUpdateInput = {
    path?: StringFieldUpdateOperationsInput | string
    userAvatar?: UserAvatarUncheckedUpdateManyWithoutAvatarNestedInput
  }

  export type AvatarCreateManyInput = {
    id?: string
    path: string
  }

  export type AvatarUpdateManyMutationInput = {
    path?: StringFieldUpdateOperationsInput | string
  }

  export type AvatarUncheckedUpdateManyInput = {
    path?: StringFieldUpdateOperationsInput | string
  }

  export type UserAvatarCreateInput = {
    id?: string
    current: boolean
    user: UserCreateNestedOneWithoutUserAvatartInput
    avatar: AvatarCreateNestedOneWithoutUserAvatarInput
  }

  export type UserAvatarUncheckedCreateInput = {
    id?: string
    current: boolean
    userId: string
    avatarId: string
  }

  export type UserAvatarUpdateInput = {
    current?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutUserAvatartNestedInput
    avatar?: AvatarUpdateOneRequiredWithoutUserAvatarNestedInput
  }

  export type UserAvatarUncheckedUpdateInput = {
    current?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    avatarId?: StringFieldUpdateOperationsInput | string
  }

  export type UserAvatarCreateManyInput = {
    id?: string
    current: boolean
    userId: string
    avatarId: string
  }

  export type UserAvatarUpdateManyMutationInput = {
    current?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserAvatarUncheckedUpdateManyInput = {
    current?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    avatarId?: StringFieldUpdateOperationsInput | string
  }

  export type SharedWordCreateInput = {
    id?: string
    date: string
    user: UserCreateNestedOneWithoutSharedWordsInput
    word: WordCreateNestedOneWithoutSharedWordsInput
    category: CategoryCreateNestedOneWithoutSharedWordsInput
  }

  export type SharedWordUncheckedCreateInput = {
    id?: string
    date: string
    userId: string
    wordId: string
    categoryId: string
  }

  export type SharedWordUpdateInput = {
    date?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutSharedWordsNestedInput
    word?: WordUpdateOneRequiredWithoutSharedWordsNestedInput
    category?: CategoryUpdateOneRequiredWithoutSharedWordsNestedInput
  }

  export type SharedWordUncheckedUpdateInput = {
    date?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type SharedWordCreateManyInput = {
    id?: string
    date: string
    userId: string
    wordId: string
    categoryId: string
  }

  export type SharedWordUpdateManyMutationInput = {
    date?: StringFieldUpdateOperationsInput | string
  }

  export type SharedWordUncheckedUpdateManyInput = {
    date?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type WordListRelationFilter = {
    every?: WordWhereInput
    some?: WordWhereInput
    none?: WordWhereInput
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type UserAvatarListRelationFilter = {
    every?: UserAvatarWhereInput
    some?: UserAvatarWhereInput
    none?: UserAvatarWhereInput
  }

  export type SharedWordListRelationFilter = {
    every?: SharedWordWhereInput
    some?: SharedWordWhereInput
    none?: SharedWordWhereInput
  }

  export type WordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserAvatarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SharedWordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    avatarId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    avatarId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    avatarId?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    createdBy?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    createdBy?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    createdBy?: SortOrder
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type WordCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    desc?: SortOrder
    spelling?: SortOrder
    date?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    categoryId?: SortOrder
  }

  export type WordMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    desc?: SortOrder
    spelling?: SortOrder
    date?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    categoryId?: SortOrder
  }

  export type WordMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    desc?: SortOrder
    spelling?: SortOrder
    date?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    categoryId?: SortOrder
  }

  export type AvatarCountOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
  }

  export type AvatarMaxOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
  }

  export type AvatarMinOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AvatarRelationFilter = {
    is?: AvatarWhereInput
    isNot?: AvatarWhereInput
  }

  export type UserAvatarCountOrderByAggregateInput = {
    id?: SortOrder
    current?: SortOrder
    userId?: SortOrder
    avatarId?: SortOrder
  }

  export type UserAvatarMaxOrderByAggregateInput = {
    id?: SortOrder
    current?: SortOrder
    userId?: SortOrder
    avatarId?: SortOrder
  }

  export type UserAvatarMinOrderByAggregateInput = {
    id?: SortOrder
    current?: SortOrder
    userId?: SortOrder
    avatarId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type WordRelationFilter = {
    is?: WordWhereInput
    isNot?: WordWhereInput
  }

  export type SharedWordCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    wordId?: SortOrder
    categoryId?: SortOrder
  }

  export type SharedWordMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    wordId?: SortOrder
    categoryId?: SortOrder
  }

  export type SharedWordMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    wordId?: SortOrder
    categoryId?: SortOrder
  }

  export type WordCreateNestedManyWithoutUserInput = {
    create?: XOR<WordCreateWithoutUserInput, WordUncheckedCreateWithoutUserInput> | WordCreateWithoutUserInput[] | WordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WordCreateOrConnectWithoutUserInput | WordCreateOrConnectWithoutUserInput[]
    createMany?: WordCreateManyUserInputEnvelope
    connect?: WordWhereUniqueInput | WordWhereUniqueInput[]
  }

  export type CategoryCreateNestedManyWithoutUserInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type UserAvatarCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAvatarCreateWithoutUserInput, UserAvatarUncheckedCreateWithoutUserInput> | UserAvatarCreateWithoutUserInput[] | UserAvatarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAvatarCreateOrConnectWithoutUserInput | UserAvatarCreateOrConnectWithoutUserInput[]
    createMany?: UserAvatarCreateManyUserInputEnvelope
    connect?: UserAvatarWhereUniqueInput | UserAvatarWhereUniqueInput[]
  }

  export type SharedWordCreateNestedManyWithoutUserInput = {
    create?: XOR<SharedWordCreateWithoutUserInput, SharedWordUncheckedCreateWithoutUserInput> | SharedWordCreateWithoutUserInput[] | SharedWordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SharedWordCreateOrConnectWithoutUserInput | SharedWordCreateOrConnectWithoutUserInput[]
    createMany?: SharedWordCreateManyUserInputEnvelope
    connect?: SharedWordWhereUniqueInput | SharedWordWhereUniqueInput[]
  }

  export type WordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WordCreateWithoutUserInput, WordUncheckedCreateWithoutUserInput> | WordCreateWithoutUserInput[] | WordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WordCreateOrConnectWithoutUserInput | WordCreateOrConnectWithoutUserInput[]
    createMany?: WordCreateManyUserInputEnvelope
    connect?: WordWhereUniqueInput | WordWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type UserAvatarUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAvatarCreateWithoutUserInput, UserAvatarUncheckedCreateWithoutUserInput> | UserAvatarCreateWithoutUserInput[] | UserAvatarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAvatarCreateOrConnectWithoutUserInput | UserAvatarCreateOrConnectWithoutUserInput[]
    createMany?: UserAvatarCreateManyUserInputEnvelope
    connect?: UserAvatarWhereUniqueInput | UserAvatarWhereUniqueInput[]
  }

  export type SharedWordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SharedWordCreateWithoutUserInput, SharedWordUncheckedCreateWithoutUserInput> | SharedWordCreateWithoutUserInput[] | SharedWordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SharedWordCreateOrConnectWithoutUserInput | SharedWordCreateOrConnectWithoutUserInput[]
    createMany?: SharedWordCreateManyUserInputEnvelope
    connect?: SharedWordWhereUniqueInput | SharedWordWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WordUpdateManyWithoutUserNestedInput = {
    create?: XOR<WordCreateWithoutUserInput, WordUncheckedCreateWithoutUserInput> | WordCreateWithoutUserInput[] | WordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WordCreateOrConnectWithoutUserInput | WordCreateOrConnectWithoutUserInput[]
    upsert?: WordUpsertWithWhereUniqueWithoutUserInput | WordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WordCreateManyUserInputEnvelope
    set?: WordWhereUniqueInput | WordWhereUniqueInput[]
    disconnect?: WordWhereUniqueInput | WordWhereUniqueInput[]
    delete?: WordWhereUniqueInput | WordWhereUniqueInput[]
    connect?: WordWhereUniqueInput | WordWhereUniqueInput[]
    update?: WordUpdateWithWhereUniqueWithoutUserInput | WordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WordUpdateManyWithWhereWithoutUserInput | WordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WordScalarWhereInput | WordScalarWhereInput[]
  }

  export type CategoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutUserInput | CategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutUserInput | CategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutUserInput | CategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type UserAvatarUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAvatarCreateWithoutUserInput, UserAvatarUncheckedCreateWithoutUserInput> | UserAvatarCreateWithoutUserInput[] | UserAvatarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAvatarCreateOrConnectWithoutUserInput | UserAvatarCreateOrConnectWithoutUserInput[]
    upsert?: UserAvatarUpsertWithWhereUniqueWithoutUserInput | UserAvatarUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAvatarCreateManyUserInputEnvelope
    set?: UserAvatarWhereUniqueInput | UserAvatarWhereUniqueInput[]
    disconnect?: UserAvatarWhereUniqueInput | UserAvatarWhereUniqueInput[]
    delete?: UserAvatarWhereUniqueInput | UserAvatarWhereUniqueInput[]
    connect?: UserAvatarWhereUniqueInput | UserAvatarWhereUniqueInput[]
    update?: UserAvatarUpdateWithWhereUniqueWithoutUserInput | UserAvatarUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAvatarUpdateManyWithWhereWithoutUserInput | UserAvatarUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAvatarScalarWhereInput | UserAvatarScalarWhereInput[]
  }

  export type SharedWordUpdateManyWithoutUserNestedInput = {
    create?: XOR<SharedWordCreateWithoutUserInput, SharedWordUncheckedCreateWithoutUserInput> | SharedWordCreateWithoutUserInput[] | SharedWordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SharedWordCreateOrConnectWithoutUserInput | SharedWordCreateOrConnectWithoutUserInput[]
    upsert?: SharedWordUpsertWithWhereUniqueWithoutUserInput | SharedWordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SharedWordCreateManyUserInputEnvelope
    set?: SharedWordWhereUniqueInput | SharedWordWhereUniqueInput[]
    disconnect?: SharedWordWhereUniqueInput | SharedWordWhereUniqueInput[]
    delete?: SharedWordWhereUniqueInput | SharedWordWhereUniqueInput[]
    connect?: SharedWordWhereUniqueInput | SharedWordWhereUniqueInput[]
    update?: SharedWordUpdateWithWhereUniqueWithoutUserInput | SharedWordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SharedWordUpdateManyWithWhereWithoutUserInput | SharedWordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SharedWordScalarWhereInput | SharedWordScalarWhereInput[]
  }

  export type WordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WordCreateWithoutUserInput, WordUncheckedCreateWithoutUserInput> | WordCreateWithoutUserInput[] | WordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WordCreateOrConnectWithoutUserInput | WordCreateOrConnectWithoutUserInput[]
    upsert?: WordUpsertWithWhereUniqueWithoutUserInput | WordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WordCreateManyUserInputEnvelope
    set?: WordWhereUniqueInput | WordWhereUniqueInput[]
    disconnect?: WordWhereUniqueInput | WordWhereUniqueInput[]
    delete?: WordWhereUniqueInput | WordWhereUniqueInput[]
    connect?: WordWhereUniqueInput | WordWhereUniqueInput[]
    update?: WordUpdateWithWhereUniqueWithoutUserInput | WordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WordUpdateManyWithWhereWithoutUserInput | WordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WordScalarWhereInput | WordScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutUserInput | CategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutUserInput | CategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutUserInput | CategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type UserAvatarUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAvatarCreateWithoutUserInput, UserAvatarUncheckedCreateWithoutUserInput> | UserAvatarCreateWithoutUserInput[] | UserAvatarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAvatarCreateOrConnectWithoutUserInput | UserAvatarCreateOrConnectWithoutUserInput[]
    upsert?: UserAvatarUpsertWithWhereUniqueWithoutUserInput | UserAvatarUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAvatarCreateManyUserInputEnvelope
    set?: UserAvatarWhereUniqueInput | UserAvatarWhereUniqueInput[]
    disconnect?: UserAvatarWhereUniqueInput | UserAvatarWhereUniqueInput[]
    delete?: UserAvatarWhereUniqueInput | UserAvatarWhereUniqueInput[]
    connect?: UserAvatarWhereUniqueInput | UserAvatarWhereUniqueInput[]
    update?: UserAvatarUpdateWithWhereUniqueWithoutUserInput | UserAvatarUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAvatarUpdateManyWithWhereWithoutUserInput | UserAvatarUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAvatarScalarWhereInput | UserAvatarScalarWhereInput[]
  }

  export type SharedWordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SharedWordCreateWithoutUserInput, SharedWordUncheckedCreateWithoutUserInput> | SharedWordCreateWithoutUserInput[] | SharedWordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SharedWordCreateOrConnectWithoutUserInput | SharedWordCreateOrConnectWithoutUserInput[]
    upsert?: SharedWordUpsertWithWhereUniqueWithoutUserInput | SharedWordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SharedWordCreateManyUserInputEnvelope
    set?: SharedWordWhereUniqueInput | SharedWordWhereUniqueInput[]
    disconnect?: SharedWordWhereUniqueInput | SharedWordWhereUniqueInput[]
    delete?: SharedWordWhereUniqueInput | SharedWordWhereUniqueInput[]
    connect?: SharedWordWhereUniqueInput | SharedWordWhereUniqueInput[]
    update?: SharedWordUpdateWithWhereUniqueWithoutUserInput | SharedWordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SharedWordUpdateManyWithWhereWithoutUserInput | SharedWordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SharedWordScalarWhereInput | SharedWordScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoriesInput
    connect?: UserWhereUniqueInput
  }

  export type WordCreateNestedManyWithoutCategoryInput = {
    create?: XOR<WordCreateWithoutCategoryInput, WordUncheckedCreateWithoutCategoryInput> | WordCreateWithoutCategoryInput[] | WordUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: WordCreateOrConnectWithoutCategoryInput | WordCreateOrConnectWithoutCategoryInput[]
    createMany?: WordCreateManyCategoryInputEnvelope
    connect?: WordWhereUniqueInput | WordWhereUniqueInput[]
  }

  export type SharedWordCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SharedWordCreateWithoutCategoryInput, SharedWordUncheckedCreateWithoutCategoryInput> | SharedWordCreateWithoutCategoryInput[] | SharedWordUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SharedWordCreateOrConnectWithoutCategoryInput | SharedWordCreateOrConnectWithoutCategoryInput[]
    createMany?: SharedWordCreateManyCategoryInputEnvelope
    connect?: SharedWordWhereUniqueInput | SharedWordWhereUniqueInput[]
  }

  export type WordUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<WordCreateWithoutCategoryInput, WordUncheckedCreateWithoutCategoryInput> | WordCreateWithoutCategoryInput[] | WordUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: WordCreateOrConnectWithoutCategoryInput | WordCreateOrConnectWithoutCategoryInput[]
    createMany?: WordCreateManyCategoryInputEnvelope
    connect?: WordWhereUniqueInput | WordWhereUniqueInput[]
  }

  export type SharedWordUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SharedWordCreateWithoutCategoryInput, SharedWordUncheckedCreateWithoutCategoryInput> | SharedWordCreateWithoutCategoryInput[] | SharedWordUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SharedWordCreateOrConnectWithoutCategoryInput | SharedWordCreateOrConnectWithoutCategoryInput[]
    createMany?: SharedWordCreateManyCategoryInputEnvelope
    connect?: SharedWordWhereUniqueInput | SharedWordWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoriesInput
    upsert?: UserUpsertWithoutCategoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCategoriesInput, UserUpdateWithoutCategoriesInput>, UserUncheckedUpdateWithoutCategoriesInput>
  }

  export type WordUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<WordCreateWithoutCategoryInput, WordUncheckedCreateWithoutCategoryInput> | WordCreateWithoutCategoryInput[] | WordUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: WordCreateOrConnectWithoutCategoryInput | WordCreateOrConnectWithoutCategoryInput[]
    upsert?: WordUpsertWithWhereUniqueWithoutCategoryInput | WordUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: WordCreateManyCategoryInputEnvelope
    set?: WordWhereUniqueInput | WordWhereUniqueInput[]
    disconnect?: WordWhereUniqueInput | WordWhereUniqueInput[]
    delete?: WordWhereUniqueInput | WordWhereUniqueInput[]
    connect?: WordWhereUniqueInput | WordWhereUniqueInput[]
    update?: WordUpdateWithWhereUniqueWithoutCategoryInput | WordUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: WordUpdateManyWithWhereWithoutCategoryInput | WordUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: WordScalarWhereInput | WordScalarWhereInput[]
  }

  export type SharedWordUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SharedWordCreateWithoutCategoryInput, SharedWordUncheckedCreateWithoutCategoryInput> | SharedWordCreateWithoutCategoryInput[] | SharedWordUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SharedWordCreateOrConnectWithoutCategoryInput | SharedWordCreateOrConnectWithoutCategoryInput[]
    upsert?: SharedWordUpsertWithWhereUniqueWithoutCategoryInput | SharedWordUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SharedWordCreateManyCategoryInputEnvelope
    set?: SharedWordWhereUniqueInput | SharedWordWhereUniqueInput[]
    disconnect?: SharedWordWhereUniqueInput | SharedWordWhereUniqueInput[]
    delete?: SharedWordWhereUniqueInput | SharedWordWhereUniqueInput[]
    connect?: SharedWordWhereUniqueInput | SharedWordWhereUniqueInput[]
    update?: SharedWordUpdateWithWhereUniqueWithoutCategoryInput | SharedWordUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SharedWordUpdateManyWithWhereWithoutCategoryInput | SharedWordUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SharedWordScalarWhereInput | SharedWordScalarWhereInput[]
  }

  export type WordUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<WordCreateWithoutCategoryInput, WordUncheckedCreateWithoutCategoryInput> | WordCreateWithoutCategoryInput[] | WordUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: WordCreateOrConnectWithoutCategoryInput | WordCreateOrConnectWithoutCategoryInput[]
    upsert?: WordUpsertWithWhereUniqueWithoutCategoryInput | WordUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: WordCreateManyCategoryInputEnvelope
    set?: WordWhereUniqueInput | WordWhereUniqueInput[]
    disconnect?: WordWhereUniqueInput | WordWhereUniqueInput[]
    delete?: WordWhereUniqueInput | WordWhereUniqueInput[]
    connect?: WordWhereUniqueInput | WordWhereUniqueInput[]
    update?: WordUpdateWithWhereUniqueWithoutCategoryInput | WordUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: WordUpdateManyWithWhereWithoutCategoryInput | WordUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: WordScalarWhereInput | WordScalarWhereInput[]
  }

  export type SharedWordUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SharedWordCreateWithoutCategoryInput, SharedWordUncheckedCreateWithoutCategoryInput> | SharedWordCreateWithoutCategoryInput[] | SharedWordUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SharedWordCreateOrConnectWithoutCategoryInput | SharedWordCreateOrConnectWithoutCategoryInput[]
    upsert?: SharedWordUpsertWithWhereUniqueWithoutCategoryInput | SharedWordUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SharedWordCreateManyCategoryInputEnvelope
    set?: SharedWordWhereUniqueInput | SharedWordWhereUniqueInput[]
    disconnect?: SharedWordWhereUniqueInput | SharedWordWhereUniqueInput[]
    delete?: SharedWordWhereUniqueInput | SharedWordWhereUniqueInput[]
    connect?: SharedWordWhereUniqueInput | SharedWordWhereUniqueInput[]
    update?: SharedWordUpdateWithWhereUniqueWithoutCategoryInput | SharedWordUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SharedWordUpdateManyWithWhereWithoutCategoryInput | SharedWordUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SharedWordScalarWhereInput | SharedWordScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWordsInput = {
    create?: XOR<UserCreateWithoutWordsInput, UserUncheckedCreateWithoutWordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWordsInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutWordsInput = {
    create?: XOR<CategoryCreateWithoutWordsInput, CategoryUncheckedCreateWithoutWordsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutWordsInput
    connect?: CategoryWhereUniqueInput
  }

  export type SharedWordCreateNestedManyWithoutWordInput = {
    create?: XOR<SharedWordCreateWithoutWordInput, SharedWordUncheckedCreateWithoutWordInput> | SharedWordCreateWithoutWordInput[] | SharedWordUncheckedCreateWithoutWordInput[]
    connectOrCreate?: SharedWordCreateOrConnectWithoutWordInput | SharedWordCreateOrConnectWithoutWordInput[]
    createMany?: SharedWordCreateManyWordInputEnvelope
    connect?: SharedWordWhereUniqueInput | SharedWordWhereUniqueInput[]
  }

  export type SharedWordUncheckedCreateNestedManyWithoutWordInput = {
    create?: XOR<SharedWordCreateWithoutWordInput, SharedWordUncheckedCreateWithoutWordInput> | SharedWordCreateWithoutWordInput[] | SharedWordUncheckedCreateWithoutWordInput[]
    connectOrCreate?: SharedWordCreateOrConnectWithoutWordInput | SharedWordCreateOrConnectWithoutWordInput[]
    createMany?: SharedWordCreateManyWordInputEnvelope
    connect?: SharedWordWhereUniqueInput | SharedWordWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutWordsNestedInput = {
    create?: XOR<UserCreateWithoutWordsInput, UserUncheckedCreateWithoutWordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWordsInput
    upsert?: UserUpsertWithoutWordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWordsInput, UserUpdateWithoutWordsInput>, UserUncheckedUpdateWithoutWordsInput>
  }

  export type CategoryUpdateOneRequiredWithoutWordsNestedInput = {
    create?: XOR<CategoryCreateWithoutWordsInput, CategoryUncheckedCreateWithoutWordsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutWordsInput
    upsert?: CategoryUpsertWithoutWordsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutWordsInput, CategoryUpdateWithoutWordsInput>, CategoryUncheckedUpdateWithoutWordsInput>
  }

  export type SharedWordUpdateManyWithoutWordNestedInput = {
    create?: XOR<SharedWordCreateWithoutWordInput, SharedWordUncheckedCreateWithoutWordInput> | SharedWordCreateWithoutWordInput[] | SharedWordUncheckedCreateWithoutWordInput[]
    connectOrCreate?: SharedWordCreateOrConnectWithoutWordInput | SharedWordCreateOrConnectWithoutWordInput[]
    upsert?: SharedWordUpsertWithWhereUniqueWithoutWordInput | SharedWordUpsertWithWhereUniqueWithoutWordInput[]
    createMany?: SharedWordCreateManyWordInputEnvelope
    set?: SharedWordWhereUniqueInput | SharedWordWhereUniqueInput[]
    disconnect?: SharedWordWhereUniqueInput | SharedWordWhereUniqueInput[]
    delete?: SharedWordWhereUniqueInput | SharedWordWhereUniqueInput[]
    connect?: SharedWordWhereUniqueInput | SharedWordWhereUniqueInput[]
    update?: SharedWordUpdateWithWhereUniqueWithoutWordInput | SharedWordUpdateWithWhereUniqueWithoutWordInput[]
    updateMany?: SharedWordUpdateManyWithWhereWithoutWordInput | SharedWordUpdateManyWithWhereWithoutWordInput[]
    deleteMany?: SharedWordScalarWhereInput | SharedWordScalarWhereInput[]
  }

  export type SharedWordUncheckedUpdateManyWithoutWordNestedInput = {
    create?: XOR<SharedWordCreateWithoutWordInput, SharedWordUncheckedCreateWithoutWordInput> | SharedWordCreateWithoutWordInput[] | SharedWordUncheckedCreateWithoutWordInput[]
    connectOrCreate?: SharedWordCreateOrConnectWithoutWordInput | SharedWordCreateOrConnectWithoutWordInput[]
    upsert?: SharedWordUpsertWithWhereUniqueWithoutWordInput | SharedWordUpsertWithWhereUniqueWithoutWordInput[]
    createMany?: SharedWordCreateManyWordInputEnvelope
    set?: SharedWordWhereUniqueInput | SharedWordWhereUniqueInput[]
    disconnect?: SharedWordWhereUniqueInput | SharedWordWhereUniqueInput[]
    delete?: SharedWordWhereUniqueInput | SharedWordWhereUniqueInput[]
    connect?: SharedWordWhereUniqueInput | SharedWordWhereUniqueInput[]
    update?: SharedWordUpdateWithWhereUniqueWithoutWordInput | SharedWordUpdateWithWhereUniqueWithoutWordInput[]
    updateMany?: SharedWordUpdateManyWithWhereWithoutWordInput | SharedWordUpdateManyWithWhereWithoutWordInput[]
    deleteMany?: SharedWordScalarWhereInput | SharedWordScalarWhereInput[]
  }

  export type UserAvatarCreateNestedManyWithoutAvatarInput = {
    create?: XOR<UserAvatarCreateWithoutAvatarInput, UserAvatarUncheckedCreateWithoutAvatarInput> | UserAvatarCreateWithoutAvatarInput[] | UserAvatarUncheckedCreateWithoutAvatarInput[]
    connectOrCreate?: UserAvatarCreateOrConnectWithoutAvatarInput | UserAvatarCreateOrConnectWithoutAvatarInput[]
    createMany?: UserAvatarCreateManyAvatarInputEnvelope
    connect?: UserAvatarWhereUniqueInput | UserAvatarWhereUniqueInput[]
  }

  export type UserAvatarUncheckedCreateNestedManyWithoutAvatarInput = {
    create?: XOR<UserAvatarCreateWithoutAvatarInput, UserAvatarUncheckedCreateWithoutAvatarInput> | UserAvatarCreateWithoutAvatarInput[] | UserAvatarUncheckedCreateWithoutAvatarInput[]
    connectOrCreate?: UserAvatarCreateOrConnectWithoutAvatarInput | UserAvatarCreateOrConnectWithoutAvatarInput[]
    createMany?: UserAvatarCreateManyAvatarInputEnvelope
    connect?: UserAvatarWhereUniqueInput | UserAvatarWhereUniqueInput[]
  }

  export type UserAvatarUpdateManyWithoutAvatarNestedInput = {
    create?: XOR<UserAvatarCreateWithoutAvatarInput, UserAvatarUncheckedCreateWithoutAvatarInput> | UserAvatarCreateWithoutAvatarInput[] | UserAvatarUncheckedCreateWithoutAvatarInput[]
    connectOrCreate?: UserAvatarCreateOrConnectWithoutAvatarInput | UserAvatarCreateOrConnectWithoutAvatarInput[]
    upsert?: UserAvatarUpsertWithWhereUniqueWithoutAvatarInput | UserAvatarUpsertWithWhereUniqueWithoutAvatarInput[]
    createMany?: UserAvatarCreateManyAvatarInputEnvelope
    set?: UserAvatarWhereUniqueInput | UserAvatarWhereUniqueInput[]
    disconnect?: UserAvatarWhereUniqueInput | UserAvatarWhereUniqueInput[]
    delete?: UserAvatarWhereUniqueInput | UserAvatarWhereUniqueInput[]
    connect?: UserAvatarWhereUniqueInput | UserAvatarWhereUniqueInput[]
    update?: UserAvatarUpdateWithWhereUniqueWithoutAvatarInput | UserAvatarUpdateWithWhereUniqueWithoutAvatarInput[]
    updateMany?: UserAvatarUpdateManyWithWhereWithoutAvatarInput | UserAvatarUpdateManyWithWhereWithoutAvatarInput[]
    deleteMany?: UserAvatarScalarWhereInput | UserAvatarScalarWhereInput[]
  }

  export type UserAvatarUncheckedUpdateManyWithoutAvatarNestedInput = {
    create?: XOR<UserAvatarCreateWithoutAvatarInput, UserAvatarUncheckedCreateWithoutAvatarInput> | UserAvatarCreateWithoutAvatarInput[] | UserAvatarUncheckedCreateWithoutAvatarInput[]
    connectOrCreate?: UserAvatarCreateOrConnectWithoutAvatarInput | UserAvatarCreateOrConnectWithoutAvatarInput[]
    upsert?: UserAvatarUpsertWithWhereUniqueWithoutAvatarInput | UserAvatarUpsertWithWhereUniqueWithoutAvatarInput[]
    createMany?: UserAvatarCreateManyAvatarInputEnvelope
    set?: UserAvatarWhereUniqueInput | UserAvatarWhereUniqueInput[]
    disconnect?: UserAvatarWhereUniqueInput | UserAvatarWhereUniqueInput[]
    delete?: UserAvatarWhereUniqueInput | UserAvatarWhereUniqueInput[]
    connect?: UserAvatarWhereUniqueInput | UserAvatarWhereUniqueInput[]
    update?: UserAvatarUpdateWithWhereUniqueWithoutAvatarInput | UserAvatarUpdateWithWhereUniqueWithoutAvatarInput[]
    updateMany?: UserAvatarUpdateManyWithWhereWithoutAvatarInput | UserAvatarUpdateManyWithWhereWithoutAvatarInput[]
    deleteMany?: UserAvatarScalarWhereInput | UserAvatarScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserAvatartInput = {
    create?: XOR<UserCreateWithoutUserAvatartInput, UserUncheckedCreateWithoutUserAvatartInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserAvatartInput
    connect?: UserWhereUniqueInput
  }

  export type AvatarCreateNestedOneWithoutUserAvatarInput = {
    create?: XOR<AvatarCreateWithoutUserAvatarInput, AvatarUncheckedCreateWithoutUserAvatarInput>
    connectOrCreate?: AvatarCreateOrConnectWithoutUserAvatarInput
    connect?: AvatarWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutUserAvatartNestedInput = {
    create?: XOR<UserCreateWithoutUserAvatartInput, UserUncheckedCreateWithoutUserAvatartInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserAvatartInput
    upsert?: UserUpsertWithoutUserAvatartInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserAvatartInput, UserUpdateWithoutUserAvatartInput>, UserUncheckedUpdateWithoutUserAvatartInput>
  }

  export type AvatarUpdateOneRequiredWithoutUserAvatarNestedInput = {
    create?: XOR<AvatarCreateWithoutUserAvatarInput, AvatarUncheckedCreateWithoutUserAvatarInput>
    connectOrCreate?: AvatarCreateOrConnectWithoutUserAvatarInput
    upsert?: AvatarUpsertWithoutUserAvatarInput
    connect?: AvatarWhereUniqueInput
    update?: XOR<XOR<AvatarUpdateToOneWithWhereWithoutUserAvatarInput, AvatarUpdateWithoutUserAvatarInput>, AvatarUncheckedUpdateWithoutUserAvatarInput>
  }

  export type UserCreateNestedOneWithoutSharedWordsInput = {
    create?: XOR<UserCreateWithoutSharedWordsInput, UserUncheckedCreateWithoutSharedWordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSharedWordsInput
    connect?: UserWhereUniqueInput
  }

  export type WordCreateNestedOneWithoutSharedWordsInput = {
    create?: XOR<WordCreateWithoutSharedWordsInput, WordUncheckedCreateWithoutSharedWordsInput>
    connectOrCreate?: WordCreateOrConnectWithoutSharedWordsInput
    connect?: WordWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutSharedWordsInput = {
    create?: XOR<CategoryCreateWithoutSharedWordsInput, CategoryUncheckedCreateWithoutSharedWordsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSharedWordsInput
    connect?: CategoryWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSharedWordsNestedInput = {
    create?: XOR<UserCreateWithoutSharedWordsInput, UserUncheckedCreateWithoutSharedWordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSharedWordsInput
    upsert?: UserUpsertWithoutSharedWordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSharedWordsInput, UserUpdateWithoutSharedWordsInput>, UserUncheckedUpdateWithoutSharedWordsInput>
  }

  export type WordUpdateOneRequiredWithoutSharedWordsNestedInput = {
    create?: XOR<WordCreateWithoutSharedWordsInput, WordUncheckedCreateWithoutSharedWordsInput>
    connectOrCreate?: WordCreateOrConnectWithoutSharedWordsInput
    upsert?: WordUpsertWithoutSharedWordsInput
    connect?: WordWhereUniqueInput
    update?: XOR<XOR<WordUpdateToOneWithWhereWithoutSharedWordsInput, WordUpdateWithoutSharedWordsInput>, WordUncheckedUpdateWithoutSharedWordsInput>
  }

  export type CategoryUpdateOneRequiredWithoutSharedWordsNestedInput = {
    create?: XOR<CategoryCreateWithoutSharedWordsInput, CategoryUncheckedCreateWithoutSharedWordsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSharedWordsInput
    upsert?: CategoryUpsertWithoutSharedWordsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutSharedWordsInput, CategoryUpdateWithoutSharedWordsInput>, CategoryUncheckedUpdateWithoutSharedWordsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type WordCreateWithoutUserInput = {
    id?: string
    value: string
    desc: string
    spelling: string
    date: string
    color?: string | null
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutWordsInput
    sharedWords?: SharedWordCreateNestedManyWithoutWordInput
  }

  export type WordUncheckedCreateWithoutUserInput = {
    id?: string
    value: string
    desc: string
    spelling: string
    date: string
    color?: string | null
    createdAt?: Date | string
    categoryId: string
    sharedWords?: SharedWordUncheckedCreateNestedManyWithoutWordInput
  }

  export type WordCreateOrConnectWithoutUserInput = {
    where: WordWhereUniqueInput
    create: XOR<WordCreateWithoutUserInput, WordUncheckedCreateWithoutUserInput>
  }

  export type WordCreateManyUserInputEnvelope = {
    data: WordCreateManyUserInput | WordCreateManyUserInput[]
  }

  export type CategoryCreateWithoutUserInput = {
    id?: string
    name: string
    color?: string | null
    words?: WordCreateNestedManyWithoutCategoryInput
    sharedWords?: SharedWordCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    color?: string | null
    words?: WordUncheckedCreateNestedManyWithoutCategoryInput
    sharedWords?: SharedWordUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutUserInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput>
  }

  export type CategoryCreateManyUserInputEnvelope = {
    data: CategoryCreateManyUserInput | CategoryCreateManyUserInput[]
  }

  export type UserAvatarCreateWithoutUserInput = {
    id?: string
    current: boolean
    avatar: AvatarCreateNestedOneWithoutUserAvatarInput
  }

  export type UserAvatarUncheckedCreateWithoutUserInput = {
    id?: string
    current: boolean
    avatarId: string
  }

  export type UserAvatarCreateOrConnectWithoutUserInput = {
    where: UserAvatarWhereUniqueInput
    create: XOR<UserAvatarCreateWithoutUserInput, UserAvatarUncheckedCreateWithoutUserInput>
  }

  export type UserAvatarCreateManyUserInputEnvelope = {
    data: UserAvatarCreateManyUserInput | UserAvatarCreateManyUserInput[]
  }

  export type SharedWordCreateWithoutUserInput = {
    id?: string
    date: string
    word: WordCreateNestedOneWithoutSharedWordsInput
    category: CategoryCreateNestedOneWithoutSharedWordsInput
  }

  export type SharedWordUncheckedCreateWithoutUserInput = {
    id?: string
    date: string
    wordId: string
    categoryId: string
  }

  export type SharedWordCreateOrConnectWithoutUserInput = {
    where: SharedWordWhereUniqueInput
    create: XOR<SharedWordCreateWithoutUserInput, SharedWordUncheckedCreateWithoutUserInput>
  }

  export type SharedWordCreateManyUserInputEnvelope = {
    data: SharedWordCreateManyUserInput | SharedWordCreateManyUserInput[]
  }

  export type WordUpsertWithWhereUniqueWithoutUserInput = {
    where: WordWhereUniqueInput
    update: XOR<WordUpdateWithoutUserInput, WordUncheckedUpdateWithoutUserInput>
    create: XOR<WordCreateWithoutUserInput, WordUncheckedCreateWithoutUserInput>
  }

  export type WordUpdateWithWhereUniqueWithoutUserInput = {
    where: WordWhereUniqueInput
    data: XOR<WordUpdateWithoutUserInput, WordUncheckedUpdateWithoutUserInput>
  }

  export type WordUpdateManyWithWhereWithoutUserInput = {
    where: WordScalarWhereInput
    data: XOR<WordUpdateManyMutationInput, WordUncheckedUpdateManyWithoutUserInput>
  }

  export type WordScalarWhereInput = {
    AND?: WordScalarWhereInput | WordScalarWhereInput[]
    OR?: WordScalarWhereInput[]
    NOT?: WordScalarWhereInput | WordScalarWhereInput[]
    id?: StringFilter<"Word"> | string
    value?: StringFilter<"Word"> | string
    desc?: StringFilter<"Word"> | string
    spelling?: StringFilter<"Word"> | string
    date?: StringFilter<"Word"> | string
    color?: StringNullableFilter<"Word"> | string | null
    createdAt?: DateTimeFilter<"Word"> | Date | string
    createdBy?: StringFilter<"Word"> | string
    categoryId?: StringFilter<"Word"> | string
  }

  export type CategoryUpsertWithWhereUniqueWithoutUserInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutUserInput, CategoryUncheckedUpdateWithoutUserInput>
    create: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutUserInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutUserInput, CategoryUncheckedUpdateWithoutUserInput>
  }

  export type CategoryUpdateManyWithWhereWithoutUserInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutUserInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    color?: StringNullableFilter<"Category"> | string | null
    createdBy?: StringFilter<"Category"> | string
  }

  export type UserAvatarUpsertWithWhereUniqueWithoutUserInput = {
    where: UserAvatarWhereUniqueInput
    update: XOR<UserAvatarUpdateWithoutUserInput, UserAvatarUncheckedUpdateWithoutUserInput>
    create: XOR<UserAvatarCreateWithoutUserInput, UserAvatarUncheckedCreateWithoutUserInput>
  }

  export type UserAvatarUpdateWithWhereUniqueWithoutUserInput = {
    where: UserAvatarWhereUniqueInput
    data: XOR<UserAvatarUpdateWithoutUserInput, UserAvatarUncheckedUpdateWithoutUserInput>
  }

  export type UserAvatarUpdateManyWithWhereWithoutUserInput = {
    where: UserAvatarScalarWhereInput
    data: XOR<UserAvatarUpdateManyMutationInput, UserAvatarUncheckedUpdateManyWithoutUserInput>
  }

  export type UserAvatarScalarWhereInput = {
    AND?: UserAvatarScalarWhereInput | UserAvatarScalarWhereInput[]
    OR?: UserAvatarScalarWhereInput[]
    NOT?: UserAvatarScalarWhereInput | UserAvatarScalarWhereInput[]
    id?: StringFilter<"UserAvatar"> | string
    current?: BoolFilter<"UserAvatar"> | boolean
    userId?: StringFilter<"UserAvatar"> | string
    avatarId?: StringFilter<"UserAvatar"> | string
  }

  export type SharedWordUpsertWithWhereUniqueWithoutUserInput = {
    where: SharedWordWhereUniqueInput
    update: XOR<SharedWordUpdateWithoutUserInput, SharedWordUncheckedUpdateWithoutUserInput>
    create: XOR<SharedWordCreateWithoutUserInput, SharedWordUncheckedCreateWithoutUserInput>
  }

  export type SharedWordUpdateWithWhereUniqueWithoutUserInput = {
    where: SharedWordWhereUniqueInput
    data: XOR<SharedWordUpdateWithoutUserInput, SharedWordUncheckedUpdateWithoutUserInput>
  }

  export type SharedWordUpdateManyWithWhereWithoutUserInput = {
    where: SharedWordScalarWhereInput
    data: XOR<SharedWordUpdateManyMutationInput, SharedWordUncheckedUpdateManyWithoutUserInput>
  }

  export type SharedWordScalarWhereInput = {
    AND?: SharedWordScalarWhereInput | SharedWordScalarWhereInput[]
    OR?: SharedWordScalarWhereInput[]
    NOT?: SharedWordScalarWhereInput | SharedWordScalarWhereInput[]
    id?: StringFilter<"SharedWord"> | string
    date?: StringFilter<"SharedWord"> | string
    userId?: StringFilter<"SharedWord"> | string
    wordId?: StringFilter<"SharedWord"> | string
    categoryId?: StringFilter<"SharedWord"> | string
  }

  export type UserCreateWithoutCategoriesInput = {
    id?: string
    username: string
    firstname: string
    lastname: string
    password: string
    avatarId?: string | null
    createdAt?: Date | string
    words?: WordCreateNestedManyWithoutUserInput
    userAvatart?: UserAvatarCreateNestedManyWithoutUserInput
    sharedWords?: SharedWordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCategoriesInput = {
    id?: string
    username: string
    firstname: string
    lastname: string
    password: string
    avatarId?: string | null
    createdAt?: Date | string
    words?: WordUncheckedCreateNestedManyWithoutUserInput
    userAvatart?: UserAvatarUncheckedCreateNestedManyWithoutUserInput
    sharedWords?: SharedWordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCategoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
  }

  export type WordCreateWithoutCategoryInput = {
    id?: string
    value: string
    desc: string
    spelling: string
    date: string
    color?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWordsInput
    sharedWords?: SharedWordCreateNestedManyWithoutWordInput
  }

  export type WordUncheckedCreateWithoutCategoryInput = {
    id?: string
    value: string
    desc: string
    spelling: string
    date: string
    color?: string | null
    createdAt?: Date | string
    createdBy: string
    sharedWords?: SharedWordUncheckedCreateNestedManyWithoutWordInput
  }

  export type WordCreateOrConnectWithoutCategoryInput = {
    where: WordWhereUniqueInput
    create: XOR<WordCreateWithoutCategoryInput, WordUncheckedCreateWithoutCategoryInput>
  }

  export type WordCreateManyCategoryInputEnvelope = {
    data: WordCreateManyCategoryInput | WordCreateManyCategoryInput[]
  }

  export type SharedWordCreateWithoutCategoryInput = {
    id?: string
    date: string
    user: UserCreateNestedOneWithoutSharedWordsInput
    word: WordCreateNestedOneWithoutSharedWordsInput
  }

  export type SharedWordUncheckedCreateWithoutCategoryInput = {
    id?: string
    date: string
    userId: string
    wordId: string
  }

  export type SharedWordCreateOrConnectWithoutCategoryInput = {
    where: SharedWordWhereUniqueInput
    create: XOR<SharedWordCreateWithoutCategoryInput, SharedWordUncheckedCreateWithoutCategoryInput>
  }

  export type SharedWordCreateManyCategoryInputEnvelope = {
    data: SharedWordCreateManyCategoryInput | SharedWordCreateManyCategoryInput[]
  }

  export type UserUpsertWithoutCategoriesInput = {
    update: XOR<UserUpdateWithoutCategoriesInput, UserUncheckedUpdateWithoutCategoriesInput>
    create: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCategoriesInput, UserUncheckedUpdateWithoutCategoriesInput>
  }

  export type UserUpdateWithoutCategoriesInput = {
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    words?: WordUpdateManyWithoutUserNestedInput
    userAvatart?: UserAvatarUpdateManyWithoutUserNestedInput
    sharedWords?: SharedWordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCategoriesInput = {
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    words?: WordUncheckedUpdateManyWithoutUserNestedInput
    userAvatart?: UserAvatarUncheckedUpdateManyWithoutUserNestedInput
    sharedWords?: SharedWordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WordUpsertWithWhereUniqueWithoutCategoryInput = {
    where: WordWhereUniqueInput
    update: XOR<WordUpdateWithoutCategoryInput, WordUncheckedUpdateWithoutCategoryInput>
    create: XOR<WordCreateWithoutCategoryInput, WordUncheckedCreateWithoutCategoryInput>
  }

  export type WordUpdateWithWhereUniqueWithoutCategoryInput = {
    where: WordWhereUniqueInput
    data: XOR<WordUpdateWithoutCategoryInput, WordUncheckedUpdateWithoutCategoryInput>
  }

  export type WordUpdateManyWithWhereWithoutCategoryInput = {
    where: WordScalarWhereInput
    data: XOR<WordUpdateManyMutationInput, WordUncheckedUpdateManyWithoutCategoryInput>
  }

  export type SharedWordUpsertWithWhereUniqueWithoutCategoryInput = {
    where: SharedWordWhereUniqueInput
    update: XOR<SharedWordUpdateWithoutCategoryInput, SharedWordUncheckedUpdateWithoutCategoryInput>
    create: XOR<SharedWordCreateWithoutCategoryInput, SharedWordUncheckedCreateWithoutCategoryInput>
  }

  export type SharedWordUpdateWithWhereUniqueWithoutCategoryInput = {
    where: SharedWordWhereUniqueInput
    data: XOR<SharedWordUpdateWithoutCategoryInput, SharedWordUncheckedUpdateWithoutCategoryInput>
  }

  export type SharedWordUpdateManyWithWhereWithoutCategoryInput = {
    where: SharedWordScalarWhereInput
    data: XOR<SharedWordUpdateManyMutationInput, SharedWordUncheckedUpdateManyWithoutCategoryInput>
  }

  export type UserCreateWithoutWordsInput = {
    id?: string
    username: string
    firstname: string
    lastname: string
    password: string
    avatarId?: string | null
    createdAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutUserInput
    userAvatart?: UserAvatarCreateNestedManyWithoutUserInput
    sharedWords?: SharedWordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWordsInput = {
    id?: string
    username: string
    firstname: string
    lastname: string
    password: string
    avatarId?: string | null
    createdAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    userAvatart?: UserAvatarUncheckedCreateNestedManyWithoutUserInput
    sharedWords?: SharedWordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWordsInput, UserUncheckedCreateWithoutWordsInput>
  }

  export type CategoryCreateWithoutWordsInput = {
    id?: string
    name: string
    color?: string | null
    user: UserCreateNestedOneWithoutCategoriesInput
    sharedWords?: SharedWordCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutWordsInput = {
    id?: string
    name: string
    color?: string | null
    createdBy: string
    sharedWords?: SharedWordUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutWordsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutWordsInput, CategoryUncheckedCreateWithoutWordsInput>
  }

  export type SharedWordCreateWithoutWordInput = {
    id?: string
    date: string
    user: UserCreateNestedOneWithoutSharedWordsInput
    category: CategoryCreateNestedOneWithoutSharedWordsInput
  }

  export type SharedWordUncheckedCreateWithoutWordInput = {
    id?: string
    date: string
    userId: string
    categoryId: string
  }

  export type SharedWordCreateOrConnectWithoutWordInput = {
    where: SharedWordWhereUniqueInput
    create: XOR<SharedWordCreateWithoutWordInput, SharedWordUncheckedCreateWithoutWordInput>
  }

  export type SharedWordCreateManyWordInputEnvelope = {
    data: SharedWordCreateManyWordInput | SharedWordCreateManyWordInput[]
  }

  export type UserUpsertWithoutWordsInput = {
    update: XOR<UserUpdateWithoutWordsInput, UserUncheckedUpdateWithoutWordsInput>
    create: XOR<UserCreateWithoutWordsInput, UserUncheckedCreateWithoutWordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWordsInput, UserUncheckedUpdateWithoutWordsInput>
  }

  export type UserUpdateWithoutWordsInput = {
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutUserNestedInput
    userAvatart?: UserAvatarUpdateManyWithoutUserNestedInput
    sharedWords?: SharedWordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWordsInput = {
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    userAvatart?: UserAvatarUncheckedUpdateManyWithoutUserNestedInput
    sharedWords?: SharedWordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryUpsertWithoutWordsInput = {
    update: XOR<CategoryUpdateWithoutWordsInput, CategoryUncheckedUpdateWithoutWordsInput>
    create: XOR<CategoryCreateWithoutWordsInput, CategoryUncheckedCreateWithoutWordsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutWordsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutWordsInput, CategoryUncheckedUpdateWithoutWordsInput>
  }

  export type CategoryUpdateWithoutWordsInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCategoriesNestedInput
    sharedWords?: SharedWordUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutWordsInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    sharedWords?: SharedWordUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type SharedWordUpsertWithWhereUniqueWithoutWordInput = {
    where: SharedWordWhereUniqueInput
    update: XOR<SharedWordUpdateWithoutWordInput, SharedWordUncheckedUpdateWithoutWordInput>
    create: XOR<SharedWordCreateWithoutWordInput, SharedWordUncheckedCreateWithoutWordInput>
  }

  export type SharedWordUpdateWithWhereUniqueWithoutWordInput = {
    where: SharedWordWhereUniqueInput
    data: XOR<SharedWordUpdateWithoutWordInput, SharedWordUncheckedUpdateWithoutWordInput>
  }

  export type SharedWordUpdateManyWithWhereWithoutWordInput = {
    where: SharedWordScalarWhereInput
    data: XOR<SharedWordUpdateManyMutationInput, SharedWordUncheckedUpdateManyWithoutWordInput>
  }

  export type UserAvatarCreateWithoutAvatarInput = {
    id?: string
    current: boolean
    user: UserCreateNestedOneWithoutUserAvatartInput
  }

  export type UserAvatarUncheckedCreateWithoutAvatarInput = {
    id?: string
    current: boolean
    userId: string
  }

  export type UserAvatarCreateOrConnectWithoutAvatarInput = {
    where: UserAvatarWhereUniqueInput
    create: XOR<UserAvatarCreateWithoutAvatarInput, UserAvatarUncheckedCreateWithoutAvatarInput>
  }

  export type UserAvatarCreateManyAvatarInputEnvelope = {
    data: UserAvatarCreateManyAvatarInput | UserAvatarCreateManyAvatarInput[]
  }

  export type UserAvatarUpsertWithWhereUniqueWithoutAvatarInput = {
    where: UserAvatarWhereUniqueInput
    update: XOR<UserAvatarUpdateWithoutAvatarInput, UserAvatarUncheckedUpdateWithoutAvatarInput>
    create: XOR<UserAvatarCreateWithoutAvatarInput, UserAvatarUncheckedCreateWithoutAvatarInput>
  }

  export type UserAvatarUpdateWithWhereUniqueWithoutAvatarInput = {
    where: UserAvatarWhereUniqueInput
    data: XOR<UserAvatarUpdateWithoutAvatarInput, UserAvatarUncheckedUpdateWithoutAvatarInput>
  }

  export type UserAvatarUpdateManyWithWhereWithoutAvatarInput = {
    where: UserAvatarScalarWhereInput
    data: XOR<UserAvatarUpdateManyMutationInput, UserAvatarUncheckedUpdateManyWithoutAvatarInput>
  }

  export type UserCreateWithoutUserAvatartInput = {
    id?: string
    username: string
    firstname: string
    lastname: string
    password: string
    avatarId?: string | null
    createdAt?: Date | string
    words?: WordCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    sharedWords?: SharedWordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserAvatartInput = {
    id?: string
    username: string
    firstname: string
    lastname: string
    password: string
    avatarId?: string | null
    createdAt?: Date | string
    words?: WordUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    sharedWords?: SharedWordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserAvatartInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserAvatartInput, UserUncheckedCreateWithoutUserAvatartInput>
  }

  export type AvatarCreateWithoutUserAvatarInput = {
    id?: string
    path: string
  }

  export type AvatarUncheckedCreateWithoutUserAvatarInput = {
    id?: string
    path: string
  }

  export type AvatarCreateOrConnectWithoutUserAvatarInput = {
    where: AvatarWhereUniqueInput
    create: XOR<AvatarCreateWithoutUserAvatarInput, AvatarUncheckedCreateWithoutUserAvatarInput>
  }

  export type UserUpsertWithoutUserAvatartInput = {
    update: XOR<UserUpdateWithoutUserAvatartInput, UserUncheckedUpdateWithoutUserAvatartInput>
    create: XOR<UserCreateWithoutUserAvatartInput, UserUncheckedCreateWithoutUserAvatartInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserAvatartInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserAvatartInput, UserUncheckedUpdateWithoutUserAvatartInput>
  }

  export type UserUpdateWithoutUserAvatartInput = {
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    words?: WordUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    sharedWords?: SharedWordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserAvatartInput = {
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    words?: WordUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    sharedWords?: SharedWordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AvatarUpsertWithoutUserAvatarInput = {
    update: XOR<AvatarUpdateWithoutUserAvatarInput, AvatarUncheckedUpdateWithoutUserAvatarInput>
    create: XOR<AvatarCreateWithoutUserAvatarInput, AvatarUncheckedCreateWithoutUserAvatarInput>
    where?: AvatarWhereInput
  }

  export type AvatarUpdateToOneWithWhereWithoutUserAvatarInput = {
    where?: AvatarWhereInput
    data: XOR<AvatarUpdateWithoutUserAvatarInput, AvatarUncheckedUpdateWithoutUserAvatarInput>
  }

  export type AvatarUpdateWithoutUserAvatarInput = {
    path?: StringFieldUpdateOperationsInput | string
  }

  export type AvatarUncheckedUpdateWithoutUserAvatarInput = {
    path?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutSharedWordsInput = {
    id?: string
    username: string
    firstname: string
    lastname: string
    password: string
    avatarId?: string | null
    createdAt?: Date | string
    words?: WordCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    userAvatart?: UserAvatarCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSharedWordsInput = {
    id?: string
    username: string
    firstname: string
    lastname: string
    password: string
    avatarId?: string | null
    createdAt?: Date | string
    words?: WordUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    userAvatart?: UserAvatarUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSharedWordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSharedWordsInput, UserUncheckedCreateWithoutSharedWordsInput>
  }

  export type WordCreateWithoutSharedWordsInput = {
    id?: string
    value: string
    desc: string
    spelling: string
    date: string
    color?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWordsInput
    category: CategoryCreateNestedOneWithoutWordsInput
  }

  export type WordUncheckedCreateWithoutSharedWordsInput = {
    id?: string
    value: string
    desc: string
    spelling: string
    date: string
    color?: string | null
    createdAt?: Date | string
    createdBy: string
    categoryId: string
  }

  export type WordCreateOrConnectWithoutSharedWordsInput = {
    where: WordWhereUniqueInput
    create: XOR<WordCreateWithoutSharedWordsInput, WordUncheckedCreateWithoutSharedWordsInput>
  }

  export type CategoryCreateWithoutSharedWordsInput = {
    id?: string
    name: string
    color?: string | null
    user: UserCreateNestedOneWithoutCategoriesInput
    words?: WordCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutSharedWordsInput = {
    id?: string
    name: string
    color?: string | null
    createdBy: string
    words?: WordUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutSharedWordsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutSharedWordsInput, CategoryUncheckedCreateWithoutSharedWordsInput>
  }

  export type UserUpsertWithoutSharedWordsInput = {
    update: XOR<UserUpdateWithoutSharedWordsInput, UserUncheckedUpdateWithoutSharedWordsInput>
    create: XOR<UserCreateWithoutSharedWordsInput, UserUncheckedCreateWithoutSharedWordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSharedWordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSharedWordsInput, UserUncheckedUpdateWithoutSharedWordsInput>
  }

  export type UserUpdateWithoutSharedWordsInput = {
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    words?: WordUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    userAvatart?: UserAvatarUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSharedWordsInput = {
    username?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    words?: WordUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    userAvatart?: UserAvatarUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WordUpsertWithoutSharedWordsInput = {
    update: XOR<WordUpdateWithoutSharedWordsInput, WordUncheckedUpdateWithoutSharedWordsInput>
    create: XOR<WordCreateWithoutSharedWordsInput, WordUncheckedCreateWithoutSharedWordsInput>
    where?: WordWhereInput
  }

  export type WordUpdateToOneWithWhereWithoutSharedWordsInput = {
    where?: WordWhereInput
    data: XOR<WordUpdateWithoutSharedWordsInput, WordUncheckedUpdateWithoutSharedWordsInput>
  }

  export type WordUpdateWithoutSharedWordsInput = {
    value?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    spelling?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWordsNestedInput
    category?: CategoryUpdateOneRequiredWithoutWordsNestedInput
  }

  export type WordUncheckedUpdateWithoutSharedWordsInput = {
    value?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    spelling?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUpsertWithoutSharedWordsInput = {
    update: XOR<CategoryUpdateWithoutSharedWordsInput, CategoryUncheckedUpdateWithoutSharedWordsInput>
    create: XOR<CategoryCreateWithoutSharedWordsInput, CategoryUncheckedCreateWithoutSharedWordsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutSharedWordsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutSharedWordsInput, CategoryUncheckedUpdateWithoutSharedWordsInput>
  }

  export type CategoryUpdateWithoutSharedWordsInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCategoriesNestedInput
    words?: WordUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutSharedWordsInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    words?: WordUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type WordCreateManyUserInput = {
    id?: string
    value: string
    desc: string
    spelling: string
    date: string
    color?: string | null
    createdAt?: Date | string
    categoryId: string
  }

  export type CategoryCreateManyUserInput = {
    id?: string
    name: string
    color?: string | null
  }

  export type UserAvatarCreateManyUserInput = {
    id?: string
    current: boolean
    avatarId: string
  }

  export type SharedWordCreateManyUserInput = {
    id?: string
    date: string
    wordId: string
    categoryId: string
  }

  export type WordUpdateWithoutUserInput = {
    value?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    spelling?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutWordsNestedInput
    sharedWords?: SharedWordUpdateManyWithoutWordNestedInput
  }

  export type WordUncheckedUpdateWithoutUserInput = {
    value?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    spelling?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    sharedWords?: SharedWordUncheckedUpdateManyWithoutWordNestedInput
  }

  export type WordUncheckedUpdateManyWithoutUserInput = {
    value?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    spelling?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    words?: WordUpdateManyWithoutCategoryNestedInput
    sharedWords?: SharedWordUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    words?: WordUncheckedUpdateManyWithoutCategoryNestedInput
    sharedWords?: SharedWordUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserAvatarUpdateWithoutUserInput = {
    current?: BoolFieldUpdateOperationsInput | boolean
    avatar?: AvatarUpdateOneRequiredWithoutUserAvatarNestedInput
  }

  export type UserAvatarUncheckedUpdateWithoutUserInput = {
    current?: BoolFieldUpdateOperationsInput | boolean
    avatarId?: StringFieldUpdateOperationsInput | string
  }

  export type UserAvatarUncheckedUpdateManyWithoutUserInput = {
    current?: BoolFieldUpdateOperationsInput | boolean
    avatarId?: StringFieldUpdateOperationsInput | string
  }

  export type SharedWordUpdateWithoutUserInput = {
    date?: StringFieldUpdateOperationsInput | string
    word?: WordUpdateOneRequiredWithoutSharedWordsNestedInput
    category?: CategoryUpdateOneRequiredWithoutSharedWordsNestedInput
  }

  export type SharedWordUncheckedUpdateWithoutUserInput = {
    date?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type SharedWordUncheckedUpdateManyWithoutUserInput = {
    date?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type WordCreateManyCategoryInput = {
    id?: string
    value: string
    desc: string
    spelling: string
    date: string
    color?: string | null
    createdAt?: Date | string
    createdBy: string
  }

  export type SharedWordCreateManyCategoryInput = {
    id?: string
    date: string
    userId: string
    wordId: string
  }

  export type WordUpdateWithoutCategoryInput = {
    value?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    spelling?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWordsNestedInput
    sharedWords?: SharedWordUpdateManyWithoutWordNestedInput
  }

  export type WordUncheckedUpdateWithoutCategoryInput = {
    value?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    spelling?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    sharedWords?: SharedWordUncheckedUpdateManyWithoutWordNestedInput
  }

  export type WordUncheckedUpdateManyWithoutCategoryInput = {
    value?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    spelling?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type SharedWordUpdateWithoutCategoryInput = {
    date?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutSharedWordsNestedInput
    word?: WordUpdateOneRequiredWithoutSharedWordsNestedInput
  }

  export type SharedWordUncheckedUpdateWithoutCategoryInput = {
    date?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
  }

  export type SharedWordUncheckedUpdateManyWithoutCategoryInput = {
    date?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
  }

  export type SharedWordCreateManyWordInput = {
    id?: string
    date: string
    userId: string
    categoryId: string
  }

  export type SharedWordUpdateWithoutWordInput = {
    date?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutSharedWordsNestedInput
    category?: CategoryUpdateOneRequiredWithoutSharedWordsNestedInput
  }

  export type SharedWordUncheckedUpdateWithoutWordInput = {
    date?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type SharedWordUncheckedUpdateManyWithoutWordInput = {
    date?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type UserAvatarCreateManyAvatarInput = {
    id?: string
    current: boolean
    userId: string
  }

  export type UserAvatarUpdateWithoutAvatarInput = {
    current?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutUserAvatartNestedInput
  }

  export type UserAvatarUncheckedUpdateWithoutAvatarInput = {
    current?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserAvatarUncheckedUpdateManyWithoutAvatarInput = {
    current?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WordCountOutputTypeDefaultArgs instead
     */
    export type WordCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WordCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AvatarCountOutputTypeDefaultArgs instead
     */
    export type AvatarCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AvatarCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WordDefaultArgs instead
     */
    export type WordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WordDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AvatarDefaultArgs instead
     */
    export type AvatarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AvatarDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserAvatarDefaultArgs instead
     */
    export type UserAvatarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserAvatarDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SharedWordDefaultArgs instead
     */
    export type SharedWordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SharedWordDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}