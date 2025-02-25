const test = require('tape')
const crocks = require('./index')

// combinators
const applyTo = require('./combinators/applyTo')
const composeB = require('./combinators/composeB')
const constant = require('./combinators/constant')
const flip = require('./combinators/flip')
const identity = require('./combinators/identity')
const substitution = require('./combinators/substitution')

// crocks
const Arrow = require('./Arrow')
const Async = require('./Async')
const Const = require('./Const')
const Either = require('./Either')
const Equiv = require('./Equiv')
const Identity = require('./Identity')
const IO = require('./IO')
const List = require('./List')
const Maybe = require('./Maybe')
const Pair = require('./Pair')
const Pred = require('./Pred')
const Result = require('./Result')
const Reader = require('./Reader')
const ReaderT = require('./Reader/ReaderT')
const Star = require('./Star')
const State = require('./State')
const Tuple = require('./Tuple')
const Unit = require('./Unit')
const Writer = require('./Writer')

// helpers
const assign = require('./helpers/assign')
const assoc = require('./helpers/assoc')
const binary = require('./helpers/binary')
const branch = require('./Pair/branch')
const compose = require('./helpers/compose')
const composeK = require('./helpers/composeK')
const composeP = require('./helpers/composeP')
const composeS = require('./helpers/composeS')
const curry = require('./helpers/curry')
const defaultProps  = require('./helpers/defaultProps')
const defaultTo  = require('./helpers/defaultTo')
const dissoc = require('./helpers/dissoc')
const fanout = require('./Pair/fanout')
const fromPairs = require('./helpers/fromPairs')
const getPathOr = require('./helpers/getPathOr')
const getPath = require('./Maybe/getPath')
const getProp = require('./Maybe/getProp')
const getPropOr = require('./helpers/getPropOr')
const liftA2 = require('./helpers/liftA2')
const liftA3 = require('./helpers/liftA3')
const liftN = require('./helpers/liftN')
const mapProps = require('./helpers/mapProps')
const mapReduce = require('./helpers/mapReduce')
const mconcat = require('./helpers/mconcat')
const mconcatMap = require('./helpers/mconcatMap')
const mreduce = require('./helpers/mreduce')
const mreduceMap = require('./helpers/mreduceMap')
const nAry = require('./helpers/nAry')
const objOf = require('./helpers/objOf')
const omit = require('./helpers/omit')
const once = require('./helpers/once')
const partial = require('./helpers/partial')
const pick = require('./helpers/pick')
const pipe = require('./helpers/pipe')
const pipeK = require('./helpers/pipeK')
const pipeP = require('./helpers/pipeP')
const pipeS = require('./helpers/pipeS')
const prop = require('./Maybe/prop')
const propOr = require('./helpers/propOr')
const propPath = require('./Maybe/propPath')
const propPathOr = require('./helpers/propPathOr')
const safe = require('./Maybe/safe')
const safeLift = require('./Maybe/safeLift')
const setPath = require('./helpers/setPath')
const setProp = require('./helpers/setProp')
const tap = require('./helpers/tap')
const toPairs = require('./Pair/toPairs')
const tryCatch = require('./Result/tryCatch')
const unary = require('./helpers/unary')
const unit = require('./helpers/unit')
const unsetPath = require('./helpers/unsetPath')
const unsetProp = require('./helpers/unsetProp')

// logic
const and = require('./logic/and')
const ifElse = require('./logic/ifElse')
const implies = require('./logic/implies')
const not = require('./logic/not')
const or = require('./logic/or')
const unless = require('./logic/unless')
const when = require('./logic/when')

// monoids
const All = require('./All')
const Any = require('./Any')
const Assign = require('./Assign')
const Endo = require('./Endo')
const First = require('./First')
const Last = require('./Last')
const Max = require('./Max')
const Min = require('./Min')
const Prod = require('./Prod')
const Sum = require('./Sum')

// pointfree
const alt = require('./pointfree/alt')
const ap = require('./pointfree/ap')
const bimap = require('./pointfree/bimap')
const both = require('./pointfree/both')
const chain = require('./pointfree/chain')
const coalesce = require('./pointfree/coalesce')
const compareWith = require('./pointfree/compareWith')
const concat = require('./pointfree/concat')
const cons = require('./pointfree/cons')
const contramap = require('./pointfree/contramap')
const either = require('./pointfree/either')
const empty = require('./pointfree/empty')
const equals = require('./pointfree/equals')
const evalWith = require('./State/evalWith')
const execWith = require('./State/execWith')
const extend = require('./pointfree/extend')
const filter = require('./pointfree/filter')
const first = require('./pointfree/first')
const fold = require('./pointfree/fold')
const foldMap = require('./pointfree/foldMap')
const fst = require('./Pair/fst')
const head = require('./pointfree/head')
const init = require('./pointfree/init')
const last = require('./pointfree/last')
const log = require('./Writer/log')
const nmap = require('./Tuple/nmap')
const map = require('./pointfree/map')
const merge = require('./pointfree/merge')
const option = require('./pointfree/option')
const project = require('./Tuple/project')
const promap = require('./pointfree/promap')
const race = require('./Async/race')
const read = require('./Writer/read')
const reduce = require('./pointfree/reduce')
const reduceRight = require('./pointfree/reduceRight')
const reject = require('./pointfree/reject')
const run = require('./pointfree/run')
const runWith = require('./pointfree/runWith')
const second = require('./pointfree/second')
const sequence = require('./pointfree/sequence')
const snd = require('./Pair/snd')
const swap = require('./pointfree/swap')
const tail = require('./pointfree/tail')
const traverse = require('./pointfree/traverse')
const valueOf = require('./pointfree/valueOf')

// predicates
const hasProp = require('./predicates/hasProp')
const hasProps = require('./predicates/hasProps')
const hasPropPath = require('./predicates/hasPropPath')
const isAlt = require('./predicates/isAlt')
const isAlternative = require('./predicates/isAlternative')
const isApplicative = require('./predicates/isApplicative')
const isApply = require('./predicates/isApply')
const isArray = require('./predicates/isArray')
const isBifunctor = require('./predicates/isBifunctor')
const isBoolean = require('./predicates/isBoolean')
const isCategory = require('./predicates/isCategory')
const isChain = require('./predicates/isChain')
const isContravariant = require('./predicates/isContravariant')
const isDate = require('./predicates/isDate')
const isDefined = require('./predicates/isDefined')
const isEmpty = require('./predicates/isEmpty')
const isExtend = require('./predicates/isExtend')
const isFalse = require('./predicates/isFalse')
const isFalsy = require('./predicates/isFalsy')
const isFoldable = require('./predicates/isFoldable')
const isFunction = require('./predicates/isFunction')
const isFunctor = require('./predicates/isFunctor')
const isInteger = require('./predicates/isInteger')
const isIterable = require('./predicates/isIterable')
const isMonad = require('./predicates/isMonad')
const isMonoid = require('./predicates/isMonoid')
const isNil = require('./predicates/isNil')
const isNumber = require('./predicates/isNumber')
const isObject = require('./predicates/isObject')
const isPlus = require('./predicates/isPlus')
const isProfunctor = require('./predicates/isProfunctor')
const isPromise = require('./predicates/isPromise')
const isSame = require('./predicates/isSame')
const isSameType = require('./predicates/isSameType')
const isSemigroup = require('./predicates/isSemigroup')
const isSemigroupoid = require('./predicates/isSemigroupoid')
const isSetoid = require('./predicates/isSetoid')
const isString = require('./predicates/isString')
const isSymbol = require('./predicates/isSymbol')
const isTraversable = require('./predicates/isTraversable')
const isTrue = require('./predicates/isTrue')
const isTruthy = require('./predicates/isTruthy')
const pathEq = require('./predicates/pathEq')
const pathSatisfies = require('./predicates/pathSatisfies')
const propEq = require('./predicates/propEq')
const propPathEq = require('./predicates/propPathEq')
const propSatisfies = require('./predicates/propSatisfies')
const propPathSatisfies = require('./predicates/propPathSatisfies')

// transforms
const arrayToList = require('./List/arrayToList')
const asyncToPromise = require('./Async/asyncToPromise')
const eitherToAsync = require('./Async/eitherToAsync')
const eitherToFirst = require('./First/eitherToFirst')
const eitherToLast = require('./Last/eitherToLast')
const eitherToMaybe = require('./Maybe/eitherToMaybe')
const eitherToResult = require('./Result/eitherToResult')
const find = require('./Maybe/find')
const firstToAsync = require('./Async/firstToAsync')
const firstToEither = require('./Either/firstToEither')
const firstToLast = require('./Last/firstToLast')
const firstToMaybe = require('./Maybe/firstToMaybe')
const firstToResult = require('./Result/firstToResult')
const lastToAsync = require('./Async/lastToAsync')
const lastToEither = require('./Either/lastToEither')
const lastToFirst = require('./First/lastToFirst')
const lastToMaybe = require('./Maybe/lastToMaybe')
const lastToResult = require('./Result/lastToResult')
const listToArray = require('./List/listToArray')
const maybeToArray = require('./Maybe/maybeToArray')
const maybeToAsync = require('./Async/maybeToAsync')
const maybeToEither = require('./Either/maybeToEither')
const maybeToFirst = require('./First/maybeToFirst')
const maybeToLast = require('./Last/maybeToLast')
const maybeToList = require('./List/maybeToList')
const maybeToResult = require('./Result/maybeToResult')
const resultToAsync = require('./Async/resultToAsync')
const resultToEither = require('./Either/resultToEither')
const resultToFirst = require('./First/resultToFirst')
const resultToLast = require('./Last/resultToLast')
const resultToMaybe = require('./Maybe/resultToMaybe')
const tupleToArray = require('./Tuple/tupleToArray')
const writerToPair = require('./Pair/writerToPair')

test('entry', t => {
  t.equal(crocks.toString(), '[object Object]', 'is an object')

  // combinators
  t.equal(crocks.applyTo, applyTo, 'provides the T combinator (applyTo)')
  t.equal(crocks.composeB, composeB, 'provides the B combinator (composeB)')
  t.equal(crocks.constant, constant, 'provides the K combinator (constant)')
  t.equal(crocks.flip, flip, 'provides the C combinator (flip)')
  t.equal(crocks.identity, identity, 'provides the I combinator (identity)')
  t.equal(crocks.substitution, substitution, 'provides the S combinator (substitution)')

  // crocks
  t.equal(crocks.Arrow, Arrow, 'provides the Arrow crock')
  t.equal(crocks.Async, Async, 'provides the Async crock')
  t.equal(crocks.Const, Const, 'provides the Const crock')
  t.equal(crocks.Either, Either, 'provides the Either crock')
  t.equal(crocks.Equiv, Equiv, 'provides the Equiv crock')
  t.equal(crocks.Identity, Identity, 'provides the Identity crock')
  t.equal(crocks.IO, IO, 'provides the IO crock')
  t.equal(crocks.List, List, 'provides the List crock')
  t.equal(crocks.Maybe, Maybe, 'provides the Maybe crock')
  t.equal(crocks.Pair, Pair, 'provides the Pair crock')
  t.equal(crocks.Pred, Pred, 'provides the Pred crock')
  t.equal(crocks.Result, Result, 'provides the Result crock')
  t.equal(crocks.Reader, Reader, 'provides the Reader crock')
  t.equal(crocks.ReaderT, ReaderT, 'provides the ReaderT crock')
  t.equal(crocks.Star, Star, 'provides the Star crock')
  t.equal(crocks.State, State, 'provides the State crock')
  t.equal(crocks.Tuple, Tuple, 'provides the Unit crock')
  t.equal(crocks.Unit, Unit, 'provides the Unit crock')
  t.equal(crocks.Writer, Writer, 'provides the Writer crock')

  // helpers
  t.equal(crocks.assign, assign, 'provides the assign helper')
  t.equal(crocks.assoc, assoc, 'provides the assoc helper')
  t.equal(crocks.binary, binary, 'provides the binary helper')
  t.equal(crocks.branch, branch, 'provides the branch helper')
  t.equal(crocks.compose, compose, 'provides the compose helper')
  t.equal(crocks.composeK, composeK, 'provides the composeK helper')
  t.equal(crocks.composeP, composeP, 'provides the composeP helper')
  t.equal(crocks.composeS, composeS, 'provides the composeS helper')
  t.equal(crocks.curry, curry, 'provides the curry helper')
  t.equal(crocks.defaultProps, defaultProps, 'provides the defaultProps helper')
  t.equal(crocks.defaultTo, defaultTo, 'provides the defaultTo helper')
  t.equal(crocks.dissoc, dissoc, 'provides the dissoc helper')
  t.equal(crocks.fanout, fanout, 'provides the fanout helper')
  t.equal(crocks.fromPairs, fromPairs, 'provides the fromPairs helper')
  t.equal(crocks.find, find, 'provides the find helper')
  t.equal(crocks.getPathOr, getPathOr, 'provides the getPathOr helper')
  t.equal(crocks.getPath, getPath, 'provides the getPath helper')
  t.equal(crocks.getProp, getProp, 'provides the getProp helper')
  t.equal(crocks.getPropOr, getPropOr, 'provides the getPropOr helper')
  t.equal(crocks.liftA2, liftA2, 'provides the liftA2 helper')
  t.equal(crocks.liftA3, liftA3, 'provides the liftA3 helper')
  t.equal(crocks.liftN, liftN, 'provides the liftN helper')
  t.equal(crocks.mapProps, mapProps, 'provides the mapProps helper')
  t.equal(crocks.mapReduce, mapReduce, 'provides the mapReduce helper')
  t.equal(crocks.mconcat, mconcat, 'provides the mconcat helper')
  t.equal(crocks.mconcatMap, mconcatMap, 'provides the mconcatMap helper')
  t.equal(crocks.mreduce, mreduce, 'provides the mreduce helper')
  t.equal(crocks.mreduceMap, mreduceMap, 'provides the mreduceMap helper')
  t.equal(crocks.nAry, nAry, 'provides the nAry helper')
  t.equal(crocks.objOf, objOf, 'provides the objOf helper')
  t.equal(crocks.omit, omit, 'provides the omit helper')
  t.equal(crocks.once, once, 'provides the once helper')
  t.equal(crocks.partial, partial, 'provides the partial helper')
  t.equal(crocks.pick, pick, 'provides the pick helper')
  t.equal(crocks.pipe, pipe, 'provides the pipe helper')
  t.equal(crocks.pipeK, pipeK, 'provides the pipeK helper')
  t.equal(crocks.pipeP, pipeP, 'provides the pipeP helper')
  t.equal(crocks.pipeS, pipeS, 'provides the pipeS helper')
  t.equal(crocks.prop, prop, 'provides the prop helper')
  t.equal(crocks.propOr, propOr, 'provides the propOr helper')
  t.equal(crocks.propPath, propPath, 'provides the propPath helper')
  t.equal(crocks.propPathOr, propPathOr, 'provides the propPathOr helper')
  t.equal(crocks.safe, safe, 'provides the safe helper')
  t.equal(crocks.safeLift, safeLift, 'provides the safeLift helper')
  t.equal(crocks.setPath, setPath, 'provides the setPath helper')
  t.equal(crocks.setProp, setProp, 'provides the setProp helper')
  t.equal(crocks.tap, tap, 'provides the tap helper')
  t.equal(crocks.toPairs, toPairs, 'provides the toPairs helper')
  t.equal(crocks.tryCatch, tryCatch, 'provides the tryCatch helper')
  t.equal(crocks.unary, unary, 'provides the unary helper')
  t.equal(crocks.unit, unit, 'provides the unit helper')
  t.equal(crocks.unsetPath, unsetPath, 'provides the unsetPath helper')
  t.equal(crocks.unsetProp, unsetProp, 'provides the unsetProp helper')

  // logic
  t.equal(crocks.and, and, 'provides the and logic')
  t.equal(crocks.ifElse, ifElse, 'provides the ifElse logic')
  t.equal(crocks.implies, implies, 'provides the implies logic')
  t.equal(crocks.not, not, 'provides the not logic')
  t.equal(crocks.or, or, 'provides the or logic')
  t.equal(crocks.unless, unless, 'provides the unless logic')
  t.equal(crocks.when, when, 'provides the when logic')

  // monoids
  t.equal(crocks.All, All, 'provides the All monoid')
  t.equal(crocks.Any, Any, 'provides the Any monoid')
  t.equal(crocks.Assign, Assign, 'provides the Assign monoid')
  t.equal(crocks.Endo, Endo, 'provides the Endo monoid')
  t.equal(crocks.First, First, 'provides the First monoid')
  t.equal(crocks.Last, Last, 'provides the Last monoid')
  t.equal(crocks.Max, Max, 'provides the Max monoid')
  t.equal(crocks.Min, Min, 'provides the Min monoid')
  t.equal(crocks.Prod, Prod, 'provides the Prod monoid')
  t.equal(crocks.Sum, Sum, 'provides the Sum monoid')

  // pointfree
  t.equal(crocks.alt, alt, 'provides the alt pointfree')
  t.equal(crocks.ap, ap, 'provides the ap pointfree')
  t.equal(crocks.bimap, bimap, 'provides the bimap pointfree')
  t.equal(crocks.both, both, 'provides the both pointfree')
  t.equal(crocks.chain, chain, 'provides the chain pointfree')
  t.equal(crocks.compareWith, compareWith, 'provides the compareWith pointfree')
  t.equal(crocks.coalesce, coalesce, 'provides the coalesce pointfree')
  t.equal(crocks.concat, concat, 'provides the concat pointfree')
  t.equal(crocks.cons, cons, 'provides the cons pointfree')
  t.equal(crocks.contramap, contramap, 'provides the contramap pointfree')
  t.equal(crocks.either, either, 'provides the either pointfree')
  t.equal(crocks.empty, empty, 'provides the empty pointfree')
  t.equal(crocks.equals, equals, 'provides the equals pointfree')
  t.equal(crocks.evalWith, evalWith, 'provides the evalWith pointfree')
  t.equal(crocks.execWith, execWith, 'provides the execWith pointfree')
  t.equal(crocks.extend, extend, 'provides the extend pointfree')
  t.equal(crocks.filter, filter, 'provides the filter pointfree')
  t.equal(crocks.first, first, 'provides the first pointfree')
  t.equal(crocks.fold, fold, 'provides the fold pointfree')
  t.equal(crocks.foldMap, foldMap, 'provides the foldMap pointfree')
  t.equal(crocks.fst, fst, 'provides the fst pointfree')
  t.equal(crocks.head, head, 'provides the head pointfree')
  t.equal(crocks.init, init, 'provides the init pointfree')
  t.equal(crocks.last, last, 'provides the last pointfree')
  t.equal(crocks.log, log, 'provides the log pointfree')
  t.equal(crocks.nmap, nmap, 'provides the nmap pointfree')
  t.equal(crocks.map, map, 'provides the map pointfree')
  t.equal(crocks.merge, merge, 'provides the merge pointfree')
  t.equal(crocks.option, option, 'provides the option pointfree')
  t.equal(crocks.project, project, 'provides the project pointfree')
  t.equal(crocks.promap, promap, 'provides the promap pointfree')
  t.equal(crocks.race, race, 'provides the race pointfree')
  t.equal(crocks.read, read, 'provides the read pointfree')
  t.equal(crocks.reduce, reduce, 'provides the reduce pointfree')
  t.equal(crocks.reduceRight, reduceRight, 'provides the reduceRight pointfree')
  t.equal(crocks.reject, reject, 'provides the reject pointfree')
  t.equal(crocks.run, run, 'provides the run pointfree')
  t.equal(crocks.runWith, runWith, 'provides the runWith pointfree')
  t.equal(crocks.second, second, 'provides the second pointfree')
  t.equal(crocks.sequence, sequence, 'provides the sequence pointfree')
  t.equal(crocks.snd, snd, 'provides the snd pointfree')
  t.equal(crocks.swap, swap, 'provides the swap pointfree')
  t.equal(crocks.tail, tail, 'provides the tail pointfree')
  t.equal(crocks.traverse, traverse, 'provides the traverse pointfree')
  t.equal(crocks.valueOf, valueOf, 'provides the valueOf pointfree')

  // predicates
  t.equal(crocks.hasProp, hasProp, 'provides the hasProp predicate')
  t.equal(crocks.hasProps, hasProps, 'provides the hasProps predicate')
  t.equal(crocks.hasPropPath, hasPropPath, 'provides the hasPropPath predicate')
  t.equal(crocks.isAlt, isAlt, 'provides the isAlt predicate')
  t.equal(crocks.isAlternative, isAlternative, 'provides the isAlternative predicate')
  t.equal(crocks.isApply, isApply, 'provides the isApply predicate')
  t.equal(crocks.isApplicative, isApplicative, 'provides the isApply predicate')
  t.equal(crocks.isArray, isArray, 'provides the isArray predicate')
  t.equal(crocks.isBifunctor, isBifunctor, 'provides the isBifunctor predicate')
  t.equal(crocks.isBoolean, isBoolean, 'provides the isBoolean predicate')
  t.equal(crocks.isCategory, isCategory, 'provides the isCategory predicate')
  t.equal(crocks.isChain, isChain, 'provides the isChain predicate')
  t.equal(crocks.isContravariant, isContravariant, 'provides the isContravariant predicate')
  t.equal(crocks.isDate, isDate, 'provides the isDate predicate')
  t.equal(crocks.isDefined, isDefined, 'provides the isDefined predicate')
  t.equal(crocks.isEmpty, isEmpty, 'provides the isEmpty predicate')
  t.equal(crocks.isExtend, isExtend, 'provides the isExtend predicate')
  t.equal(crocks.isFalse, isFalse, 'provides the isFalse predicate')
  t.equal(crocks.isFalsy, isFalsy, 'provides the isFalsy predicate')
  t.equal(crocks.isFoldable, isFoldable, 'provides the isFoldable predicate')
  t.equal(crocks.isFunction, isFunction, 'provides the isFunction predicate')
  t.equal(crocks.isFunctor, isFunctor, 'provides the isFunctor predicate')
  t.equal(crocks.isInteger, isInteger, 'provides the isInteger predicate')
  t.equal(crocks.isIterable, isIterable, 'provides the isIterable predicate')
  t.equal(crocks.isMonad, isMonad, 'provides the isMonad predicate')
  t.equal(crocks.isMonoid, isMonoid, 'provides the isMonoid predicate')
  t.equal(crocks.isNil, isNil, 'provides the isNil predicate')
  t.equal(crocks.isNumber, isNumber, 'provides the isNumber predicate')
  t.equal(crocks.isObject, isObject, 'provides the isObject predicate')
  t.equal(crocks.isPlus, isPlus, 'provides the isPlus predicate')
  t.equal(crocks.isProfunctor, isProfunctor, 'provides the isProfunctor predicate')
  t.equal(crocks.isPromise, isPromise, 'provides the isPromise predicate')
  t.equal(crocks.isSame, isSame, 'provides the isSame predicate')
  t.equal(crocks.isSameType, isSameType, 'provides the isSameType predicate')
  t.equal(crocks.isSemigroup, isSemigroup, 'provides the isSemigroup predicate')
  t.equal(crocks.isSemigroupoid, isSemigroupoid, 'provides the isSemigroupoid predicate')
  t.equal(crocks.isSetoid, isSetoid, 'provides the isSetoid predicate')
  t.equal(crocks.isString, isString, 'provides the isString predicate')
  t.equal(crocks.isSymbol, isSymbol, 'provides the isSymbol predicate')
  t.equal(crocks.isTraversable, isTraversable, 'provides the isTraversable predicate')
  t.equal(crocks.isTrue, isTrue, 'provides the isTrue predicate')
  t.equal(crocks.isTruthy, isTruthy, 'provides the isTruthy predicate')
  t.equal(crocks.pathSatisfies, pathSatisfies, 'provides the pathSatisfies predicate')
  t.equal(crocks.pathEq, pathEq, 'provides the pathEq predicate')
  t.equal(crocks.propEq, propEq, 'provides the propEq predicate')
  t.equal(crocks.propPathEq, propPathEq, 'provides the propEq predicate')
  t.equal(crocks.propSatisfies, propSatisfies, 'provides the propSatisfies predicate')
  t.equal(crocks.propPathSatisfies, propPathSatisfies, 'provides the propPathSatisfies predicate')

  // transforms
  t.equal(crocks.arrayToList, arrayToList, 'provides the arrayToList transform')
  t.equal(crocks.asyncToPromise, asyncToPromise, 'provides the asyncToPromise transform')
  t.equal(crocks.eitherToAsync, eitherToAsync, 'provides the eitherToAsync transform')
  t.equal(crocks.eitherToFirst, eitherToFirst, 'provides the eitherToFirst transform')
  t.equal(crocks.eitherToLast, eitherToLast, 'provides the eitherToLast transform')
  t.equal(crocks.eitherToMaybe, eitherToMaybe, 'provides the eitherToMaybe transform')
  t.equal(crocks.eitherToResult, eitherToResult, 'provides the eitherToResult transform')
  t.equal(crocks.firstToAsync, firstToAsync, 'provides the firstToAsync transform')
  t.equal(crocks.firstToEither, firstToEither, 'provides the firstToEither transform')
  t.equal(crocks.firstToLast, firstToLast, 'provides the firstToLast transform')
  t.equal(crocks.firstToMaybe, firstToMaybe, 'provides the firstToMaybe transform')
  t.equal(crocks.firstToResult, firstToResult, 'provides the firstToResult transform')
  t.equal(crocks.lastToAsync, lastToAsync, 'provides the lastToAsync transform')
  t.equal(crocks.lastToEither, lastToEither, 'provides the lastToEither transform')
  t.equal(crocks.lastToFirst, lastToFirst, 'provides the lastToFirst transform')
  t.equal(crocks.lastToMaybe, lastToMaybe, 'provides the lastToMaybe transform')
  t.equal(crocks.lastToResult, lastToResult, 'provides the lastToResult transform')
  t.equal(crocks.listToArray, listToArray, 'provides the listToArray transform')
  t.equal(crocks.maybeToArray, maybeToArray, 'provides the maybeToArray transform')
  t.equal(crocks.maybeToAsync, maybeToAsync, 'provides the maybeToAsync transform')
  t.equal(crocks.maybeToEither, maybeToEither, 'provides the maybeToEither transform')
  t.equal(crocks.maybeToFirst, maybeToFirst, 'provides the maybeToFirst transform')
  t.equal(crocks.maybeToLast, maybeToLast, 'provides the maybeToLast transform')
  t.equal(crocks.maybeToList, maybeToList, 'provides the maybeToList transform')
  t.equal(crocks.maybeToResult, maybeToResult, 'provides the maybeToResult transform')
  t.equal(crocks.resultToAsync, resultToAsync, 'provides the resultToAsync transform')
  t.equal(crocks.resultToEither, resultToEither, 'provides the resultToEither transform')
  t.equal(crocks.resultToFirst, resultToFirst, 'provides the resultToFirst transform')
  t.equal(crocks.resultToLast, resultToLast, 'provides the resultToLast transform')
  t.equal(crocks.resultToMaybe, resultToMaybe, 'provides the resultToMaybe transform')
  t.equal(crocks.tupleToArray, tupleToArray, 'provides the tupleToArray transform')
  t.equal(crocks.writerToPair, writerToPair, 'provides the writerToPair transform')

  t.end()
})
