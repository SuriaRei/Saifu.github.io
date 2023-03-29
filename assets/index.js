var Ua = Object.defineProperty,
	Ga = Object.defineProperties;
var qa = Object.getOwnPropertyDescriptors;
var Ho = Object.getOwnPropertySymbols;
var Ka = Object.prototype.hasOwnProperty,
	Ya = Object.prototype.propertyIsEnumerable;
var $o = (t, e, i) => e in t ? Ua(t, e, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: i
	}) : t[e] = i,
	ss = (t, e) => {
		for (var i in e || (e = {})) Ka.call(e, i) && $o(t, i, e[i]);
		if (Ho)
			for (var i of Ho(e)) Ya.call(e, i) && $o(t, i, e[i]);
		return t
	},
	os = (t, e) => Ga(t, qa(e));

function Xa(t, e) {
	return e.forEach(function(i) {
		i && typeof i != "string" && !Array.isArray(i) && Object.keys(i).forEach(function(n) {
			if (n !== "default" && !(n in t)) {
				var s = Object.getOwnPropertyDescriptor(i, n);
				Object.defineProperty(t, n, s.get ? s : {
					enumerable: !0,
					get: function() {
						return i[n]
					}
				})
			}
		})
	}), Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
		value: "Module"
	}))
}
const Ja = function() {
	const e = document.createElement("link").relList;
	if (e && e.supports && e.supports("modulepreload")) return;
	for (const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s);
	new MutationObserver(s => {
		for (const o of s)
			if (o.type === "childList")
				for (const r of o.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && n(r)
	}).observe(document, {
		childList: !0,
		subtree: !0
	});

	function i(s) {
		const o = {};
		return s.integrity && (o.integrity = s.integrity), s.referrerpolicy && (o.referrerPolicy = s.referrerpolicy), s.crossorigin === "use-credentials" ? o.credentials = "include" : s.crossorigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
	}

	function n(s) {
		if (s.ep) return;
		s.ep = !0;
		const o = i(s);
		fetch(s.href, o)
	}
};
Ja();

function io(t, e) {
	const i = Object.create(null),
		n = t.split(",");
	for (let s = 0; s < n.length; s++) i[n[s]] = !0;
	return e ? s => !!i[s.toLowerCase()] : s => !!i[s]
}
const Qa = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
	Za = io(Qa);

function ol(t) {
	return !!t || t === ""
}

function no(t) {
	if (K(t)) {
		const e = {};
		for (let i = 0; i < t.length; i++) {
			const n = t[i],
				s = ke(n) ? ic(n) : no(n);
			if (s)
				for (const o in s) e[o] = s[o]
		}
		return e
	} else {
		if (ke(t)) return t;
		if (Me(t)) return t
	}
}
const ec = /;(?![^(]*\))/g,
	tc = /:(.+)/;

function ic(t) {
	const e = {};
	return t.split(ec).forEach(i => {
		if (i) {
			const n = i.split(tc);
			n.length > 1 && (e[n[0].trim()] = n[1].trim())
		}
	}), e
}

function Vn(t) {
	let e = "";
	if (ke(t)) e = t;
	else if (K(t))
		for (let i = 0; i < t.length; i++) {
			const n = Vn(t[i]);
			n && (e += n + " ")
		} else if (Me(t))
			for (const i in t) t[i] && (e += i + " ");
	return e.trim()
}
const so = t => ke(t) ? t : t == null ? "" : K(t) || Me(t) && (t.toString === cl || !X(t.toString)) ? JSON.stringify(t, rl, 2) : String(t),
	rl = (t, e) => e && e.__v_isRef ? rl(t, e.value) : yi(e) ? {
		[`Map(${e.size})`]: [...e.entries()].reduce((i, [n, s]) => (i[`${n} =>`] = s, i), {})
	} : ll(e) ? {
		[`Set(${e.size})`]: [...e.values()]
	} : Me(e) && !K(e) && !ul(e) ? String(e) : e,
	pe = {},
	pi = [],
	at = () => {},
	nc = () => !1,
	sc = /^on[^a-z]/,
	Nn = t => sc.test(t),
	oo = t => t.startsWith("onUpdate:"),
	Te = Object.assign,
	ro = (t, e) => {
		const i = t.indexOf(e);
		i > -1 && t.splice(i, 1)
	},
	oc = Object.prototype.hasOwnProperty,
	te = (t, e) => oc.call(t, e),
	K = Array.isArray,
	yi = t => Wn(t) === "[object Map]",
	ll = t => Wn(t) === "[object Set]",
	X = t => typeof t == "function",
	ke = t => typeof t == "string",
	lo = t => typeof t == "symbol",
	Me = t => t !== null && typeof t == "object",
	al = t => Me(t) && X(t.then) && X(t.catch),
	cl = Object.prototype.toString,
	Wn = t => cl.call(t),
	rc = t => Wn(t).slice(8, -1),
	ul = t => Wn(t) === "[object Object]",
	ao = t => ke(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
	vn = io(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
	Un = t => {
		const e = Object.create(null);
		return i => e[i] || (e[i] = t(i))
	},
	lc = /-(\w)/g,
	vt = Un(t => t.replace(lc, (e, i) => i ? i.toUpperCase() : "")),
	ac = /\B([A-Z])/g,
	Pi = Un(t => t.replace(ac, "-$1").toLowerCase()),
	Gn = Un(t => t.charAt(0).toUpperCase() + t.slice(1)),
	rs = Un(t => t ? `on${Gn(t)}` : ""),
	Yi = (t, e) => !Object.is(t, e),
	ls = (t, e) => {
		for (let i = 0; i < t.length; i++) t[i](e)
	},
	On = (t, e, i) => {
		Object.defineProperty(t, e, {
			configurable: !0,
			enumerable: !1,
			value: i
		})
	},
	dl = t => {
		const e = parseFloat(t);
		return isNaN(e) ? t : e
	};
let Bo;
const cc = () => Bo || (Bo = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : typeof global != "undefined" ? global : {});
let ht;
class uc {
	constructor(e = !1) {
		this.active = !0, this.effects = [], this.cleanups = [], !e && ht && (this.parent = ht, this.index = (ht.scopes || (ht.scopes = [])).push(this) - 1)
	}
	run(e) {
		if (this.active) {
			const i = ht;
			try {
				return ht = this, e()
			} finally {
				ht = i
			}
		}
	}
	on() {
		ht = this
	}
	off() {
		ht = this.parent
	}
	stop(e) {
		if (this.active) {
			let i, n;
			for (i = 0, n = this.effects.length; i < n; i++) this.effects[i].stop();
			for (i = 0, n = this.cleanups.length; i < n; i++) this.cleanups[i]();
			if (this.scopes)
				for (i = 0, n = this.scopes.length; i < n; i++) this.scopes[i].stop(!0);
			if (this.parent && !e) {
				const s = this.parent.scopes.pop();
				s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index)
			}
			this.active = !1
		}
	}
}

function dc(t, e = ht) {
	e && e.active && e.effects.push(t)
}
const co = t => {
		const e = new Set(t);
		return e.w = 0, e.n = 0, e
	},
	hl = t => (t.w & $t) > 0,
	fl = t => (t.n & $t) > 0,
	hc = ({
		deps: t
	}) => {
		if (t.length)
			for (let e = 0; e < t.length; e++) t[e].w |= $t
	},
	fc = t => {
		const {
			deps: e
		} = t;
		if (e.length) {
			let i = 0;
			for (let n = 0; n < e.length; n++) {
				const s = e[n];
				hl(s) && !fl(s) ? s.delete(t) : e[i++] = s, s.w &= ~$t, s.n &= ~$t
			}
			e.length = i
		}
	},
	Os = new WeakMap;
let Ri = 0,
	$t = 1;
const Ss = 30;
let ot;
const ei = Symbol(""),
	Ts = Symbol("");
class uo {
	constructor(e, i = null, n) {
		this.fn = e, this.scheduler = i, this.active = !0, this.deps = [], this.parent = void 0, dc(this, n)
	}
	run() {
		if (!this.active) return this.fn();
		let e = ot,
			i = Ft;
		for (; e;) {
			if (e === this) return;
			e = e.parent
		}
		try {
			return this.parent = ot, ot = this, Ft = !0, $t = 1 << ++Ri, Ri <= Ss ? hc(this) : Vo(this), this.fn()
		} finally {
			Ri <= Ss && fc(this), $t = 1 << --Ri, ot = this.parent, Ft = i, this.parent = void 0, this.deferStop && this.stop()
		}
	}
	stop() {
		ot === this ? this.deferStop = !0 : this.active && (Vo(this), this.onStop && this.onStop(), this.active = !1)
	}
}

function Vo(t) {
	const {
		deps: e
	} = t;
	if (e.length) {
		for (let i = 0; i < e.length; i++) e[i].delete(t);
		e.length = 0
	}
}
let Ft = !0;
const pl = [];

function _i() {
	pl.push(Ft), Ft = !1
}

function Mi() {
	const t = pl.pop();
	Ft = t === void 0 ? !0 : t
}

function qe(t, e, i) {
	if (Ft && ot) {
		let n = Os.get(t);
		n || Os.set(t, n = new Map);
		let s = n.get(i);
		s || n.set(i, s = co()), yl(s)
	}
}

function yl(t, e) {
	let i = !1;
	Ri <= Ss ? fl(t) || (t.n |= $t, i = !hl(t)) : i = !t.has(ot), i && (t.add(ot), ot.deps.push(t))
}

function Pt(t, e, i, n, s, o) {
	const r = Os.get(t);
	if (!r) return;
	let l = [];
	if (e === "clear") l = [...r.values()];
	else if (i === "length" && K(t)) r.forEach((a, c) => {
		(c === "length" || c >= n) && l.push(a)
	});
	else switch (i !== void 0 && l.push(r.get(i)), e) {
		case "add":
			K(t) ? ao(i) && l.push(r.get("length")) : (l.push(r.get(ei)), yi(t) && l.push(r.get(Ts)));
			break;
		case "delete":
			K(t) || (l.push(r.get(ei)), yi(t) && l.push(r.get(Ts)));
			break;
		case "set":
			yi(t) && l.push(r.get(ei));
			break
	}
	if (l.length === 1) l[0] && ks(l[0]);
	else {
		const a = [];
		for (const c of l) c && a.push(...c);
		ks(co(a))
	}
}

function ks(t, e) {
	for (const i of K(t) ? t : [...t])(i !== ot || i.allowRecurse) && (i.scheduler ? i.scheduler() : i.run())
}
const pc = io("__proto__,__v_isRef,__isVue"),
	ml = new Set(Object.getOwnPropertyNames(Symbol).map(t => Symbol[t]).filter(lo)),
	yc = ho(),
	mc = ho(!1, !0),
	vc = ho(!0),
	No = gc();

function gc() {
	const t = {};
	return ["includes", "indexOf", "lastIndexOf"].forEach(e => {
		t[e] = function(...i) {
			const n = oe(this);
			for (let o = 0, r = this.length; o < r; o++) qe(n, "get", o + "");
			const s = n[e](...i);
			return s === -1 || s === !1 ? n[e](...i.map(oe)) : s
		}
	}), ["push", "pop", "shift", "unshift", "splice"].forEach(e => {
		t[e] = function(...i) {
			_i();
			const n = oe(this)[e].apply(this, i);
			return Mi(), n
		}
	}), t
}

function ho(t = !1, e = !1) {
	return function(n, s, o) {
		if (s === "__v_isReactive") return !t;
		if (s === "__v_isReadonly") return t;
		if (s === "__v_isShallow") return e;
		if (s === "__v_raw" && o === (t ? e ? Rc : wl : e ? xl : bl).get(n)) return n;
		const r = K(n);
		if (!t && r && te(No, s)) return Reflect.get(No, s, o);
		const l = Reflect.get(n, s, o);
		return (lo(s) ? ml.has(s) : pc(s)) || (t || qe(n, "get", s), e) ? l : Se(l) ? !r || !ao(s) ? l.value : l : Me(l) ? t ? Pl(l) : on(l) : l
	}
}
const bc = vl(),
	xc = vl(!0);

function vl(t = !1) {
	return function(i, n, s, o) {
		let r = i[n];
		if (Xi(r) && Se(r) && !Se(s)) return !1;
		if (!t && !Xi(s) && (_l(s) || (s = oe(s), r = oe(r)), !K(i) && Se(r) && !Se(s))) return r.value = s, !0;
		const l = K(i) && ao(n) ? Number(n) < i.length : te(i, n),
			a = Reflect.set(i, n, s, o);
		return i === oe(o) && (l ? Yi(s, r) && Pt(i, "set", n, s) : Pt(i, "add", n, s)), a
	}
}

function wc(t, e) {
	const i = te(t, e);
	t[e];
	const n = Reflect.deleteProperty(t, e);
	return n && i && Pt(t, "delete", e, void 0), n
}

function Pc(t, e) {
	const i = Reflect.has(t, e);
	return (!lo(e) || !ml.has(e)) && qe(t, "has", e), i
}

function _c(t) {
	return qe(t, "iterate", K(t) ? "length" : ei), Reflect.ownKeys(t)
}
const gl = {
		get: yc,
		set: bc,
		deleteProperty: wc,
		has: Pc,
		ownKeys: _c
	},
	Mc = {
		get: vc,
		set(t, e) {
			return !0
		},
		deleteProperty(t, e) {
			return !0
		}
	},
	jc = Te({}, gl, {
		get: mc,
		set: xc
	}),
	fo = t => t,
	qn = t => Reflect.getPrototypeOf(t);

function an(t, e, i = !1, n = !1) {
	t = t.__v_raw;
	const s = oe(t),
		o = oe(e);
	e !== o && !i && qe(s, "get", e), !i && qe(s, "get", o);
	const {
		has: r
	} = qn(s), l = n ? fo : i ? mo : Ji;
	if (r.call(s, e)) return l(t.get(e));
	if (r.call(s, o)) return l(t.get(o));
	t !== s && t.get(e)
}

function cn(t, e = !1) {
	const i = this.__v_raw,
		n = oe(i),
		s = oe(t);
	return t !== s && !e && qe(n, "has", t), !e && qe(n, "has", s), t === s ? i.has(t) : i.has(t) || i.has(s)
}

function un(t, e = !1) {
	return t = t.__v_raw, !e && qe(oe(t), "iterate", ei), Reflect.get(t, "size", t)
}

function Wo(t) {
	t = oe(t);
	const e = oe(this);
	return qn(e).has.call(e, t) || (e.add(t), Pt(e, "add", t, t)), this
}

function Uo(t, e) {
	e = oe(e);
	const i = oe(this),
		{
			has: n,
			get: s
		} = qn(i);
	let o = n.call(i, t);
	o || (t = oe(t), o = n.call(i, t));
	const r = s.call(i, t);
	return i.set(t, e), o ? Yi(e, r) && Pt(i, "set", t, e) : Pt(i, "add", t, e), this
}

function Go(t) {
	const e = oe(this),
		{
			has: i,
			get: n
		} = qn(e);
	let s = i.call(e, t);
	s || (t = oe(t), s = i.call(e, t)), n && n.call(e, t);
	const o = e.delete(t);
	return s && Pt(e, "delete", t, void 0), o
}

function qo() {
	const t = oe(this),
		e = t.size !== 0,
		i = t.clear();
	return e && Pt(t, "clear", void 0, void 0), i
}

function dn(t, e) {
	return function(n, s) {
		const o = this,
			r = o.__v_raw,
			l = oe(r),
			a = e ? fo : t ? mo : Ji;
		return !t && qe(l, "iterate", ei), r.forEach((c, u) => n.call(s, a(c), a(u), o))
	}
}

function hn(t, e, i) {
	return function(...n) {
		const s = this.__v_raw,
			o = oe(s),
			r = yi(o),
			l = t === "entries" || t === Symbol.iterator && r,
			a = t === "keys" && r,
			c = s[t](...n),
			u = i ? fo : e ? mo : Ji;
		return !e && qe(o, "iterate", a ? Ts : ei), {
			next() {
				const {
					value: d,
					done: h
				} = c.next();
				return h ? {
					value: d,
					done: h
				} : {
					value: l ? [u(d[0]), u(d[1])] : u(d),
					done: h
				}
			},
			[Symbol.iterator]() {
				return this
			}
		}
	}
}

function Et(t) {
	return function(...e) {
		return t === "delete" ? !1 : this
	}
}

function Ec() {
	const t = {
			get(o) {
				return an(this, o)
			},
			get size() {
				return un(this)
			},
			has: cn,
			add: Wo,
			set: Uo,
			delete: Go,
			clear: qo,
			forEach: dn(!1, !1)
		},
		e = {
			get(o) {
				return an(this, o, !1, !0)
			},
			get size() {
				return un(this)
			},
			has: cn,
			add: Wo,
			set: Uo,
			delete: Go,
			clear: qo,
			forEach: dn(!1, !0)
		},
		i = {
			get(o) {
				return an(this, o, !0)
			},
			get size() {
				return un(this, !0)
			},
			has(o) {
				return cn.call(this, o, !0)
			},
			add: Et("add"),
			set: Et("set"),
			delete: Et("delete"),
			clear: Et("clear"),
			forEach: dn(!0, !1)
		},
		n = {
			get(o) {
				return an(this, o, !0, !0)
			},
			get size() {
				return un(this, !0)
			},
			has(o) {
				return cn.call(this, o, !0)
			},
			add: Et("add"),
			set: Et("set"),
			delete: Et("delete"),
			clear: Et("clear"),
			forEach: dn(!0, !0)
		};
	return ["keys", "values", "entries", Symbol.iterator].forEach(o => {
		t[o] = hn(o, !1, !1), i[o] = hn(o, !0, !1), e[o] = hn(o, !1, !0), n[o] = hn(o, !0, !0)
	}), [t, i, e, n]
}
const [Cc, Oc, Sc, Tc] = Ec();

function po(t, e) {
	const i = e ? t ? Tc : Sc : t ? Oc : Cc;
	return (n, s, o) => s === "__v_isReactive" ? !t : s === "__v_isReadonly" ? t : s === "__v_raw" ? n : Reflect.get(te(i, s) && s in n ? i : n, s, o)
}
const kc = {
		get: po(!1, !1)
	},
	Ac = {
		get: po(!1, !0)
	},
	zc = {
		get: po(!0, !1)
	},
	bl = new WeakMap,
	xl = new WeakMap,
	wl = new WeakMap,
	Rc = new WeakMap;

function Ic(t) {
	switch (t) {
		case "Object":
		case "Array":
			return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet":
			return 2;
		default:
			return 0
	}
}

function Fc(t) {
	return t.__v_skip || !Object.isExtensible(t) ? 0 : Ic(rc(t))
}

function on(t) {
	return Xi(t) ? t : yo(t, !1, gl, kc, bl)
}

function Dc(t) {
	return yo(t, !1, jc, Ac, xl)
}

function Pl(t) {
	return yo(t, !0, Mc, zc, wl)
}

function yo(t, e, i, n, s) {
	if (!Me(t) || t.__v_raw && !(e && t.__v_isReactive)) return t;
	const o = s.get(t);
	if (o) return o;
	const r = Fc(t);
	if (r === 0) return t;
	const l = new Proxy(t, r === 2 ? n : i);
	return s.set(t, l), l
}

function mi(t) {
	return Xi(t) ? mi(t.__v_raw) : !!(t && t.__v_isReactive)
}

function Xi(t) {
	return !!(t && t.__v_isReadonly)
}

function _l(t) {
	return !!(t && t.__v_isShallow)
}

function Ml(t) {
	return mi(t) || Xi(t)
}

function oe(t) {
	const e = t && t.__v_raw;
	return e ? oe(e) : t
}

function jl(t) {
	return On(t, "__v_skip", !0), t
}
const Ji = t => Me(t) ? on(t) : t,
	mo = t => Me(t) ? Pl(t) : t;

function El(t) {
	Ft && ot && (t = oe(t), yl(t.dep || (t.dep = co())))
}

function Cl(t, e) {
	t = oe(t), t.dep && ks(t.dep)
}

function Se(t) {
	return !!(t && t.__v_isRef === !0)
}

function Sn(t) {
	return Ol(t, !1)
}

function Lc(t) {
	return Ol(t, !0)
}

function Ol(t, e) {
	return Se(t) ? t : new Hc(t, e)
}
class Hc {
	constructor(e, i) {
		this.__v_isShallow = i, this.dep = void 0, this.__v_isRef = !0, this._rawValue = i ? e : oe(e), this._value = i ? e : Ji(e)
	}
	get value() {
		return El(this), this._value
	}
	set value(e) {
		e = this.__v_isShallow ? e : oe(e), Yi(e, this._rawValue) && (this._rawValue = e, this._value = this.__v_isShallow ? e : Ji(e), Cl(this))
	}
}

function Dt(t) {
	return Se(t) ? t.value : t
}
const $c = {
	get: (t, e, i) => Dt(Reflect.get(t, e, i)),
	set: (t, e, i, n) => {
		const s = t[e];
		return Se(s) && !Se(i) ? (s.value = i, !0) : Reflect.set(t, e, i, n)
	}
};

function Tn(t) {
	return mi(t) ? t : new Proxy(t, $c)
}
class Bc {
	constructor(e, i, n, s) {
		this._setter = i, this.dep = void 0, this.__v_isRef = !0, this._dirty = !0, this.effect = new uo(e, () => {
			this._dirty || (this._dirty = !0, Cl(this))
		}), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = n
	}
	get value() {
		const e = oe(this);
		return El(e), (e._dirty || !e._cacheable) && (e._dirty = !1, e._value = e.effect.run()), e._value
	}
	set value(e) {
		this._setter(e)
	}
}

function Vc(t, e, i = !1) {
	let n, s;
	const o = X(t);
	return o ? (n = t, s = at) : (n = t.get, s = t.set), new Bc(n, s, o || !s, i)
}

function Lt(t, e, i, n) {
	let s;
	try {
		s = n ? t(...n) : t()
	} catch (o) {
		Kn(o, e, i)
	}
	return s
}

function tt(t, e, i, n) {
	if (X(t)) {
		const o = Lt(t, e, i, n);
		return o && al(o) && o.catch(r => {
			Kn(r, e, i)
		}), o
	}
	const s = [];
	for (let o = 0; o < t.length; o++) s.push(tt(t[o], e, i, n));
	return s
}

function Kn(t, e, i, n = !0) {
	const s = e ? e.vnode : null;
	if (e) {
		let o = e.parent;
		const r = e.proxy,
			l = i;
		for (; o;) {
			const c = o.ec;
			if (c) {
				for (let u = 0; u < c.length; u++)
					if (c[u](t, r, l) === !1) return
			}
			o = o.parent
		}
		const a = e.appContext.config.errorHandler;
		if (a) {
			Lt(a, null, 10, [t, r, l]);
			return
		}
	}
	Nc(t, i, s, n)
}

function Nc(t, e, i, n = !0) {
	console.error(t)
}
let kn = !1,
	As = !1;
const Ue = [];
let wt = 0;
const Bi = [];
let Ii = null,
	ai = 0;
const Vi = [];
let At = null,
	ci = 0;
const Sl = Promise.resolve();
let vo = null,
	zs = null;

function go(t) {
	const e = vo || Sl;
	return t ? e.then(this ? t.bind(this) : t) : e
}

function Wc(t) {
	let e = wt + 1,
		i = Ue.length;
	for (; e < i;) {
		const n = e + i >>> 1;
		Qi(Ue[n]) < t ? e = n + 1 : i = n
	}
	return e
}

function Tl(t) {
	(!Ue.length || !Ue.includes(t, kn && t.allowRecurse ? wt + 1 : wt)) && t !== zs && (t.id == null ? Ue.push(t) : Ue.splice(Wc(t.id), 0, t), kl())
}

function kl() {
	!kn && !As && (As = !0, vo = Sl.then(Rl))
}

function Uc(t) {
	const e = Ue.indexOf(t);
	e > wt && Ue.splice(e, 1)
}

function Al(t, e, i, n) {
	K(t) ? i.push(...t) : (!e || !e.includes(t, t.allowRecurse ? n + 1 : n)) && i.push(t), kl()
}

function Gc(t) {
	Al(t, Ii, Bi, ai)
}

function qc(t) {
	Al(t, At, Vi, ci)
}

function bo(t, e = null) {
	if (Bi.length) {
		for (zs = e, Ii = [...new Set(Bi)], Bi.length = 0, ai = 0; ai < Ii.length; ai++) Ii[ai]();
		Ii = null, ai = 0, zs = null, bo(t, e)
	}
}

function zl(t) {
	if (Vi.length) {
		const e = [...new Set(Vi)];
		if (Vi.length = 0, At) {
			At.push(...e);
			return
		}
		for (At = e, At.sort((i, n) => Qi(i) - Qi(n)), ci = 0; ci < At.length; ci++) At[ci]();
		At = null, ci = 0
	}
}
const Qi = t => t.id == null ? 1 / 0 : t.id;

function Rl(t) {
	As = !1, kn = !0, bo(t), Ue.sort((i, n) => Qi(i) - Qi(n));
	const e = at;
	try {
		for (wt = 0; wt < Ue.length; wt++) {
			const i = Ue[wt];
			i && i.active !== !1 && Lt(i, null, 14)
		}
	} finally {
		wt = 0, Ue.length = 0, zl(), kn = !1, vo = null, (Ue.length || Bi.length || Vi.length) && Rl(t)
	}
}

function Kc(t, e, ...i) {
	if (t.isUnmounted) return;
	const n = t.vnode.props || pe;
	let s = i;
	const o = e.startsWith("update:"),
		r = o && e.slice(7);
	if (r && r in n) {
		const u = `${r==="modelValue"?"model":r}Modifiers`,
			{
				number: d,
				trim: h
			} = n[u] || pe;
		h ? s = i.map(f => f.trim()) : d && (s = i.map(dl))
	}
	let l, a = n[l = rs(e)] || n[l = rs(vt(e))];
	!a && o && (a = n[l = rs(Pi(e))]), a && tt(a, t, 6, s);
	const c = n[l + "Once"];
	if (c) {
		if (!t.emitted) t.emitted = {};
		else if (t.emitted[l]) return;
		t.emitted[l] = !0, tt(c, t, 6, s)
	}
}

function Il(t, e, i = !1) {
	const n = e.emitsCache,
		s = n.get(t);
	if (s !== void 0) return s;
	const o = t.emits;
	let r = {},
		l = !1;
	if (!X(t)) {
		const a = c => {
			const u = Il(c, e, !0);
			u && (l = !0, Te(r, u))
		};
		!i && e.mixins.length && e.mixins.forEach(a), t.extends && a(t.extends), t.mixins && t.mixins.forEach(a)
	}
	return !o && !l ? (n.set(t, null), null) : (K(o) ? o.forEach(a => r[a] = null) : Te(r, o), n.set(t, r), r)
}

function Yn(t, e) {
	return !t || !Nn(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), te(t, e[0].toLowerCase() + e.slice(1)) || te(t, Pi(e)) || te(t, e))
}
let Fe = null,
	Xn = null;

function An(t) {
	const e = Fe;
	return Fe = t, Xn = t && t.type.__scopeId || null, e
}

function Yc(t) {
	Xn = t
}

function Xc() {
	Xn = null
}

function Ni(t, e = Fe, i) {
	if (!e || t._n) return t;
	const n = (...s) => {
		n._d && sr(-1);
		const o = An(e),
			r = t(...s);
		return An(o), n._d && sr(1), r
	};
	return n._n = !0, n._c = !0, n._d = !0, n
}

function as(t) {
	const {
		type: e,
		vnode: i,
		proxy: n,
		withProxy: s,
		props: o,
		propsOptions: [r],
		slots: l,
		attrs: a,
		emit: c,
		render: u,
		renderCache: d,
		data: h,
		setupState: f,
		ctx: p,
		inheritAttrs: y
	} = t;
	let v, g;
	const x = An(t);
	try {
		if (i.shapeFlag & 4) {
			const E = s || n;
			v = pt(u.call(E, E, d, o, f, h, p)), g = a
		} else {
			const E = e;
			v = pt(E.length > 1 ? E(o, {
				attrs: a,
				slots: l,
				emit: c
			}) : E(o, null)), g = e.props ? a : Jc(a)
		}
	} catch (E) {
		Wi.length = 0, Kn(E, t, 1), v = ge(it)
	}
	let P = v;
	if (g && y !== !1) {
		const E = Object.keys(g),
			{
				shapeFlag: R
			} = P;
		E.length && R & 7 && (r && E.some(oo) && (g = Qc(g, r)), P = ni(P, g))
	}
	return i.dirs && (P.dirs = P.dirs ? P.dirs.concat(i.dirs) : i.dirs), i.transition && (P.transition = i.transition), v = P, An(x), v
}
const Jc = t => {
		let e;
		for (const i in t)(i === "class" || i === "style" || Nn(i)) && ((e || (e = {}))[i] = t[i]);
		return e
	},
	Qc = (t, e) => {
		const i = {};
		for (const n in t)(!oo(n) || !(n.slice(9) in e)) && (i[n] = t[n]);
		return i
	};

function Zc(t, e, i) {
	const {
		props: n,
		children: s,
		component: o
	} = t, {
		props: r,
		children: l,
		patchFlag: a
	} = e, c = o.emitsOptions;
	if (e.dirs || e.transition) return !0;
	if (i && a >= 0) {
		if (a & 1024) return !0;
		if (a & 16) return n ? Ko(n, r, c) : !!r;
		if (a & 8) {
			const u = e.dynamicProps;
			for (let d = 0; d < u.length; d++) {
				const h = u[d];
				if (r[h] !== n[h] && !Yn(c, h)) return !0
			}
		}
	} else return (s || l) && (!l || !l.$stable) ? !0 : n === r ? !1 : n ? r ? Ko(n, r, c) : !0 : !!r;
	return !1
}

function Ko(t, e, i) {
	const n = Object.keys(e);
	if (n.length !== Object.keys(t).length) return !0;
	for (let s = 0; s < n.length; s++) {
		const o = n[s];
		if (e[o] !== t[o] && !Yn(i, o)) return !0
	}
	return !1
}

function eu({
	vnode: t,
	parent: e
}, i) {
	for (; e && e.subTree === t;)(t = e.vnode).el = i, e = e.parent
}
const tu = t => t.__isSuspense;

function iu(t, e) {
	e && e.pendingBranch ? K(t) ? e.effects.push(...t) : e.effects.push(t) : qc(t)
}

function gn(t, e) {
	if (Ee) {
		let i = Ee.provides;
		const n = Ee.parent && Ee.parent.provides;
		n === i && (i = Ee.provides = Object.create(n)), i[t] = e
	}
}

function Ht(t, e, i = !1) {
	const n = Ee || Fe;
	if (n) {
		const s = n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides;
		if (s && t in s) return s[t];
		if (arguments.length > 1) return i && X(e) ? e.call(n.proxy) : e
	}
}
const Yo = {};

function bn(t, e, i) {
	return Fl(t, e, i)
}

function Fl(t, e, {
	immediate: i,
	deep: n,
	flush: s,
	onTrack: o,
	onTrigger: r
} = pe) {
	const l = Ee;
	let a, c = !1,
		u = !1;
	if (Se(t) ? (a = () => t.value, c = _l(t)) : mi(t) ? (a = () => t, n = !0) : K(t) ? (u = !0, c = t.some(mi), a = () => t.map(g => {
			if (Se(g)) return g.value;
			if (mi(g)) return fi(g);
			if (X(g)) return Lt(g, l, 2)
		})) : X(t) ? e ? a = () => Lt(t, l, 2) : a = () => {
			if (!(l && l.isUnmounted)) return d && d(), tt(t, l, 3, [h])
		} : a = at, e && n) {
		const g = a;
		a = () => fi(g())
	}
	let d, h = g => {
		d = v.onStop = () => {
			Lt(g, l, 4)
		}
	};
	if (Zi) return h = at, e ? i && tt(e, l, 3, [a(), u ? [] : void 0, h]) : a(), at;
	let f = u ? [] : Yo;
	const p = () => {
		if (!!v.active)
			if (e) {
				const g = v.run();
				(n || c || (u ? g.some((x, P) => Yi(x, f[P])) : Yi(g, f))) && (d && d(), tt(e, l, 3, [g, f === Yo ? void 0 : f, h]), f = g)
			} else v.run()
	};
	p.allowRecurse = !!e;
	let y;
	s === "sync" ? y = p : s === "post" ? y = () => Le(p, l && l.suspense) : y = () => {
		!l || l.isMounted ? Gc(p) : p()
	};
	const v = new uo(a, y);
	return e ? i ? p() : f = v.run() : s === "post" ? Le(v.run.bind(v), l && l.suspense) : v.run(), () => {
		v.stop(), l && l.scope && ro(l.scope.effects, v)
	}
}

function nu(t, e, i) {
	const n = this.proxy,
		s = ke(t) ? t.includes(".") ? Dl(n, t) : () => n[t] : t.bind(n, n);
	let o;
	X(e) ? o = e : (o = e.handler, i = e);
	const r = Ee;
	vi(this);
	const l = Fl(s, o.bind(n), i);
	return r ? vi(r) : ii(), l
}

function Dl(t, e) {
	const i = e.split(".");
	return () => {
		let n = t;
		for (let s = 0; s < i.length && n; s++) n = n[i[s]];
		return n
	}
}

function fi(t, e) {
	if (!Me(t) || t.__v_skip || (e = e || new Set, e.has(t))) return t;
	if (e.add(t), Se(t)) fi(t.value, e);
	else if (K(t))
		for (let i = 0; i < t.length; i++) fi(t[i], e);
	else if (ll(t) || yi(t)) t.forEach(i => {
		fi(i, e)
	});
	else if (ul(t))
		for (const i in t) fi(t[i], e);
	return t
}

function su() {
	const t = {
		isMounted: !1,
		isLeaving: !1,
		isUnmounting: !1,
		leavingVNodes: new Map
	};
	return xo(() => {
		t.isMounted = !0
	}), Vl(() => {
		t.isUnmounting = !0
	}), t
}
const Xe = [Function, Array],
	ou = {
		name: "BaseTransition",
		props: {
			mode: String,
			appear: Boolean,
			persisted: Boolean,
			onBeforeEnter: Xe,
			onEnter: Xe,
			onAfterEnter: Xe,
			onEnterCancelled: Xe,
			onBeforeLeave: Xe,
			onLeave: Xe,
			onAfterLeave: Xe,
			onLeaveCancelled: Xe,
			onBeforeAppear: Xe,
			onAppear: Xe,
			onAfterAppear: Xe,
			onAppearCancelled: Xe
		},
		setup(t, {
			slots: e
		}) {
			const i = Vu(),
				n = su();
			let s;
			return () => {
				const o = e.default && $l(e.default(), !0);
				if (!o || !o.length) return;
				let r = o[0];
				if (o.length > 1) {
					for (const y of o)
						if (y.type !== it) {
							r = y;
							break
						}
				}
				const l = oe(t),
					{
						mode: a
					} = l;
				if (n.isLeaving) return cs(r);
				const c = Xo(r);
				if (!c) return cs(r);
				const u = Rs(c, l, n, i);
				Is(c, u);
				const d = i.subTree,
					h = d && Xo(d);
				let f = !1;
				const {
					getTransitionKey: p
				} = c.type;
				if (p) {
					const y = p();
					s === void 0 ? s = y : y !== s && (s = y, f = !0)
				}
				if (h && h.type !== it && (!Jt(c, h) || f)) {
					const y = Rs(h, l, n, i);
					if (Is(h, y), a === "out-in") return n.isLeaving = !0, y.afterLeave = () => {
						n.isLeaving = !1, i.update()
					}, cs(r);
					a === "in-out" && c.type !== it && (y.delayLeave = (v, g, x) => {
						const P = Hl(n, h);
						P[String(h.key)] = h, v._leaveCb = () => {
							g(), v._leaveCb = void 0, delete u.delayedLeave
						}, u.delayedLeave = x
					})
				}
				return r
			}
		}
	},
	Ll = ou;

function Hl(t, e) {
	const {
		leavingVNodes: i
	} = t;
	let n = i.get(e.type);
	return n || (n = Object.create(null), i.set(e.type, n)), n
}

function Rs(t, e, i, n) {
	const {
		appear: s,
		mode: o,
		persisted: r = !1,
		onBeforeEnter: l,
		onEnter: a,
		onAfterEnter: c,
		onEnterCancelled: u,
		onBeforeLeave: d,
		onLeave: h,
		onAfterLeave: f,
		onLeaveCancelled: p,
		onBeforeAppear: y,
		onAppear: v,
		onAfterAppear: g,
		onAppearCancelled: x
	} = e, P = String(t.key), E = Hl(i, t), R = (A, W) => {
		A && tt(A, n, 9, W)
	}, I = {
		mode: o,
		persisted: r,
		beforeEnter(A) {
			let W = l;
			if (!i.isMounted)
				if (s) W = y || l;
				else return;
			A._leaveCb && A._leaveCb(!0);
			const N = E[P];
			N && Jt(t, N) && N.el._leaveCb && N.el._leaveCb(), R(W, [A])
		},
		enter(A) {
			let W = a,
				N = c,
				le = u;
			if (!i.isMounted)
				if (s) W = v || a, N = g || c, le = x || u;
				else return;
			let G = !1;
			const F = A._enterCb = J => {
				G || (G = !0, J ? R(le, [A]) : R(N, [A]), I.delayedLeave && I.delayedLeave(), A._enterCb = void 0)
			};
			W ? (W(A, F), W.length <= 1 && F()) : F()
		},
		leave(A, W) {
			const N = String(t.key);
			if (A._enterCb && A._enterCb(!0), i.isUnmounting) return W();
			R(d, [A]);
			let le = !1;
			const G = A._leaveCb = F => {
				le || (le = !0, W(), F ? R(p, [A]) : R(f, [A]), A._leaveCb = void 0, E[N] === t && delete E[N])
			};
			E[N] = t, h ? (h(A, G), h.length <= 1 && G()) : G()
		},
		clone(A) {
			return Rs(A, e, i, n)
		}
	};
	return I
}

function cs(t) {
	if (Jn(t)) return t = ni(t), t.children = null, t
}

function Xo(t) {
	return Jn(t) ? t.children ? t.children[0] : void 0 : t
}

function Is(t, e) {
	t.shapeFlag & 6 && t.component ? Is(t.component.subTree, e) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e
}

function $l(t, e = !1, i) {
	let n = [],
		s = 0;
	for (let o = 0; o < t.length; o++) {
		let r = t[o];
		const l = i == null ? r.key : String(i) + String(r.key != null ? r.key : o);
		r.type === He ? (r.patchFlag & 128 && s++, n = n.concat($l(r.children, e, l))) : (e || r.type !== it) && n.push(l != null ? ni(r, {
			key: l
		}) : r)
	}
	if (s > 1)
		for (let o = 0; o < n.length; o++) n[o].patchFlag = -2;
	return n
}

function Mt(t) {
	return X(t) ? {
		setup: t,
		name: t.name
	} : t
}
const zn = t => !!t.type.__asyncLoader,
	Jn = t => t.type.__isKeepAlive;

function ru(t, e) {
	Bl(t, "a", e)
}

function lu(t, e) {
	Bl(t, "da", e)
}

function Bl(t, e, i = Ee) {
	const n = t.__wdc || (t.__wdc = () => {
		let s = i;
		for (; s;) {
			if (s.isDeactivated) return;
			s = s.parent
		}
		return t()
	});
	if (Qn(e, n, i), i) {
		let s = i.parent;
		for (; s && s.parent;) Jn(s.parent.vnode) && au(n, e, i, s), s = s.parent
	}
}

function au(t, e, i, n) {
	const s = Qn(e, t, n, !0);
	Nl(() => {
		ro(n[e], s)
	}, i)
}

function Qn(t, e, i = Ee, n = !1) {
	if (i) {
		const s = i[t] || (i[t] = []),
			o = e.__weh || (e.__weh = (...r) => {
				if (i.isUnmounted) return;
				_i(), vi(i);
				const l = tt(e, i, t, r);
				return ii(), Mi(), l
			});
		return n ? s.unshift(o) : s.push(o), o
	}
}
const jt = t => (e, i = Ee) => (!Zi || t === "sp") && Qn(t, e, i),
	cu = jt("bm"),
	xo = jt("m"),
	uu = jt("bu"),
	du = jt("u"),
	Vl = jt("bum"),
	Nl = jt("um"),
	hu = jt("sp"),
	fu = jt("rtg"),
	pu = jt("rtc");

function yu(t, e = Ee) {
	Qn("ec", t, e)
}
let Fs = !0;

function mu(t) {
	const e = Ul(t),
		i = t.proxy,
		n = t.ctx;
	Fs = !1, e.beforeCreate && Jo(e.beforeCreate, t, "bc");
	const {
		data: s,
		computed: o,
		methods: r,
		watch: l,
		provide: a,
		inject: c,
		created: u,
		beforeMount: d,
		mounted: h,
		beforeUpdate: f,
		updated: p,
		activated: y,
		deactivated: v,
		beforeDestroy: g,
		beforeUnmount: x,
		destroyed: P,
		unmounted: E,
		render: R,
		renderTracked: I,
		renderTriggered: A,
		errorCaptured: W,
		serverPrefetch: N,
		expose: le,
		inheritAttrs: G,
		components: F,
		directives: J,
		filters: ve
	} = e;
	if (c && vu(c, n, null, t.appContext.config.unwrapInjectedRef), r)
		for (const Q in r) {
			const ee = r[Q];
			X(ee) && (n[Q] = ee.bind(i))
		}
	if (s) {
		const Q = s.call(i, i);
		Me(Q) && (t.data = on(Q))
	}
	if (Fs = !0, o)
		for (const Q in o) {
			const ee = o[Q],
				be = X(ee) ? ee.bind(i, i) : X(ee.get) ? ee.get.bind(i, i) : at,
				xt = !X(ee) && X(ee.set) ? ee.set.bind(i) : at,
				Ce = yt({
					get: be,
					set: xt
				});
			Object.defineProperty(n, Q, {
				enumerable: !0,
				configurable: !0,
				get: () => Ce.value,
				set: Ae => Ce.value = Ae
			})
		}
	if (l)
		for (const Q in l) Wl(l[Q], n, i, Q);
	if (a) {
		const Q = X(a) ? a.call(i) : a;
		Reflect.ownKeys(Q).forEach(ee => {
			gn(ee, Q[ee])
		})
	}
	u && Jo(u, t, "c");

	function he(Q, ee) {
		K(ee) ? ee.forEach(be => Q(be.bind(i))) : ee && Q(ee.bind(i))
	}
	if (he(cu, d), he(xo, h), he(uu, f), he(du, p), he(ru, y), he(lu, v), he(yu, W), he(pu, I), he(fu, A), he(Vl, x), he(Nl, E), he(hu, N), K(le))
		if (le.length) {
			const Q = t.exposed || (t.exposed = {});
			le.forEach(ee => {
				Object.defineProperty(Q, ee, {
					get: () => i[ee],
					set: be => i[ee] = be
				})
			})
		} else t.exposed || (t.exposed = {});
	R && t.render === at && (t.render = R), G != null && (t.inheritAttrs = G), F && (t.components = F), J && (t.directives = J)
}

function vu(t, e, i = at, n = !1) {
	K(t) && (t = Ds(t));
	for (const s in t) {
		const o = t[s];
		let r;
		Me(o) ? "default" in o ? r = Ht(o.from || s, o.default, !0) : r = Ht(o.from || s) : r = Ht(o), Se(r) && n ? Object.defineProperty(e, s, {
			enumerable: !0,
			configurable: !0,
			get: () => r.value,
			set: l => r.value = l
		}) : e[s] = r
	}
}

function Jo(t, e, i) {
	tt(K(t) ? t.map(n => n.bind(e.proxy)) : t.bind(e.proxy), e, i)
}

function Wl(t, e, i, n) {
	const s = n.includes(".") ? Dl(i, n) : () => i[n];
	if (ke(t)) {
		const o = e[t];
		X(o) && bn(s, o)
	} else if (X(t)) bn(s, t.bind(i));
	else if (Me(t))
		if (K(t)) t.forEach(o => Wl(o, e, i, n));
		else {
			const o = X(t.handler) ? t.handler.bind(i) : e[t.handler];
			X(o) && bn(s, o, t)
		}
}

function Ul(t) {
	const e = t.type,
		{
			mixins: i,
			extends: n
		} = e,
		{
			mixins: s,
			optionsCache: o,
			config: {
				optionMergeStrategies: r
			}
		} = t.appContext,
		l = o.get(e);
	let a;
	return l ? a = l : !s.length && !i && !n ? a = e : (a = {}, s.length && s.forEach(c => Rn(a, c, r, !0)), Rn(a, e, r)), o.set(e, a), a
}

function Rn(t, e, i, n = !1) {
	const {
		mixins: s,
		extends: o
	} = e;
	o && Rn(t, o, i, !0), s && s.forEach(r => Rn(t, r, i, !0));
	for (const r in e)
		if (!(n && r === "expose")) {
			const l = gu[r] || i && i[r];
			t[r] = l ? l(t[r], e[r]) : e[r]
		} return t
}
const gu = {
	data: Qo,
	props: Yt,
	emits: Yt,
	methods: Yt,
	computed: Yt,
	beforeCreate: Re,
	created: Re,
	beforeMount: Re,
	mounted: Re,
	beforeUpdate: Re,
	updated: Re,
	beforeDestroy: Re,
	beforeUnmount: Re,
	destroyed: Re,
	unmounted: Re,
	activated: Re,
	deactivated: Re,
	errorCaptured: Re,
	serverPrefetch: Re,
	components: Yt,
	directives: Yt,
	watch: xu,
	provide: Qo,
	inject: bu
};

function Qo(t, e) {
	return e ? t ? function() {
		return Te(X(t) ? t.call(this, this) : t, X(e) ? e.call(this, this) : e)
	} : e : t
}

function bu(t, e) {
	return Yt(Ds(t), Ds(e))
}

function Ds(t) {
	if (K(t)) {
		const e = {};
		for (let i = 0; i < t.length; i++) e[t[i]] = t[i];
		return e
	}
	return t
}

function Re(t, e) {
	return t ? [...new Set([].concat(t, e))] : e
}

function Yt(t, e) {
	return t ? Te(Te(Object.create(null), t), e) : e
}

function xu(t, e) {
	if (!t) return e;
	if (!e) return t;
	const i = Te(Object.create(null), t);
	for (const n in e) i[n] = Re(t[n], e[n]);
	return i
}

function wu(t, e, i, n = !1) {
	const s = {},
		o = {};
	On(o, es, 1), t.propsDefaults = Object.create(null), Gl(t, e, s, o);
	for (const r in t.propsOptions[0]) r in s || (s[r] = void 0);
	i ? t.props = n ? s : Dc(s) : t.type.props ? t.props = s : t.props = o, t.attrs = o
}

function Pu(t, e, i, n) {
	const {
		props: s,
		attrs: o,
		vnode: {
			patchFlag: r
		}
	} = t, l = oe(s), [a] = t.propsOptions;
	let c = !1;
	if ((n || r > 0) && !(r & 16)) {
		if (r & 8) {
			const u = t.vnode.dynamicProps;
			for (let d = 0; d < u.length; d++) {
				let h = u[d];
				if (Yn(t.emitsOptions, h)) continue;
				const f = e[h];
				if (a)
					if (te(o, h)) f !== o[h] && (o[h] = f, c = !0);
					else {
						const p = vt(h);
						s[p] = Ls(a, l, p, f, t, !1)
					}
				else f !== o[h] && (o[h] = f, c = !0)
			}
		}
	} else {
		Gl(t, e, s, o) && (c = !0);
		let u;
		for (const d in l)(!e || !te(e, d) && ((u = Pi(d)) === d || !te(e, u))) && (a ? i && (i[d] !== void 0 || i[u] !== void 0) && (s[d] = Ls(a, l, d, void 0, t, !0)) : delete s[d]);
		if (o !== l)
			for (const d in o)(!e || !te(e, d) && !0) && (delete o[d], c = !0)
	}
	c && Pt(t, "set", "$attrs")
}

function Gl(t, e, i, n) {
	const [s, o] = t.propsOptions;
	let r = !1,
		l;
	if (e)
		for (let a in e) {
			if (vn(a)) continue;
			const c = e[a];
			let u;
			s && te(s, u = vt(a)) ? !o || !o.includes(u) ? i[u] = c : (l || (l = {}))[u] = c : Yn(t.emitsOptions, a) || (!(a in n) || c !== n[a]) && (n[a] = c, r = !0)
		}
	if (o) {
		const a = oe(i),
			c = l || pe;
		for (let u = 0; u < o.length; u++) {
			const d = o[u];
			i[d] = Ls(s, a, d, c[d], t, !te(c, d))
		}
	}
	return r
}

function Ls(t, e, i, n, s, o) {
	const r = t[i];
	if (r != null) {
		const l = te(r, "default");
		if (l && n === void 0) {
			const a = r.default;
			if (r.type !== Function && X(a)) {
				const {
					propsDefaults: c
				} = s;
				i in c ? n = c[i] : (vi(s), n = c[i] = a.call(null, e), ii())
			} else n = a
		}
		r[0] && (o && !l ? n = !1 : r[1] && (n === "" || n === Pi(i)) && (n = !0))
	}
	return n
}

function ql(t, e, i = !1) {
	const n = e.propsCache,
		s = n.get(t);
	if (s) return s;
	const o = t.props,
		r = {},
		l = [];
	let a = !1;
	if (!X(t)) {
		const u = d => {
			a = !0;
			const [h, f] = ql(d, e, !0);
			Te(r, h), f && l.push(...f)
		};
		!i && e.mixins.length && e.mixins.forEach(u), t.extends && u(t.extends), t.mixins && t.mixins.forEach(u)
	}
	if (!o && !a) return n.set(t, pi), pi;
	if (K(o))
		for (let u = 0; u < o.length; u++) {
			const d = vt(o[u]);
			Zo(d) && (r[d] = pe)
		} else if (o)
			for (const u in o) {
				const d = vt(u);
				if (Zo(d)) {
					const h = o[u],
						f = r[d] = K(h) || X(h) ? {
							type: h
						} : h;
					if (f) {
						const p = ir(Boolean, f.type),
							y = ir(String, f.type);
						f[0] = p > -1, f[1] = y < 0 || p < y, (p > -1 || te(f, "default")) && l.push(d)
					}
				}
			}
	const c = [r, l];
	return n.set(t, c), c
}

function Zo(t) {
	return t[0] !== "$"
}

function er(t) {
	const e = t && t.toString().match(/^\s*function (\w+)/);
	return e ? e[1] : t === null ? "null" : ""
}

function tr(t, e) {
	return er(t) === er(e)
}

function ir(t, e) {
	return K(e) ? e.findIndex(i => tr(i, t)) : X(e) && tr(e, t) ? 0 : -1
}
const Kl = t => t[0] === "_" || t === "$stable",
	wo = t => K(t) ? t.map(pt) : [pt(t)],
	_u = (t, e, i) => {
		const n = Ni((...s) => wo(e(...s)), i);
		return n._c = !1, n
	},
	Yl = (t, e, i) => {
		const n = t._ctx;
		for (const s in t) {
			if (Kl(s)) continue;
			const o = t[s];
			if (X(o)) e[s] = _u(s, o, n);
			else if (o != null) {
				const r = wo(o);
				e[s] = () => r
			}
		}
	},
	Xl = (t, e) => {
		const i = wo(e);
		t.slots.default = () => i
	},
	Mu = (t, e) => {
		if (t.vnode.shapeFlag & 32) {
			const i = e._;
			i ? (t.slots = oe(e), On(e, "_", i)) : Yl(e, t.slots = {})
		} else t.slots = {}, e && Xl(t, e);
		On(t.slots, es, 1)
	},
	ju = (t, e, i) => {
		const {
			vnode: n,
			slots: s
		} = t;
		let o = !0,
			r = pe;
		if (n.shapeFlag & 32) {
			const l = e._;
			l ? i && l === 1 ? o = !1 : (Te(s, e), !i && l === 1 && delete s._) : (o = !e.$stable, Yl(e, s)), r = e
		} else e && (Xl(t, e), r = {
			default: 1
		});
		if (o)
			for (const l in s) !Kl(l) && !(l in r) && delete s[l]
	};

function Wt(t, e, i, n) {
	const s = t.dirs,
		o = e && e.dirs;
	for (let r = 0; r < s.length; r++) {
		const l = s[r];
		o && (l.oldValue = o[r].value);
		let a = l.dir[n];
		a && (_i(), tt(a, i, 8, [t.el, l, t, e]), Mi())
	}
}

function Jl() {
	return {
		app: null,
		config: {
			isNativeTag: nc,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: Object.create(null),
		optionsCache: new WeakMap,
		propsCache: new WeakMap,
		emitsCache: new WeakMap
	}
}
let Eu = 0;

function Cu(t, e) {
	return function(n, s = null) {
		X(n) || (n = Object.assign({}, n)), s != null && !Me(s) && (s = null);
		const o = Jl(),
			r = new Set;
		let l = !1;
		const a = o.app = {
			_uid: Eu++,
			_component: n,
			_props: s,
			_container: null,
			_context: o,
			_instance: null,
			version: Yu,
			get config() {
				return o.config
			},
			set config(c) {},
			use(c, ...u) {
				return r.has(c) || (c && X(c.install) ? (r.add(c), c.install(a, ...u)) : X(c) && (r.add(c), c(a, ...u))), a
			},
			mixin(c) {
				return o.mixins.includes(c) || o.mixins.push(c), a
			},
			component(c, u) {
				return u ? (o.components[c] = u, a) : o.components[c]
			},
			directive(c, u) {
				return u ? (o.directives[c] = u, a) : o.directives[c]
			},
			mount(c, u, d) {
				if (!l) {
					const h = ge(n, s);
					return h.appContext = o, u && e ? e(h, c) : t(h, c, d), l = !0, a._container = c, c.__vue_app__ = a, jo(h.component) || h.component.proxy
				}
			},
			unmount() {
				l && (t(null, a._container), delete a._container.__vue_app__)
			},
			provide(c, u) {
				return o.provides[c] = u, a
			}
		};
		return a
	}
}

function Hs(t, e, i, n, s = !1) {
	if (K(t)) {
		t.forEach((h, f) => Hs(h, e && (K(e) ? e[f] : e), i, n, s));
		return
	}
	if (zn(n) && !s) return;
	const o = n.shapeFlag & 4 ? jo(n.component) || n.component.proxy : n.el,
		r = s ? null : o,
		{
			i: l,
			r: a
		} = t,
		c = e && e.r,
		u = l.refs === pe ? l.refs = {} : l.refs,
		d = l.setupState;
	if (c != null && c !== a && (ke(c) ? (u[c] = null, te(d, c) && (d[c] = null)) : Se(c) && (c.value = null)), X(a)) Lt(a, l, 12, [r, u]);
	else {
		const h = ke(a),
			f = Se(a);
		if (h || f) {
			const p = () => {
				if (t.f) {
					const y = h ? u[a] : a.value;
					s ? K(y) && ro(y, o) : K(y) ? y.includes(o) || y.push(o) : h ? (u[a] = [o], te(d, a) && (d[a] = u[a])) : (a.value = [o], t.k && (u[t.k] = a.value))
				} else h ? (u[a] = r, te(d, a) && (d[a] = r)) : Se(a) && (a.value = r, t.k && (u[t.k] = r))
			};
			r ? (p.id = -1, Le(p, i)) : p()
		}
	}
}
const Le = iu;

function Ou(t) {
	return Su(t)
}

function Su(t, e) {
	const i = cc();
	i.__VUE__ = !0;
	const {
		insert: n,
		remove: s,
		patchProp: o,
		createElement: r,
		createText: l,
		createComment: a,
		setText: c,
		setElementText: u,
		parentNode: d,
		nextSibling: h,
		setScopeId: f = at,
		cloneNode: p,
		insertStaticContent: y
	} = t, v = (m, b, w, j = null, M = null, S = null, z = !1, O = null, T = !!b.dynamicChildren) => {
		if (m === b) return;
		m && !Jt(m, b) && (j = H(m), Oe(m, M, S, !0), m = null), b.patchFlag === -2 && (T = !1, b.dynamicChildren = null);
		const {
			type: C,
			ref: $,
			shapeFlag: D
		} = b;
		switch (C) {
			case Po:
				g(m, b, w, j);
				break;
			case it:
				x(m, b, w, j);
				break;
			case us:
				m == null && P(b, w, j, z);
				break;
			case He:
				J(m, b, w, j, M, S, z, O, T);
				break;
			default:
				D & 1 ? I(m, b, w, j, M, S, z, O, T) : D & 6 ? ve(m, b, w, j, M, S, z, O, T) : (D & 64 || D & 128) && C.process(m, b, w, j, M, S, z, O, T, fe)
		}
		$ != null && M && Hs($, m && m.ref, S, b || m, !b)
	}, g = (m, b, w, j) => {
		if (m == null) n(b.el = l(b.children), w, j);
		else {
			const M = b.el = m.el;
			b.children !== m.children && c(M, b.children)
		}
	}, x = (m, b, w, j) => {
		m == null ? n(b.el = a(b.children || ""), w, j) : b.el = m.el
	}, P = (m, b, w, j) => {
		[m.el, m.anchor] = y(m.children, b, w, j, m.el, m.anchor)
	}, E = ({
		el: m,
		anchor: b
	}, w, j) => {
		let M;
		for (; m && m !== b;) M = h(m), n(m, w, j), m = M;
		n(b, w, j)
	}, R = ({
		el: m,
		anchor: b
	}) => {
		let w;
		for (; m && m !== b;) w = h(m), s(m), m = w;
		s(b)
	}, I = (m, b, w, j, M, S, z, O, T) => {
		z = z || b.type === "svg", m == null ? A(b, w, j, M, S, z, O, T) : le(m, b, M, S, z, O, T)
	}, A = (m, b, w, j, M, S, z, O) => {
		let T, C;
		const {
			type: $,
			props: D,
			shapeFlag: B,
			transition: q,
			patchFlag: se,
			dirs: me
		} = m;
		if (m.el && p !== void 0 && se === -1) T = m.el = p(m.el);
		else {
			if (T = m.el = r(m.type, S, D && D.is, D), B & 8 ? u(T, m.children) : B & 16 && N(m.children, T, null, j, M, S && $ !== "foreignObject", z, O), me && Wt(m, null, j, "created"), D) {
				for (const ye in D) ye !== "value" && !vn(ye) && o(T, ye, null, D[ye], S, m.children, j, M, k);
				"value" in D && o(T, "value", null, D.value), (C = D.onVnodeBeforeMount) && dt(C, j, m)
			}
			W(T, m, m.scopeId, z, j)
		}
		me && Wt(m, null, j, "beforeMount");
		const ce = (!M || M && !M.pendingBranch) && q && !q.persisted;
		ce && q.beforeEnter(T), n(T, b, w), ((C = D && D.onVnodeMounted) || ce || me) && Le(() => {
			C && dt(C, j, m), ce && q.enter(T), me && Wt(m, null, j, "mounted")
		}, M)
	}, W = (m, b, w, j, M) => {
		if (w && f(m, w), j)
			for (let S = 0; S < j.length; S++) f(m, j[S]);
		if (M) {
			let S = M.subTree;
			if (b === S) {
				const z = M.vnode;
				W(m, z, z.scopeId, z.slotScopeIds, M.parent)
			}
		}
	}, N = (m, b, w, j, M, S, z, O, T = 0) => {
		for (let C = T; C < m.length; C++) {
			const $ = m[C] = O ? Rt(m[C]) : pt(m[C]);
			v(null, $, b, w, j, M, S, z, O)
		}
	}, le = (m, b, w, j, M, S, z) => {
		const O = b.el = m.el;
		let {
			patchFlag: T,
			dynamicChildren: C,
			dirs: $
		} = b;
		T |= m.patchFlag & 16;
		const D = m.props || pe,
			B = b.props || pe;
		let q;
		w && Ut(w, !1), (q = B.onVnodeBeforeUpdate) && dt(q, w, b, m), $ && Wt(b, m, w, "beforeUpdate"), w && Ut(w, !0);
		const se = M && b.type !== "foreignObject";
		if (C ? G(m.dynamicChildren, C, O, w, j, se, S) : z || be(m, b, O, null, w, j, se, S, !1), T > 0) {
			if (T & 16) F(O, b, D, B, w, j, M);
			else if (T & 2 && D.class !== B.class && o(O, "class", null, B.class, M), T & 4 && o(O, "style", D.style, B.style, M), T & 8) {
				const me = b.dynamicProps;
				for (let ce = 0; ce < me.length; ce++) {
					const ye = me[ce],
						st = D[ye],
						oi = B[ye];
					(oi !== st || ye === "value") && o(O, ye, st, oi, M, m.children, w, j, k)
				}
			}
			T & 1 && m.children !== b.children && u(O, b.children)
		} else !z && C == null && F(O, b, D, B, w, j, M);
		((q = B.onVnodeUpdated) || $) && Le(() => {
			q && dt(q, w, b, m), $ && Wt(b, m, w, "updated")
		}, j)
	}, G = (m, b, w, j, M, S, z) => {
		for (let O = 0; O < b.length; O++) {
			const T = m[O],
				C = b[O],
				$ = T.el && (T.type === He || !Jt(T, C) || T.shapeFlag & 70) ? d(T.el) : w;
			v(T, C, $, null, j, M, S, z, !0)
		}
	}, F = (m, b, w, j, M, S, z) => {
		if (w !== j) {
			for (const O in j) {
				if (vn(O)) continue;
				const T = j[O],
					C = w[O];
				T !== C && O !== "value" && o(m, O, C, T, z, b.children, M, S, k)
			}
			if (w !== pe)
				for (const O in w) !vn(O) && !(O in j) && o(m, O, w[O], null, z, b.children, M, S, k);
			"value" in j && o(m, "value", w.value, j.value)
		}
	}, J = (m, b, w, j, M, S, z, O, T) => {
		const C = b.el = m ? m.el : l(""),
			$ = b.anchor = m ? m.anchor : l("");
		let {
			patchFlag: D,
			dynamicChildren: B,
			slotScopeIds: q
		} = b;
		q && (O = O ? O.concat(q) : q), m == null ? (n(C, w, j), n($, w, j), N(b.children, w, $, M, S, z, O, T)) : D > 0 && D & 64 && B && m.dynamicChildren ? (G(m.dynamicChildren, B, w, M, S, z, O), (b.key != null || M && b === M.subTree) && Ql(m, b, !0)) : be(m, b, w, $, M, S, z, O, T)
	}, ve = (m, b, w, j, M, S, z, O, T) => {
		b.slotScopeIds = O, m == null ? b.shapeFlag & 512 ? M.ctx.activate(b, w, j, z, T) : Ke(b, w, j, M, S, z, T) : he(m, b, T)
	}, Ke = (m, b, w, j, M, S, z) => {
		const O = m.component = Bu(m, j, M);
		if (Jn(m) && (O.ctx.renderer = fe), Nu(O), O.asyncDep) {
			if (M && M.registerDep(O, Q), !m.el) {
				const T = O.subTree = ge(it);
				x(null, T, b, w)
			}
			return
		}
		Q(O, m, b, w, M, S, z)
	}, he = (m, b, w) => {
		const j = b.component = m.component;
		if (Zc(m, b, w))
			if (j.asyncDep && !j.asyncResolved) {
				ee(j, b, w);
				return
			} else j.next = b, Uc(j.update), j.update();
		else b.component = m.component, b.el = m.el, j.vnode = b
	}, Q = (m, b, w, j, M, S, z) => {
		const O = () => {
				if (m.isMounted) {
					let {
						next: $,
						bu: D,
						u: B,
						parent: q,
						vnode: se
					} = m, me = $, ce;
					Ut(m, !1), $ ? ($.el = se.el, ee(m, $, z)) : $ = se, D && ls(D), (ce = $.props && $.props.onVnodeBeforeUpdate) && dt(ce, q, $, se), Ut(m, !0);
					const ye = as(m),
						st = m.subTree;
					m.subTree = ye, v(st, ye, d(st.el), H(st), m, M, S), $.el = ye.el, me === null && eu(m, ye.el), B && Le(B, M), (ce = $.props && $.props.onVnodeUpdated) && Le(() => dt(ce, q, $, se), M)
				} else {
					let $;
					const {
						el: D,
						props: B
					} = b, {
						bm: q,
						m: se,
						parent: me
					} = m, ce = zn(b);
					if (Ut(m, !1), q && ls(q), !ce && ($ = B && B.onVnodeBeforeMount) && dt($, me, b), Ut(m, !0), D && Y) {
						const ye = () => {
							m.subTree = as(m), Y(D, m.subTree, m, M, null)
						};
						ce ? b.type.__asyncLoader().then(() => !m.isUnmounted && ye()) : ye()
					} else {
						const ye = m.subTree = as(m);
						v(null, ye, w, j, m, M, S), b.el = ye.el
					}
					if (se && Le(se, M), !ce && ($ = B && B.onVnodeMounted)) {
						const ye = b;
						Le(() => dt($, me, ye), M)
					}
					b.shapeFlag & 256 && m.a && Le(m.a, M), m.isMounted = !0, b = w = j = null
				}
			},
			T = m.effect = new uo(O, () => Tl(m.update), m.scope),
			C = m.update = T.run.bind(T);
		C.id = m.uid, Ut(m, !0), C()
	}, ee = (m, b, w) => {
		b.component = m;
		const j = m.vnode.props;
		m.vnode = b, m.next = null, Pu(m, b.props, j, w), ju(m, b.children, w), _i(), bo(void 0, m.update), Mi()
	}, be = (m, b, w, j, M, S, z, O, T = !1) => {
		const C = m && m.children,
			$ = m ? m.shapeFlag : 0,
			D = b.children,
			{
				patchFlag: B,
				shapeFlag: q
			} = b;
		if (B > 0) {
			if (B & 128) {
				Ce(C, D, w, j, M, S, z, O, T);
				return
			} else if (B & 256) {
				xt(C, D, w, j, M, S, z, O, T);
				return
			}
		}
		q & 8 ? ($ & 16 && k(C, M, S), D !== C && u(w, D)) : $ & 16 ? q & 16 ? Ce(C, D, w, j, M, S, z, O, T) : k(C, M, S, !0) : ($ & 8 && u(w, ""), q & 16 && N(D, w, j, M, S, z, O, T))
	}, xt = (m, b, w, j, M, S, z, O, T) => {
		m = m || pi, b = b || pi;
		const C = m.length,
			$ = b.length,
			D = Math.min(C, $);
		let B;
		for (B = 0; B < D; B++) {
			const q = b[B] = T ? Rt(b[B]) : pt(b[B]);
			v(m[B], q, w, null, M, S, z, O, T)
		}
		C > $ ? k(m, M, S, !0, !1, D) : N(b, w, j, M, S, z, O, T, D)
	}, Ce = (m, b, w, j, M, S, z, O, T) => {
		let C = 0;
		const $ = b.length;
		let D = m.length - 1,
			B = $ - 1;
		for (; C <= D && C <= B;) {
			const q = m[C],
				se = b[C] = T ? Rt(b[C]) : pt(b[C]);
			if (Jt(q, se)) v(q, se, w, null, M, S, z, O, T);
			else break;
			C++
		}
		for (; C <= D && C <= B;) {
			const q = m[D],
				se = b[B] = T ? Rt(b[B]) : pt(b[B]);
			if (Jt(q, se)) v(q, se, w, null, M, S, z, O, T);
			else break;
			D--, B--
		}
		if (C > D) {
			if (C <= B) {
				const q = B + 1,
					se = q < $ ? b[q].el : j;
				for (; C <= B;) v(null, b[C] = T ? Rt(b[C]) : pt(b[C]), w, se, M, S, z, O, T), C++
			}
		} else if (C > B)
			for (; C <= D;) Oe(m[C], M, S, !0), C++;
		else {
			const q = C,
				se = C,
				me = new Map;
			for (C = se; C <= B; C++) {
				const We = b[C] = T ? Rt(b[C]) : pt(b[C]);
				We.key != null && me.set(We.key, C)
			}
			let ce, ye = 0;
			const st = B - se + 1;
			let oi = !1,
				Fo = 0;
			const Ci = new Array(st);
			for (C = 0; C < st; C++) Ci[C] = 0;
			for (C = q; C <= D; C++) {
				const We = m[C];
				if (ye >= st) {
					Oe(We, M, S, !0);
					continue
				}
				let ut;
				if (We.key != null) ut = me.get(We.key);
				else
					for (ce = se; ce <= B; ce++)
						if (Ci[ce - se] === 0 && Jt(We, b[ce])) {
							ut = ce;
							break
						} ut === void 0 ? Oe(We, M, S, !0) : (Ci[ut - se] = C + 1, ut >= Fo ? Fo = ut : oi = !0, v(We, b[ut], w, null, M, S, z, O, T), ye++)
			}
			const Do = oi ? Tu(Ci) : pi;
			for (ce = Do.length - 1, C = st - 1; C >= 0; C--) {
				const We = se + C,
					ut = b[We],
					Lo = We + 1 < $ ? b[We + 1].el : j;
				Ci[C] === 0 ? v(null, ut, w, Lo, M, S, z, O, T) : oi && (ce < 0 || C !== Do[ce] ? Ae(ut, w, Lo, 2) : ce--)
			}
		}
	}, Ae = (m, b, w, j, M = null) => {
		const {
			el: S,
			type: z,
			transition: O,
			children: T,
			shapeFlag: C
		} = m;
		if (C & 6) {
			Ae(m.component.subTree, b, w, j);
			return
		}
		if (C & 128) {
			m.suspense.move(b, w, j);
			return
		}
		if (C & 64) {
			z.move(m, b, w, fe);
			return
		}
		if (z === He) {
			n(S, b, w);
			for (let D = 0; D < T.length; D++) Ae(T[D], b, w, j);
			n(m.anchor, b, w);
			return
		}
		if (z === us) {
			E(m, b, w);
			return
		}
		if (j !== 2 && C & 1 && O)
			if (j === 0) O.beforeEnter(S), n(S, b, w), Le(() => O.enter(S), M);
			else {
				const {
					leave: D,
					delayLeave: B,
					afterLeave: q
				} = O, se = () => n(S, b, w), me = () => {
					D(S, () => {
						se(), q && q()
					})
				};
				B ? B(S, se, me) : me()
			}
		else n(S, b, w)
	}, Oe = (m, b, w, j = !1, M = !1) => {
		const {
			type: S,
			props: z,
			ref: O,
			children: T,
			dynamicChildren: C,
			shapeFlag: $,
			patchFlag: D,
			dirs: B
		} = m;
		if (O != null && Hs(O, null, w, m, !0), $ & 256) {
			b.ctx.deactivate(m);
			return
		}
		const q = $ & 1 && B,
			se = !zn(m);
		let me;
		if (se && (me = z && z.onVnodeBeforeUnmount) && dt(me, b, m), $ & 6) L(m.component, w, j);
		else {
			if ($ & 128) {
				m.suspense.unmount(w, j);
				return
			}
			q && Wt(m, null, b, "beforeUnmount"), $ & 64 ? m.type.remove(m, b, w, M, fe, j) : C && (S !== He || D > 0 && D & 64) ? k(C, b, w, !1, !0) : (S === He && D & 384 || !M && $ & 16) && k(T, b, w), j && Ye(m)
		}(se && (me = z && z.onVnodeUnmounted) || q) && Le(() => {
			me && dt(me, b, m), q && Wt(m, null, b, "unmounted")
		}, w)
	}, Ye = m => {
		const {
			type: b,
			el: w,
			anchor: j,
			transition: M
		} = m;
		if (b === He) {
			_(w, j);
			return
		}
		if (b === us) {
			R(m);
			return
		}
		const S = () => {
			s(w), M && !M.persisted && M.afterLeave && M.afterLeave()
		};
		if (m.shapeFlag & 1 && M && !M.persisted) {
			const {
				leave: z,
				delayLeave: O
			} = M, T = () => z(w, S);
			O ? O(m.el, S, T) : T()
		} else S()
	}, _ = (m, b) => {
		let w;
		for (; m !== b;) w = h(m), s(m), m = w;
		s(b)
	}, L = (m, b, w) => {
		const {
			bum: j,
			scope: M,
			update: S,
			subTree: z,
			um: O
		} = m;
		j && ls(j), M.stop(), S && (S.active = !1, Oe(z, m, b, w)), O && Le(O, b), Le(() => {
			m.isUnmounted = !0
		}, b), b && b.pendingBranch && !b.isUnmounted && m.asyncDep && !m.asyncResolved && m.suspenseId === b.pendingId && (b.deps--, b.deps === 0 && b.resolve())
	}, k = (m, b, w, j = !1, M = !1, S = 0) => {
		for (let z = S; z < m.length; z++) Oe(m[z], b, w, j, M)
	}, H = m => m.shapeFlag & 6 ? H(m.component.subTree) : m.shapeFlag & 128 ? m.suspense.next() : h(m.anchor || m.el), ae = (m, b, w) => {
		m == null ? b._vnode && Oe(b._vnode, null, null, !0) : v(b._vnode || null, m, b, null, null, null, w), zl(), b._vnode = m
	}, fe = {
		p: v,
		um: Oe,
		m: Ae,
		r: Ye,
		mt: Ke,
		mc: N,
		pc: be,
		pbc: G,
		n: H,
		o: t
	};
	let Z, Y;
	return e && ([Z, Y] = e(fe)), {
		render: ae,
		hydrate: Z,
		createApp: Cu(ae, Z)
	}
}

function Ut({
	effect: t,
	update: e
}, i) {
	t.allowRecurse = e.allowRecurse = i
}

function Ql(t, e, i = !1) {
	const n = t.children,
		s = e.children;
	if (K(n) && K(s))
		for (let o = 0; o < n.length; o++) {
			const r = n[o];
			let l = s[o];
			l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[o] = Rt(s[o]), l.el = r.el), i || Ql(r, l))
		}
}

function Tu(t) {
	const e = t.slice(),
		i = [0];
	let n, s, o, r, l;
	const a = t.length;
	for (n = 0; n < a; n++) {
		const c = t[n];
		if (c !== 0) {
			if (s = i[i.length - 1], t[s] < c) {
				e[n] = s, i.push(n);
				continue
			}
			for (o = 0, r = i.length - 1; o < r;) l = o + r >> 1, t[i[l]] < c ? o = l + 1 : r = l;
			c < t[i[o]] && (o > 0 && (e[n] = i[o - 1]), i[o] = n)
		}
	}
	for (o = i.length, r = i[o - 1]; o-- > 0;) i[o] = r, r = e[r];
	return i
}
const ku = t => t.__isTeleport,
	Zl = "components";

function $s(t, e) {
	return zu(Zl, t, !0, e) || t
}
const Au = Symbol();

function zu(t, e, i = !0, n = !1) {
	const s = Fe || Ee;
	if (s) {
		const o = s.type;
		if (t === Zl) {
			const l = qu(o);
			if (l && (l === e || l === vt(e) || l === Gn(vt(e)))) return o
		}
		const r = nr(s[t] || o[t], e) || nr(s.appContext[t], e);
		return !r && n ? o : r
	}
}

function nr(t, e) {
	return t && (t[e] || t[vt(e)] || t[Gn(vt(e))])
}
const He = Symbol(void 0),
	Po = Symbol(void 0),
	it = Symbol(void 0),
	us = Symbol(void 0),
	Wi = [];
let ti = null;

function $e(t = !1) {
	Wi.push(ti = t ? null : [])
}

function Ru() {
	Wi.pop(), ti = Wi[Wi.length - 1] || null
}
let In = 1;

function sr(t) {
	In += t
}

function ea(t) {
	return t.dynamicChildren = In > 0 ? ti || pi : null, Ru(), In > 0 && ti && ti.push(t), t
}

function gt(t, e, i, n, s, o) {
	return ea(Ve(t, e, i, n, s, o, !0))
}

function Zn(t, e, i, n, s) {
	return ea(ge(t, e, i, n, s, !0))
}

function Fn(t) {
	return t ? t.__v_isVNode === !0 : !1
}

function Jt(t, e) {
	return t.type === e.type && t.key === e.key
}
const es = "__vInternal",
	ta = ({
		key: t
	}) => t != null ? t : null,
	xn = ({
		ref: t,
		ref_key: e,
		ref_for: i
	}) => t != null ? ke(t) || Se(t) || X(t) ? {
		i: Fe,
		r: t,
		k: e,
		f: !!i
	} : t : null;

function Ve(t, e = null, i = null, n = 0, s = null, o = t === He ? 0 : 1, r = !1, l = !1) {
	const a = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: t,
		props: e,
		key: e && ta(e),
		ref: e && xn(e),
		scopeId: Xn,
		slotScopeIds: null,
		children: i,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: o,
		patchFlag: n,
		dynamicProps: s,
		dynamicChildren: null,
		appContext: null
	};
	return l ? (_o(a, i), o & 128 && t.normalize(a)) : i && (a.shapeFlag |= ke(i) ? 8 : 16), In > 0 && !r && ti && (a.patchFlag > 0 || o & 6) && a.patchFlag !== 32 && ti.push(a), a
}
const ge = Iu;

function Iu(t, e = null, i = null, n = 0, s = null, o = !1) {
	if ((!t || t === Au) && (t = it), Fn(t)) {
		const l = ni(t, e, !0);
		return i && _o(l, i), l
	}
	if (Ku(t) && (t = t.__vccOpts), e) {
		e = Fu(e);
		let {
			class: l,
			style: a
		} = e;
		l && !ke(l) && (e.class = Vn(l)), Me(a) && (Ml(a) && !K(a) && (a = Te({}, a)), e.style = no(a))
	}
	const r = ke(t) ? 1 : tu(t) ? 128 : ku(t) ? 64 : Me(t) ? 4 : X(t) ? 2 : 0;
	return Ve(t, e, i, n, s, r, o, !0)
}

function Fu(t) {
	return t ? Ml(t) || es in t ? Te({}, t) : t : null
}

function ni(t, e, i = !1) {
	const {
		props: n,
		ref: s,
		patchFlag: o,
		children: r
	} = t, l = e ? Du(n || {}, e) : n;
	return {
		__v_isVNode: !0,
		__v_skip: !0,
		type: t.type,
		props: l,
		key: l && ta(l),
		ref: e && e.ref ? i && s ? K(s) ? s.concat(xn(e)) : [s, xn(e)] : xn(e) : s,
		scopeId: t.scopeId,
		slotScopeIds: t.slotScopeIds,
		children: r,
		target: t.target,
		targetAnchor: t.targetAnchor,
		staticCount: t.staticCount,
		shapeFlag: t.shapeFlag,
		patchFlag: e && t.type !== He ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: t.dynamicProps,
		dynamicChildren: t.dynamicChildren,
		appContext: t.appContext,
		dirs: t.dirs,
		transition: t.transition,
		component: t.component,
		suspense: t.suspense,
		ssContent: t.ssContent && ni(t.ssContent),
		ssFallback: t.ssFallback && ni(t.ssFallback),
		el: t.el,
		anchor: t.anchor
	}
}

function ia(t = " ", e = 0) {
	return ge(Po, null, t, e)
}

function Dn(t = "", e = !1) {
	return e ? ($e(), Zn(it, null, t)) : ge(it, null, t)
}

function pt(t) {
	return t == null || typeof t == "boolean" ? ge(it) : K(t) ? ge(He, null, t.slice()) : typeof t == "object" ? Rt(t) : ge(Po, null, String(t))
}

function Rt(t) {
	return t.el === null || t.memo ? t : ni(t)
}

function _o(t, e) {
	let i = 0;
	const {
		shapeFlag: n
	} = t;
	if (e == null) e = null;
	else if (K(e)) i = 16;
	else if (typeof e == "object")
		if (n & 65) {
			const s = e.default;
			s && (s._c && (s._d = !1), _o(t, s()), s._c && (s._d = !0));
			return
		} else {
			i = 32;
			const s = e._;
			!s && !(es in e) ? e._ctx = Fe : s === 3 && Fe && (Fe.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024))
		}
	else X(e) ? (e = {
		default: e,
		_ctx: Fe
	}, i = 32) : (e = String(e), n & 64 ? (i = 16, e = [ia(e)]) : i = 8);
	t.children = e, t.shapeFlag |= i
}

function Du(...t) {
	const e = {};
	for (let i = 0; i < t.length; i++) {
		const n = t[i];
		for (const s in n)
			if (s === "class") e.class !== n.class && (e.class = Vn([e.class, n.class]));
			else if (s === "style") e.style = no([e.style, n.style]);
		else if (Nn(s)) {
			const o = e[s],
				r = n[s];
			r && o !== r && !(K(o) && o.includes(r)) && (e[s] = o ? [].concat(o, r) : r)
		} else s !== "" && (e[s] = n[s])
	}
	return e
}

function dt(t, e, i, n = null) {
	tt(t, e, 7, [i, n])
}

function Mo(t, e, i = {}, n, s) {
	if (Fe.isCE || Fe.parent && zn(Fe.parent) && Fe.parent.isCE) return ge("slot", e === "default" ? null : {
		name: e
	}, n && n());
	let o = t[e];
	o && o._c && (o._d = !1), $e();
	const r = o && na(o(i)),
		l = Zn(He, {
			key: i.key || `_${e}`
		}, r || (n ? n() : []), r && t._ === 1 ? 64 : -2);
	return !s && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), o && o._c && (o._d = !0), l
}

function na(t) {
	return t.some(e => Fn(e) ? !(e.type === it || e.type === He && !na(e.children)) : !0) ? t : null
}
const Bs = t => t ? sa(t) ? jo(t) || t.proxy : Bs(t.parent) : null,
	Ln = Te(Object.create(null), {
		$: t => t,
		$el: t => t.vnode.el,
		$data: t => t.data,
		$props: t => t.props,
		$attrs: t => t.attrs,
		$slots: t => t.slots,
		$refs: t => t.refs,
		$parent: t => Bs(t.parent),
		$root: t => Bs(t.root),
		$emit: t => t.emit,
		$options: t => Ul(t),
		$forceUpdate: t => () => Tl(t.update),
		$nextTick: t => go.bind(t.proxy),
		$watch: t => nu.bind(t)
	}),
	Lu = {
		get({
			_: t
		}, e) {
			const {
				ctx: i,
				setupState: n,
				data: s,
				props: o,
				accessCache: r,
				type: l,
				appContext: a
			} = t;
			let c;
			if (e[0] !== "$") {
				const f = r[e];
				if (f !== void 0) switch (f) {
					case 1:
						return n[e];
					case 2:
						return s[e];
					case 4:
						return i[e];
					case 3:
						return o[e]
				} else {
					if (n !== pe && te(n, e)) return r[e] = 1, n[e];
					if (s !== pe && te(s, e)) return r[e] = 2, s[e];
					if ((c = t.propsOptions[0]) && te(c, e)) return r[e] = 3, o[e];
					if (i !== pe && te(i, e)) return r[e] = 4, i[e];
					Fs && (r[e] = 0)
				}
			}
			const u = Ln[e];
			let d, h;
			if (u) return e === "$attrs" && qe(t, "get", e), u(t);
			if ((d = l.__cssModules) && (d = d[e])) return d;
			if (i !== pe && te(i, e)) return r[e] = 4, i[e];
			if (h = a.config.globalProperties, te(h, e)) return h[e]
		},
		set({
			_: t
		}, e, i) {
			const {
				data: n,
				setupState: s,
				ctx: o
			} = t;
			return s !== pe && te(s, e) ? (s[e] = i, !0) : n !== pe && te(n, e) ? (n[e] = i, !0) : te(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (o[e] = i, !0)
		},
		has({
			_: {
				data: t,
				setupState: e,
				accessCache: i,
				ctx: n,
				appContext: s,
				propsOptions: o
			}
		}, r) {
			let l;
			return !!i[r] || t !== pe && te(t, r) || e !== pe && te(e, r) || (l = o[0]) && te(l, r) || te(n, r) || te(Ln, r) || te(s.config.globalProperties, r)
		},
		defineProperty(t, e, i) {
			return i.get != null ? t._.accessCache[e] = 0 : te(i, "value") && this.set(t, e, i.value, null), Reflect.defineProperty(t, e, i)
		}
	},
	Hu = Jl();
let $u = 0;

function Bu(t, e, i) {
	const n = t.type,
		s = (e ? e.appContext : t.appContext) || Hu,
		o = {
			uid: $u++,
			vnode: t,
			type: n,
			parent: e,
			appContext: s,
			root: null,
			next: null,
			subTree: null,
			effect: null,
			update: null,
			scope: new uc(!0),
			render: null,
			proxy: null,
			exposed: null,
			exposeProxy: null,
			withProxy: null,
			provides: e ? e.provides : Object.create(s.provides),
			accessCache: null,
			renderCache: [],
			components: null,
			directives: null,
			propsOptions: ql(n, s),
			emitsOptions: Il(n, s),
			emit: null,
			emitted: null,
			propsDefaults: pe,
			inheritAttrs: n.inheritAttrs,
			ctx: pe,
			data: pe,
			props: pe,
			attrs: pe,
			slots: pe,
			refs: pe,
			setupState: pe,
			setupContext: null,
			suspense: i,
			suspenseId: i ? i.pendingId : 0,
			asyncDep: null,
			asyncResolved: !1,
			isMounted: !1,
			isUnmounted: !1,
			isDeactivated: !1,
			bc: null,
			c: null,
			bm: null,
			m: null,
			bu: null,
			u: null,
			um: null,
			bum: null,
			da: null,
			a: null,
			rtg: null,
			rtc: null,
			ec: null,
			sp: null
		};
	return o.ctx = {
		_: o
	}, o.root = e ? e.root : o, o.emit = Kc.bind(null, o), t.ce && t.ce(o), o
}
let Ee = null;
const Vu = () => Ee || Fe,
	vi = t => {
		Ee = t, t.scope.on()
	},
	ii = () => {
		Ee && Ee.scope.off(), Ee = null
	};

function sa(t) {
	return t.vnode.shapeFlag & 4
}
let Zi = !1;

function Nu(t, e = !1) {
	Zi = e;
	const {
		props: i,
		children: n
	} = t.vnode, s = sa(t);
	wu(t, i, s, e), Mu(t, n);
	const o = s ? Wu(t, e) : void 0;
	return Zi = !1, o
}

function Wu(t, e) {
	const i = t.type;
	t.accessCache = Object.create(null), t.proxy = jl(new Proxy(t.ctx, Lu));
	const {
		setup: n
	} = i;
	if (n) {
		const s = t.setupContext = n.length > 1 ? Gu(t) : null;
		vi(t), _i();
		const o = Lt(n, t, 0, [t.props, s]);
		if (Mi(), ii(), al(o)) {
			if (o.then(ii, ii), e) return o.then(r => {
				or(t, r, e)
			}).catch(r => {
				Kn(r, t, 0)
			});
			t.asyncDep = o
		} else or(t, o, e)
	} else oa(t, e)
}

function or(t, e, i) {
	X(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Me(e) && (t.setupState = Tn(e)), oa(t, i)
}
let rr;

function oa(t, e, i) {
	const n = t.type;
	if (!t.render) {
		if (!e && rr && !n.render) {
			const s = n.template;
			if (s) {
				const {
					isCustomElement: o,
					compilerOptions: r
				} = t.appContext.config, {
					delimiters: l,
					compilerOptions: a
				} = n, c = Te(Te({
					isCustomElement: o,
					delimiters: l
				}, r), a);
				n.render = rr(s, c)
			}
		}
		t.render = n.render || at
	}
	vi(t), _i(), mu(t), Mi(), ii()
}

function Uu(t) {
	return new Proxy(t.attrs, {
		get(e, i) {
			return qe(t, "get", "$attrs"), e[i]
		}
	})
}

function Gu(t) {
	const e = n => {
		t.exposed = n || {}
	};
	let i;
	return {
		get attrs() {
			return i || (i = Uu(t))
		},
		slots: t.slots,
		emit: t.emit,
		expose: e
	}
}

function jo(t) {
	if (t.exposed) return t.exposeProxy || (t.exposeProxy = new Proxy(Tn(jl(t.exposed)), {
		get(e, i) {
			if (i in e) return e[i];
			if (i in Ln) return Ln[i](t)
		}
	}))
}

function qu(t) {
	return X(t) && t.displayName || t.name
}

function Ku(t) {
	return X(t) && "__vccOpts" in t
}
const yt = (t, e) => Vc(t, e, Zi);

function en(t, e, i) {
	const n = arguments.length;
	return n === 2 ? Me(e) && !K(e) ? Fn(e) ? ge(t, null, [e]) : ge(t, e) : ge(t, null, e) : (n > 3 ? i = Array.prototype.slice.call(arguments, 2) : n === 3 && Fn(i) && (i = [i]), ge(t, e, i))
}
const Yu = "3.2.33",
	Xu = "http://www.w3.org/2000/svg",
	Qt = typeof document != "undefined" ? document : null,
	lr = Qt && Qt.createElement("template"),
	Ju = {
		insert: (t, e, i) => {
			e.insertBefore(t, i || null)
		},
		remove: t => {
			const e = t.parentNode;
			e && e.removeChild(t)
		},
		createElement: (t, e, i, n) => {
			const s = e ? Qt.createElementNS(Xu, t) : Qt.createElement(t, i ? {
				is: i
			} : void 0);
			return t === "select" && n && n.multiple != null && s.setAttribute("multiple", n.multiple), s
		},
		createText: t => Qt.createTextNode(t),
		createComment: t => Qt.createComment(t),
		setText: (t, e) => {
			t.nodeValue = e
		},
		setElementText: (t, e) => {
			t.textContent = e
		},
		parentNode: t => t.parentNode,
		nextSibling: t => t.nextSibling,
		querySelector: t => Qt.querySelector(t),
		setScopeId(t, e) {
			t.setAttribute(e, "")
		},
		cloneNode(t) {
			const e = t.cloneNode(!0);
			return "_value" in t && (e._value = t._value), e
		},
		insertStaticContent(t, e, i, n, s, o) {
			const r = i ? i.previousSibling : e.lastChild;
			if (s && (s === o || s.nextSibling))
				for (; e.insertBefore(s.cloneNode(!0), i), !(s === o || !(s = s.nextSibling)););
			else {
				lr.innerHTML = n ? `<svg>${t}</svg>` : t;
				const l = lr.content;
				if (n) {
					const a = l.firstChild;
					for (; a.firstChild;) l.appendChild(a.firstChild);
					l.removeChild(a)
				}
				e.insertBefore(l, i)
			}
			return [r ? r.nextSibling : e.firstChild, i ? i.previousSibling : e.lastChild]
		}
	};

function Qu(t, e, i) {
	const n = t._vtc;
	n && (e = (e ? [e, ...n] : [...n]).join(" ")), e == null ? t.removeAttribute("class") : i ? t.setAttribute("class", e) : t.className = e
}

function Zu(t, e, i) {
	const n = t.style,
		s = ke(i);
	if (i && !s) {
		for (const o in i) Vs(n, o, i[o]);
		if (e && !ke(e))
			for (const o in e) i[o] == null && Vs(n, o, "")
	} else {
		const o = n.display;
		s ? e !== i && (n.cssText = i) : e && t.removeAttribute("style"), "_vod" in t && (n.display = o)
	}
}
const ar = /\s*!important$/;

function Vs(t, e, i) {
	if (K(i)) i.forEach(n => Vs(t, e, n));
	else if (i == null && (i = ""), e.startsWith("--")) t.setProperty(e, i);
	else {
		const n = ed(t, e);
		ar.test(i) ? t.setProperty(Pi(n), i.replace(ar, ""), "important") : t[n] = i
	}
}
const cr = ["Webkit", "Moz", "ms"],
	ds = {};

function ed(t, e) {
	const i = ds[e];
	if (i) return i;
	let n = vt(e);
	if (n !== "filter" && n in t) return ds[e] = n;
	n = Gn(n);
	for (let s = 0; s < cr.length; s++) {
		const o = cr[s] + n;
		if (o in t) return ds[e] = o
	}
	return e
}
const ur = "http://www.w3.org/1999/xlink";

function td(t, e, i, n, s) {
	if (n && e.startsWith("xlink:")) i == null ? t.removeAttributeNS(ur, e.slice(6, e.length)) : t.setAttributeNS(ur, e, i);
	else {
		const o = Za(e);
		i == null || o && !ol(i) ? t.removeAttribute(e) : t.setAttribute(e, o ? "" : i)
	}
}

function id(t, e, i, n, s, o, r) {
	if (e === "innerHTML" || e === "textContent") {
		n && r(n, s, o), t[e] = i == null ? "" : i;
		return
	}
	if (e === "value" && t.tagName !== "PROGRESS" && !t.tagName.includes("-")) {
		t._value = i;
		const a = i == null ? "" : i;
		(t.value !== a || t.tagName === "OPTION") && (t.value = a), i == null && t.removeAttribute(e);
		return
	}
	let l = !1;
	if (i === "" || i == null) {
		const a = typeof t[e];
		a === "boolean" ? i = ol(i) : i == null && a === "string" ? (i = "", l = !0) : a === "number" && (i = 0, l = !0)
	}
	try {
		t[e] = i
	} catch {}
	l && t.removeAttribute(e)
}
const [ra, nd] = (() => {
	let t = Date.now,
		e = !1;
	if (typeof window != "undefined") {
		Date.now() > document.createEvent("Event").timeStamp && (t = () => performance.now());
		const i = navigator.userAgent.match(/firefox\/(\d+)/i);
		e = !!(i && Number(i[1]) <= 53)
	}
	return [t, e]
})();
let Ns = 0;
const sd = Promise.resolve(),
	od = () => {
		Ns = 0
	},
	rd = () => Ns || (sd.then(od), Ns = ra());

function ld(t, e, i, n) {
	t.addEventListener(e, i, n)
}

function ad(t, e, i, n) {
	t.removeEventListener(e, i, n)
}

function cd(t, e, i, n, s = null) {
	const o = t._vei || (t._vei = {}),
		r = o[e];
	if (n && r) r.value = n;
	else {
		const [l, a] = ud(e);
		if (n) {
			const c = o[e] = dd(n, s);
			ld(t, l, c, a)
		} else r && (ad(t, l, r, a), o[e] = void 0)
	}
}
const dr = /(?:Once|Passive|Capture)$/;

function ud(t) {
	let e;
	if (dr.test(t)) {
		e = {};
		let i;
		for (; i = t.match(dr);) t = t.slice(0, t.length - i[0].length), e[i[0].toLowerCase()] = !0
	}
	return [Pi(t.slice(2)), e]
}

function dd(t, e) {
	const i = n => {
		const s = n.timeStamp || ra();
		(nd || s >= i.attached - 1) && tt(hd(n, i.value), e, 5, [n])
	};
	return i.value = t, i.attached = rd(), i
}

function hd(t, e) {
	if (K(e)) {
		const i = t.stopImmediatePropagation;
		return t.stopImmediatePropagation = () => {
			i.call(t), t._stopped = !0
		}, e.map(n => s => !s._stopped && n && n(s))
	} else return e
}
const hr = /^on[a-z]/,
	fd = (t, e, i, n, s = !1, o, r, l, a) => {
		e === "class" ? Qu(t, n, s) : e === "style" ? Zu(t, i, n) : Nn(e) ? oo(e) || cd(t, e, i, n, r) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : pd(t, e, n, s)) ? id(t, e, n, o, r, l, a) : (e === "true-value" ? t._trueValue = n : e === "false-value" && (t._falseValue = n), td(t, e, n, s))
	};

function pd(t, e, i, n) {
	return n ? !!(e === "innerHTML" || e === "textContent" || e in t && hr.test(e) && X(i)) : e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA" || hr.test(e) && ke(i) ? !1 : e in t
}
const Ct = "transition",
	Oi = "animation",
	ts = (t, {
		slots: e
	}) => en(Ll, yd(t), e);
ts.displayName = "Transition";
const la = {
	name: String,
	type: String,
	css: {
		type: Boolean,
		default: !0
	},
	duration: [String, Number, Object],
	enterFromClass: String,
	enterActiveClass: String,
	enterToClass: String,
	appearFromClass: String,
	appearActiveClass: String,
	appearToClass: String,
	leaveFromClass: String,
	leaveActiveClass: String,
	leaveToClass: String
};
ts.props = Te({}, Ll.props, la);
const Gt = (t, e = []) => {
		K(t) ? t.forEach(i => i(...e)) : t && t(...e)
	},
	fr = t => t ? K(t) ? t.some(e => e.length > 1) : t.length > 1 : !1;

function yd(t) {
	const e = {};
	for (const F in t) F in la || (e[F] = t[F]);
	if (t.css === !1) return e;
	const {
		name: i = "v",
		type: n,
		duration: s,
		enterFromClass: o = `${i}-enter-from`,
		enterActiveClass: r = `${i}-enter-active`,
		enterToClass: l = `${i}-enter-to`,
		appearFromClass: a = o,
		appearActiveClass: c = r,
		appearToClass: u = l,
		leaveFromClass: d = `${i}-leave-from`,
		leaveActiveClass: h = `${i}-leave-active`,
		leaveToClass: f = `${i}-leave-to`
	} = t, p = md(s), y = p && p[0], v = p && p[1], {
		onBeforeEnter: g,
		onEnter: x,
		onEnterCancelled: P,
		onLeave: E,
		onLeaveCancelled: R,
		onBeforeAppear: I = g,
		onAppear: A = x,
		onAppearCancelled: W = P
	} = e, N = (F, J, ve) => {
		ri(F, J ? u : l), ri(F, J ? c : r), ve && ve()
	}, le = (F, J) => {
		ri(F, f), ri(F, h), J && J()
	}, G = F => (J, ve) => {
		const Ke = F ? A : x,
			he = () => N(J, F, ve);
		Gt(Ke, [J, he]), pr(() => {
			ri(J, F ? a : o), Ot(J, F ? u : l), fr(Ke) || yr(J, n, y, he)
		})
	};
	return Te(e, {
		onBeforeEnter(F) {
			Gt(g, [F]), Ot(F, o), Ot(F, r)
		},
		onBeforeAppear(F) {
			Gt(I, [F]), Ot(F, a), Ot(F, c)
		},
		onEnter: G(!1),
		onAppear: G(!0),
		onLeave(F, J) {
			const ve = () => le(F, J);
			Ot(F, d), bd(), Ot(F, h), pr(() => {
				ri(F, d), Ot(F, f), fr(E) || yr(F, n, v, ve)
			}), Gt(E, [F, ve])
		},
		onEnterCancelled(F) {
			N(F, !1), Gt(P, [F])
		},
		onAppearCancelled(F) {
			N(F, !0), Gt(W, [F])
		},
		onLeaveCancelled(F) {
			le(F), Gt(R, [F])
		}
	})
}

function md(t) {
	if (t == null) return null;
	if (Me(t)) return [hs(t.enter), hs(t.leave)]; {
		const e = hs(t);
		return [e, e]
	}
}

function hs(t) {
	return dl(t)
}

function Ot(t, e) {
	e.split(/\s+/).forEach(i => i && t.classList.add(i)), (t._vtc || (t._vtc = new Set)).add(e)
}

function ri(t, e) {
	e.split(/\s+/).forEach(n => n && t.classList.remove(n));
	const {
		_vtc: i
	} = t;
	i && (i.delete(e), i.size || (t._vtc = void 0))
}

function pr(t) {
	requestAnimationFrame(() => {
		requestAnimationFrame(t)
	})
}
let vd = 0;

function yr(t, e, i, n) {
	const s = t._endId = ++vd,
		o = () => {
			s === t._endId && n()
		};
	if (i) return setTimeout(o, i);
	const {
		type: r,
		timeout: l,
		propCount: a
	} = gd(t, e);
	if (!r) return n();
	const c = r + "end";
	let u = 0;
	const d = () => {
			t.removeEventListener(c, h), o()
		},
		h = f => {
			f.target === t && ++u >= a && d()
		};
	setTimeout(() => {
		u < a && d()
	}, l + 1), t.addEventListener(c, h)
}

function gd(t, e) {
	const i = window.getComputedStyle(t),
		n = p => (i[p] || "").split(", "),
		s = n(Ct + "Delay"),
		o = n(Ct + "Duration"),
		r = mr(s, o),
		l = n(Oi + "Delay"),
		a = n(Oi + "Duration"),
		c = mr(l, a);
	let u = null,
		d = 0,
		h = 0;
	e === Ct ? r > 0 && (u = Ct, d = r, h = o.length) : e === Oi ? c > 0 && (u = Oi, d = c, h = a.length) : (d = Math.max(r, c), u = d > 0 ? r > c ? Ct : Oi : null, h = u ? u === Ct ? o.length : a.length : 0);
	const f = u === Ct && /\b(transform|all)(,|$)/.test(i[Ct + "Property"]);
	return {
		type: u,
		timeout: d,
		propCount: h,
		hasTransform: f
	}
}

function mr(t, e) {
	for (; t.length < e.length;) t = t.concat(t);
	return Math.max(...e.map((i, n) => vr(i) + vr(t[n])))
}

function vr(t) {
	return Number(t.slice(0, -1).replace(",", ".")) * 1e3
}

function bd() {
	return document.body.offsetHeight
}
const xd = Te({
	patchProp: fd
}, Ju);
let gr;

function wd() {
	return gr || (gr = Ou(xd))
}
const Pd = (...t) => {
	const e = wd().createApp(...t),
		{
			mount: i
		} = e;
	return e.mount = n => {
		const s = _d(n);
		if (!s) return;
		const o = e._component;
		!X(o) && !o.render && !o.template && (o.template = s.innerHTML), s.innerHTML = "";
		const r = i(s, !1, s instanceof SVGElement);
		return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), r
	}, e
};

function _d(t) {
	return ke(t) ? document.querySelector(t) : t
}
var br = globalThis && globalThis.__classPrivateFieldSet || function(t, e, i, n, s) {
		if (n === "m") throw new TypeError("Private method is not writable");
		if (n === "a" && !s) throw new TypeError("Private accessor was defined without a setter");
		if (typeof e == "function" ? t !== e || !s : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
		return n === "a" ? s.call(t, i) : s ? s.value = i : e.set(t, i), i
	},
	St = globalThis && globalThis.__classPrivateFieldGet || function(t, e, i, n) {
		if (i === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
		if (typeof e == "function" ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
		return i === "m" ? n : i === "a" ? n.call(t) : n ? n.value : e.get(t)
	},
	Ze;
class Md {
	constructor() {
		Ze.set(this, void 0), br(this, Ze, new Map, "f")
	}
	addEventListener(e, i) {
		var n;
		this.removeEventListener(e, i), St(this, Ze, "f").get(e) || St(this, Ze, "f").set(e, []), (n = St(this, Ze, "f").get(e)) === null || n === void 0 || n.push(i)
	}
	removeEventListener(e, i) {
		const n = St(this, Ze, "f").get(e);
		if (!n) return;
		const s = n.length,
			o = n.indexOf(i);
		o < 0 || (s === 1 ? St(this, Ze, "f").delete(e) : n.splice(o, 1))
	}
	removeAllEventListeners(e) {
		e ? St(this, Ze, "f").delete(e) : br(this, Ze, new Map, "f")
	}
	dispatchEvent(e, i) {
		var n;
		(n = St(this, Ze, "f").get(e)) === null || n === void 0 || n.forEach(s => s(i))
	}
	hasEventListener(e) {
		return !!St(this, Ze, "f").get(e)
	}
}
Ze = new WeakMap;
class ie {
	constructor(e, i) {
		if (typeof e != "number" && e) this.x = e.x, this.y = e.y;
		else if (e !== void 0 && i !== void 0) this.x = e, this.y = i;
		else throw new Error("tsParticles - Vector not initialized correctly")
	}
	static clone(e) {
		return ie.create(e.x, e.y)
	}
	static create(e, i) {
		return new ie(e, i)
	}
	static get origin() {
		return ie.create(0, 0)
	}
	get angle() {
		return Math.atan2(this.y, this.x)
	}
	set angle(e) {
		this.updateFromAngle(e, this.length)
	}
	get length() {
		return Math.sqrt(this.getLengthSq())
	}
	set length(e) {
		this.updateFromAngle(this.angle, e)
	}
	add(e) {
		return ie.create(this.x + e.x, this.y + e.y)
	}
	addTo(e) {
		this.x += e.x, this.y += e.y
	}
	sub(e) {
		return ie.create(this.x - e.x, this.y - e.y)
	}
	subFrom(e) {
		this.x -= e.x, this.y -= e.y
	}
	mult(e) {
		return ie.create(this.x * e, this.y * e)
	}
	multTo(e) {
		this.x *= e, this.y *= e
	}
	div(e) {
		return ie.create(this.x / e, this.y / e)
	}
	divTo(e) {
		this.x /= e, this.y /= e
	}
	distanceTo(e) {
		return this.sub(e).length
	}
	getLengthSq() {
		return this.x ** 2 + this.y ** 2
	}
	distanceToSq(e) {
		return this.sub(e).getLengthSq()
	}
	manhattanDistanceTo(e) {
		return Math.abs(e.x - this.x) + Math.abs(e.y - this.y)
	}
	copy() {
		return ie.clone(this)
	}
	setTo(e) {
		this.x = e.x, this.y = e.y
	}
	rotate(e) {
		return ie.create(this.x * Math.cos(e) - this.y * Math.sin(e), this.x * Math.sin(e) + this.y * Math.cos(e))
	}
	updateFromAngle(e, i) {
		this.x = Math.cos(e) * i, this.y = Math.sin(e) * i
	}
}

function ct(t, e, i) {
	return Math.min(Math.max(t, e), i)
}

function fs(t, e, i, n) {
	return Math.floor((t * i + e * n) / (i + n))
}

function Pe(t) {
	const e = lt(t);
	let i = gi(t);
	return e === i && (i = 0), Math.random() * (e - i) + i
}

function U(t) {
	return typeof t == "number" ? t : Pe(t)
}

function gi(t) {
	return typeof t == "number" ? t : t.min
}

function lt(t) {
	return typeof t == "number" ? t : t.max
}

function V(t, e) {
	if (t === e || e === void 0 && typeof t == "number") return t;
	const i = gi(t),
		n = lt(t);
	return e !== void 0 ? {
		min: Math.min(i, e),
		max: Math.max(n, e)
	} : V(i, n)
}

function _t(t) {
	const e = t.random,
		{
			enable: i,
			minimumValue: n
		} = typeof e == "boolean" ? {
			enable: e,
			minimumValue: 0
		} : e;
	return U(i ? V(t.value, n) : t.value)
}

function _e(t, e) {
	const i = t.x - e.x,
		n = t.y - e.y;
	return {
		dx: i,
		dy: n,
		distance: Math.sqrt(i * i + n * n)
	}
}

function we(t, e) {
	return _e(t, e).distance
}

function jd(t, e, i) {
	if (typeof t == "number") return t * Math.PI / 180;
	switch (t) {
		case "top":
			return -Math.PI / 2;
		case "top-right":
			return -Math.PI / 4;
		case "right":
			return 0;
		case "bottom-right":
			return Math.PI / 4;
		case "bottom":
			return Math.PI / 2;
		case "bottom-left":
			return 3 * Math.PI / 4;
		case "left":
			return Math.PI;
		case "top-left":
			return -3 * Math.PI / 4;
		case "inside":
			return Math.atan2(i.y - e.y, i.x - e.x);
		case "outside":
			return Math.atan2(e.y - i.y, e.x - i.x);
		case "none":
		default:
			return Math.random() * Math.PI * 2
	}
}

function Ed(t) {
	const e = ie.origin;
	return e.length = 1, e.angle = t, e
}

function xr(t, e, i, n) {
	return ie.create(t.x * (i - n) / (i + n) + e.x * 2 * n / (i + n), t.y)
}

function aa(t, e) {
	switch (e) {
		case "ease-out-quad":
			return 1 - (1 - t) ** 2;
		case "ease-out-cubic":
			return 1 - (1 - t) ** 3;
		case "ease-out-quart":
			return 1 - (1 - t) ** 4;
		case "ease-out-quint":
			return 1 - (1 - t) ** 5;
		case "ease-out-expo":
			return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
		case "ease-out-sine":
			return Math.sin(t * Math.PI / 2);
		case "ease-out-back":
			return 1 + 2.70158 * Math.pow(t - 1, 3) + 1.70158 * Math.pow(t - 1, 2);
		case "ease-out-circ":
			return Math.sqrt(1 - Math.pow(t - 1, 2));
		default:
			return t
	}
}

function Cd(t) {
	var e, i;
	return ((e = t.position) === null || e === void 0 ? void 0 : e.x) !== void 0 && ((i = t.position) === null || i === void 0 ? void 0 : i.y) !== void 0 ? {
		x: t.position.x * t.size.width / 100,
		y: t.position.y * t.size.height / 100
	} : void 0
}

function ca(t) {
	var e, i, n, s;
	return {
		x: ((i = (e = t.position) === null || e === void 0 ? void 0 : e.x) !== null && i !== void 0 ? i : Math.random() * 100) * t.size.width / 100,
		y: ((s = (n = t.position) === null || n === void 0 ? void 0 : n.y) !== null && s !== void 0 ? s : Math.random() * 100) * t.size.height / 100
	}
}

function ua(t) {
	var e, i;
	const n = {
		x: ((e = t.position) === null || e === void 0 ? void 0 : e.x) !== void 0 ? U(t.position.x) : void 0,
		y: ((i = t.position) === null || i === void 0 ? void 0 : i.y) !== void 0 ? U(t.position.y) : void 0
	};
	return ca({
		size: t.size,
		position: n
	})
}

function Od(t) {
	var e, i, n, s;
	return {
		x: (i = (e = t.position) === null || e === void 0 ? void 0 : e.x) !== null && i !== void 0 ? i : Math.random() * t.size.width,
		y: (s = (n = t.position) === null || n === void 0 ? void 0 : n.y) !== null && s !== void 0 ? s : Math.random() * t.size.height
	}
}
class ne {
	constructor() {
		this.value = ""
	}
	static create(e, i) {
		const n = new ne;
		return n.load(e), i !== void 0 && (typeof i == "string" || i instanceof Array ? n.load({
			value: i
		}) : n.load(i)), n
	}
	load(e) {
		(e == null ? void 0 : e.value) !== void 0 && (this.value = e.value)
	}
}
class Sd {
	constructor() {
		this.color = new ne, this.color.value = "", this.image = "", this.position = "", this.repeat = "", this.size = "", this.opacity = 1
	}
	load(e) {
		!e || (e.color !== void 0 && (this.color = ne.create(this.color, e.color)), e.image !== void 0 && (this.image = e.image), e.position !== void 0 && (this.position = e.position), e.repeat !== void 0 && (this.repeat = e.repeat), e.size !== void 0 && (this.size = e.size), e.opacity !== void 0 && (this.opacity = e.opacity))
	}
}
class Td {
	constructor() {
		this.color = new ne, this.color.value = "#fff", this.opacity = 1
	}
	load(e) {
		!e || (e.color !== void 0 && (this.color = ne.create(this.color, e.color)), e.opacity !== void 0 && (this.opacity = e.opacity))
	}
}
class kd {
	constructor() {
		this.composite = "destination-out", this.cover = new Td, this.enable = !1
	}
	load(e) {
		if (!!e) {
			if (e.composite !== void 0 && (this.composite = e.composite), e.cover !== void 0) {
				const i = e.cover,
					n = typeof e.cover == "string" ? {
						color: e.cover
					} : e.cover;
				this.cover.load(i.color !== void 0 ? i : {
					color: n
				})
			}
			e.enable !== void 0 && (this.enable = e.enable)
		}
	}
}
class Ad {
	constructor() {
		this.enable = !0, this.zIndex = 0
	}
	load(e) {
		!e || (e.enable !== void 0 && (this.enable = e.enable), e.zIndex !== void 0 && (this.zIndex = e.zIndex))
	}
}
class zd {
	constructor() {
		this.enable = !1, this.mode = []
	}
	load(e) {
		!e || (e.enable !== void 0 && (this.enable = e.enable), e.mode !== void 0 && (this.mode = e.mode))
	}
}
class ps {
	constructor() {
		this.selectors = [], this.enable = !1, this.mode = [], this.type = "circle"
	}
	get elementId() {
		return this.ids
	}
	set elementId(e) {
		this.ids = e
	}
	get el() {
		return this.elementId
	}
	set el(e) {
		this.elementId = e
	}
	get ids() {
		return this.selectors instanceof Array ? this.selectors.map(e => e.replace("#", "")) : this.selectors.replace("#", "")
	}
	set ids(e) {
		this.selectors = e instanceof Array ? e.map(i => `#${i}`) : `#${e}`
	}
	load(e) {
		var i, n;
		if (!e) return;
		const s = (n = (i = e.ids) !== null && i !== void 0 ? i : e.elementId) !== null && n !== void 0 ? n : e.el;
		s !== void 0 && (this.ids = s), e.selectors !== void 0 && (this.selectors = e.selectors), e.enable !== void 0 && (this.enable = e.enable), e.mode !== void 0 && (this.mode = e.mode), e.type !== void 0 && (this.type = e.type)
	}
}
class Rd {
	constructor() {
		this.enable = !1, this.force = 2, this.smooth = 10
	}
	load(e) {
		!e || (e.enable !== void 0 && (this.enable = e.enable), e.force !== void 0 && (this.force = e.force), e.smooth !== void 0 && (this.smooth = e.smooth))
	}
}
class Id {
	constructor() {
		this.enable = !1, this.mode = [], this.parallax = new Rd
	}
	load(e) {
		!e || (e.enable !== void 0 && (this.enable = e.enable), e.mode !== void 0 && (this.mode = e.mode), this.parallax.load(e.parallax))
	}
}
class Fd {
	constructor() {
		this.onClick = new zd, this.onDiv = new ps, this.onHover = new Id, this.resize = !0
	}
	get onclick() {
		return this.onClick
	}
	set onclick(e) {
		this.onClick = e
	}
	get ondiv() {
		return this.onDiv
	}
	set ondiv(e) {
		this.onDiv = e
	}
	get onhover() {
		return this.onHover
	}
	set onhover(e) {
		this.onHover = e
	}
	load(e) {
		var i, n, s;
		if (!e) return;
		this.onClick.load((i = e.onClick) !== null && i !== void 0 ? i : e.onclick);
		const o = (n = e.onDiv) !== null && n !== void 0 ? n : e.ondiv;
		o !== void 0 && (o instanceof Array ? this.onDiv = o.map(r => {
			const l = new ps;
			return l.load(r), l
		}) : (this.onDiv = new ps, this.onDiv.load(o))), this.onHover.load((s = e.onHover) !== null && s !== void 0 ? s : e.onhover), e.resize !== void 0 && (this.resize = e.resize)
	}
}
class Dd {
	constructor() {
		this.distance = 200, this.duration = .4, this.easing = "ease-out-quad", this.factor = 1, this.maxSpeed = 50, this.speed = 1
	}
	load(e) {
		!e || (e.distance !== void 0 && (this.distance = e.distance), e.duration !== void 0 && (this.duration = e.duration), e.easing !== void 0 && (this.easing = e.easing), e.factor !== void 0 && (this.factor = e.factor), e.maxSpeed !== void 0 && (this.maxSpeed = e.maxSpeed), e.speed !== void 0 && (this.speed = e.speed))
	}
}
class Ld {
	constructor() {
		this.distance = 200
	}
	load(e) {
		!e || e.distance !== void 0 && (this.distance = e.distance)
	}
}
class da {
	constructor() {
		this.distance = 200, this.duration = .4, this.mix = !1
	}
	load(e) {
		!e || (e.distance !== void 0 && (this.distance = e.distance), e.duration !== void 0 && (this.duration = e.duration), e.mix !== void 0 && (this.mix = e.mix), e.opacity !== void 0 && (this.opacity = e.opacity), e.color !== void 0 && (e.color instanceof Array ? this.color = e.color.map(i => ne.create(void 0, i)) : (this.color instanceof Array && (this.color = new ne), this.color = ne.create(this.color, e.color))), e.size !== void 0 && (this.size = e.size))
	}
}
class wr extends da {
	constructor() {
		super(), this.selectors = []
	}
	get ids() {
		return this.selectors instanceof Array ? this.selectors.map(e => e.replace("#", "")) : this.selectors.replace("#", "")
	}
	set ids(e) {
		this.selectors = e instanceof Array ? e.map(i => `#${i}`) : `#${e}`
	}
	load(e) {
		super.load(e), e && (e.ids !== void 0 && (this.ids = e.ids), e.selectors !== void 0 && (this.selectors = e.selectors))
	}
}
class Hd extends da {
	load(e) {
		super.load(e), e && (e.divs instanceof Array ? this.divs = e.divs.map(i => {
			const n = new wr;
			return n.load(i), n
		}) : ((this.divs instanceof Array || !this.divs) && (this.divs = new wr), this.divs.load(e.divs)))
	}
}
class $d {
	constructor() {
		this.opacity = .5
	}
	load(e) {
		e !== void 0 && e.opacity !== void 0 && e.opacity !== void 0 && (this.opacity = e.opacity)
	}
}
class Bd {
	constructor() {
		this.distance = 80, this.links = new $d, this.radius = 60
	}
	get line_linked() {
		return this.links
	}
	set line_linked(e) {
		this.links = e
	}
	get lineLinked() {
		return this.links
	}
	set lineLinked(e) {
		this.links = e
	}
	load(e) {
		var i, n;
		!e || (e.distance !== void 0 && (this.distance = e.distance), this.links.load((n = (i = e.links) !== null && i !== void 0 ? i : e.lineLinked) !== null && n !== void 0 ? n : e.line_linked), e.radius !== void 0 && (this.radius = e.radius))
	}
}
class Vd {
	constructor() {
		this.blink = !1, this.consent = !1, this.opacity = 1
	}
	load(e) {
		!e || (e.blink !== void 0 && (this.blink = e.blink), e.color !== void 0 && (this.color = ne.create(this.color, e.color)), e.consent !== void 0 && (this.consent = e.consent), e.opacity !== void 0 && (this.opacity = e.opacity))
	}
}
class Nd {
	constructor() {
		this.distance = 100, this.links = new Vd
	}
	get line_linked() {
		return this.links
	}
	set line_linked(e) {
		this.links = e
	}
	get lineLinked() {
		return this.links
	}
	set lineLinked(e) {
		this.links = e
	}
	load(e) {
		var i, n;
		!e || (e.distance !== void 0 && (this.distance = e.distance), this.links.load((n = (i = e.links) !== null && i !== void 0 ? i : e.lineLinked) !== null && n !== void 0 ? n : e.line_linked))
	}
}
class Wd {
	constructor() {
		this.start = new ne, this.stop = new ne, this.start.value = "#ffffff", this.stop.value = "#000000"
	}
	load(e) {
		!e || (this.start = ne.create(this.start, e.start), this.stop = ne.create(this.stop, e.stop))
	}
}
class Ud {
	constructor() {
		this.gradient = new Wd, this.radius = 1e3
	}
	load(e) {
		!e || (this.gradient.load(e.gradient), e.radius !== void 0 && (this.radius = e.radius))
	}
}
class Gd {
	constructor() {
		this.color = new ne, this.color.value = "#000000", this.length = 2e3
	}
	load(e) {
		!e || (this.color = ne.create(this.color, e.color), e.length !== void 0 && (this.length = e.length))
	}
}
class qd {
	constructor() {
		this.area = new Ud, this.shadow = new Gd
	}
	load(e) {
		!e || (this.area.load(e.area), this.shadow.load(e.shadow))
	}
}
class Kd {
	constructor() {
		this.default = !0, this.groups = [], this.quantity = 4
	}
	get particles_nb() {
		return this.quantity
	}
	set particles_nb(e) {
		this.quantity = e
	}
	load(e) {
		var i;
		if (!e) return;
		e.default !== void 0 && (this.default = e.default), e.groups !== void 0 && (this.groups = e.groups.map(s => s)), this.groups.length || (this.default = !0);
		const n = (i = e.quantity) !== null && i !== void 0 ? i : e.particles_nb;
		n !== void 0 && (this.quantity = n)
	}
}
class Yd {
	constructor() {
		this.quantity = 2
	}
	get particles_nb() {
		return this.quantity
	}
	set particles_nb(e) {
		this.quantity = e
	}
	load(e) {
		var i;
		if (!e) return;
		const n = (i = e.quantity) !== null && i !== void 0 ? i : e.particles_nb;
		n !== void 0 && (this.quantity = n)
	}
}
class ha {
	constructor() {
		this.distance = 200, this.duration = .4, this.factor = 100, this.speed = 1, this.maxSpeed = 50, this.easing = "ease-out-quad"
	}
	load(e) {
		!e || (e.distance !== void 0 && (this.distance = e.distance), e.duration !== void 0 && (this.duration = e.duration), e.easing !== void 0 && (this.easing = e.easing), e.factor !== void 0 && (this.factor = e.factor), e.speed !== void 0 && (this.speed = e.speed), e.maxSpeed !== void 0 && (this.maxSpeed = e.maxSpeed))
	}
}
class Pr extends ha {
	constructor() {
		super(), this.selectors = []
	}
	get ids() {
		return this.selectors instanceof Array ? this.selectors.map(e => e.replace("#", "")) : this.selectors.replace("#", "")
	}
	set ids(e) {
		e instanceof Array ? this.selectors = e.map(() => `#${e}`) : this.selectors = `#${e}`
	}
	load(e) {
		super.load(e), e && (e.ids !== void 0 && (this.ids = e.ids), e.selectors !== void 0 && (this.selectors = e.selectors))
	}
}
class Xd extends ha {
	load(e) {
		super.load(e), e && (e.divs instanceof Array ? this.divs = e.divs.map(i => {
			const n = new Pr;
			return n.load(i), n
		}) : ((this.divs instanceof Array || !this.divs) && (this.divs = new Pr), this.divs.load(e.divs)))
	}
}
class Jd {
	constructor() {
		this.factor = 3, this.radius = 200
	}
	get active() {
		return !1
	}
	set active(e) {}
	load(e) {
		!e || (e.factor !== void 0 && (this.factor = e.factor), e.radius !== void 0 && (this.radius = e.radius))
	}
}
class Qd {
	constructor() {
		this.delay = 1, this.pauseOnStop = !1, this.quantity = 1
	}
	load(e) {
		!e || (e.delay !== void 0 && (this.delay = e.delay), e.quantity !== void 0 && (this.quantity = e.quantity), e.particles !== void 0 && (this.particles = de({}, e.particles)), e.pauseOnStop !== void 0 && (this.pauseOnStop = e.pauseOnStop))
	}
}
class Zd {
	constructor() {
		this.attract = new Dd, this.bounce = new Ld, this.bubble = new Hd, this.connect = new Bd, this.grab = new Nd, this.light = new qd, this.push = new Kd, this.remove = new Yd, this.repulse = new Xd, this.slow = new Jd, this.trail = new Qd
	}
	load(e) {
		!e || (this.attract.load(e.attract), this.bubble.load(e.bubble), this.connect.load(e.connect), this.grab.load(e.grab), this.light.load(e.light), this.push.load(e.push), this.remove.load(e.remove), this.repulse.load(e.repulse), this.slow.load(e.slow), this.trail.load(e.trail))
	}
}
class eh {
	constructor() {
		this.detectsOn = "window", this.events = new Fd, this.modes = new Zd
	}
	get detect_on() {
		return this.detectsOn
	}
	set detect_on(e) {
		this.detectsOn = e
	}
	load(e) {
		var i, n, s;
		if (!e) return;
		const o = (i = e.detectsOn) !== null && i !== void 0 ? i : e.detect_on;
		o !== void 0 && (this.detectsOn = o), this.events.load(e.events), this.modes.load(e.modes), ((s = (n = e.modes) === null || n === void 0 ? void 0 : n.slow) === null || s === void 0 ? void 0 : s.active) === !0 && (this.events.onHover.mode instanceof Array ? this.events.onHover.mode.indexOf("slow") < 0 && this.events.onHover.mode.push("slow") : this.events.onHover.mode !== "slow" && (this.events.onHover.mode = [this.events.onHover.mode, "slow"]))
	}
}
class th {
	load(e) {
		var i, n;
		!e || (e.position !== void 0 && (this.position = {
			x: (i = e.position.x) !== null && i !== void 0 ? i : 50,
			y: (n = e.position.y) !== null && n !== void 0 ? n : 50
		}), e.options !== void 0 && (this.options = de({}, e.options)))
	}
}
class ih {
	constructor() {
		this.factor = 4, this.value = !0
	}
	load(e) {
		!e || (e.factor !== void 0 && (this.factor = e.factor), e.value !== void 0 && (this.value = e.value))
	}
}
class nh {
	constructor() {
		this.disable = !1, this.reduce = new ih
	}
	load(e) {
		!e || (e.disable !== void 0 && (this.disable = e.disable), this.reduce.load(e.reduce))
	}
}
class sh {
	constructor() {
		this.maxWidth = 1 / 0, this.options = {}, this.mode = "canvas"
	}
	load(e) {
		!e || (e.maxWidth !== void 0 && (this.maxWidth = e.maxWidth), e.mode !== void 0 && (e.mode === "screen" ? this.mode = "screen" : this.mode = "canvas"), e.options !== void 0 && (this.options = de({}, e.options)))
	}
}
class oh {
	constructor() {
		this.auto = !1, this.mode = "any", this.value = !1
	}
	load(e) {
		!e || (e.auto !== void 0 && (this.auto = e.auto), e.mode !== void 0 && (this.mode = e.mode), e.value !== void 0 && (this.value = e.value))
	}
}
class rh {
	constructor() {
		this.name = "", this.default = new oh
	}
	load(e) {
		!e || (e.name !== void 0 && (this.name = e.name), this.default.load(e.default), e.options !== void 0 && (this.options = de({}, e.options)))
	}
}
var lh = globalThis && globalThis.__classPrivateFieldSet || function(t, e, i, n, s) {
		if (n === "m") throw new TypeError("Private method is not writable");
		if (n === "a" && !s) throw new TypeError("Private accessor was defined without a setter");
		if (typeof e == "function" ? t !== e || !s : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
		return n === "a" ? s.call(t, i) : s ? s.value = i : e.set(t, i), i
	},
	Si = globalThis && globalThis.__classPrivateFieldGet || function(t, e, i, n) {
		if (i === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
		if (typeof e == "function" ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
		return i === "m" ? n : i === "a" ? n.call(t) : n ? n.value : e.get(t)
	},
	Fi, Di, wn;
class ah {
	constructor(e) {
		Fi.add(this), Di.set(this, void 0), lh(this, Di, e, "f"), this.autoPlay = !0, this.background = new Sd, this.backgroundMask = new kd, this.fullScreen = new Ad, this.detectRetina = !0, this.duration = 0, this.fpsLimit = 120, this.interactivity = new eh, this.manualParticles = [], this.motion = new nh, this.particles = So(), this.pauseOnBlur = !0, this.pauseOnOutsideViewport = !0, this.responsive = [], this.style = {}, this.themes = [], this.zLayers = 100
	}
	get fps_limit() {
		return this.fpsLimit
	}
	set fps_limit(e) {
		this.fpsLimit = e
	}
	get retina_detect() {
		return this.detectRetina
	}
	set retina_detect(e) {
		this.detectRetina = e
	}
	get backgroundMode() {
		return this.fullScreen
	}
	set backgroundMode(e) {
		this.fullScreen.load(e)
	}
	load(e) {
		var i, n, s, o, r;
		if (!e) return;
		if (e.preset !== void 0)
			if (e.preset instanceof Array)
				for (const u of e.preset) this.importPreset(u);
			else this.importPreset(e.preset);
		e.autoPlay !== void 0 && (this.autoPlay = e.autoPlay);
		const l = (i = e.detectRetina) !== null && i !== void 0 ? i : e.retina_detect;
		l !== void 0 && (this.detectRetina = l), e.duration !== void 0 && (this.duration = e.duration);
		const a = (n = e.fpsLimit) !== null && n !== void 0 ? n : e.fps_limit;
		a !== void 0 && (this.fpsLimit = a), e.pauseOnBlur !== void 0 && (this.pauseOnBlur = e.pauseOnBlur), e.pauseOnOutsideViewport !== void 0 && (this.pauseOnOutsideViewport = e.pauseOnOutsideViewport), e.zLayers !== void 0 && (this.zLayers = e.zLayers), this.background.load(e.background);
		const c = (s = e.fullScreen) !== null && s !== void 0 ? s : e.backgroundMode;
		if (typeof c == "boolean" ? this.fullScreen.enable = c : this.fullScreen.load(c), this.backgroundMask.load(e.backgroundMask), this.interactivity.load(e.interactivity), e.manualParticles !== void 0 && (this.manualParticles = e.manualParticles.map(u => {
				const d = new th;
				return d.load(u), d
			})), this.motion.load(e.motion), this.particles.load(e.particles), this.style = de(this.style, e.style), Si(this, Di, "f").plugins.loadOptions(this, e), e.responsive !== void 0)
			for (const u of e.responsive) {
				const d = new sh;
				d.load(u), this.responsive.push(d)
			}
		if (this.responsive.sort((u, d) => u.maxWidth - d.maxWidth), e.themes !== void 0)
			for (const u of e.themes) {
				const d = new rh;
				d.load(u), this.themes.push(d)
			}
		this.defaultDarkTheme = (o = Si(this, Fi, "m", wn).call(this, "dark")) === null || o === void 0 ? void 0 : o.name, this.defaultLightTheme = (r = Si(this, Fi, "m", wn).call(this, "light")) === null || r === void 0 ? void 0 : r.name
	}
	setTheme(e) {
		if (e) {
			const i = this.themes.find(n => n.name === e);
			i && this.load(i.options)
		} else {
			const i = typeof matchMedia != "undefined" && matchMedia("(prefers-color-scheme: dark)"),
				n = i && i.matches,
				s = Si(this, Fi, "m", wn).call(this, n ? "dark" : "light");
			s && this.load(s.options)
		}
	}
	setResponsive(e, i, n) {
		this.load(n);
		const s = this.responsive.find(o => o.mode === "screen" && screen ? o.maxWidth * i > screen.availWidth : o.maxWidth * i > e);
		return this.load(s == null ? void 0 : s.options), s == null ? void 0 : s.maxWidth
	}
	importPreset(e) {
		this.load(Si(this, Di, "f").plugins.getPreset(e))
	}
}
Di = new WeakMap, Fi = new WeakSet, wn = function(e) {
	var i;
	return (i = this.themes.find(n => n.default.value && n.default.mode === e)) !== null && i !== void 0 ? i : this.themes.find(n => n.default.value && n.default.mode === "any")
};
class ys {
	constructor() {
		this.count = 0, this.enable = !1, this.offset = 0, this.speed = 1, this.sync = !0
	}
	load(e) {
		!e || (e.count !== void 0 && (this.count = V(e.count)), e.enable !== void 0 && (this.enable = e.enable), e.offset !== void 0 && (this.offset = V(e.offset)), e.speed !== void 0 && (this.speed = V(e.speed)), e.sync !== void 0 && (this.sync = e.sync))
	}
}
class ch {
	constructor() {
		this.h = new ys, this.s = new ys, this.l = new ys
	}
	load(e) {
		!e || (this.h.load(e.h), this.s.load(e.s), this.l.load(e.l))
	}
}
class Bt extends ne {
	constructor() {
		super(), this.animation = new ch
	}
	static create(e, i) {
		const n = new Bt;
		return n.load(e), i !== void 0 && (typeof i == "string" || i instanceof Array ? n.load({
			value: i
		}) : n.load(i)), n
	}
	load(e) {
		if (super.load(e), !e) return;
		const i = e.animation;
		i !== void 0 && (i.enable !== void 0 ? this.animation.h.load(i) : this.animation.load(e.animation))
	}
}
class _r {
	constructor() {
		this.angle = new uh, this.colors = [], this.type = "random"
	}
	load(e) {
		!e || (this.angle.load(e.angle), e.colors !== void 0 && (this.colors = e.colors.map(i => {
			const n = new hh;
			return n.load(i), n
		})), e.type !== void 0 && (this.type = e.type))
	}
}
class uh {
	constructor() {
		this.value = 0, this.animation = new fh, this.direction = "clockwise"
	}
	load(e) {
		!e || (this.animation.load(e.animation), e.value !== void 0 && (this.value = e.value), e.direction !== void 0 && (this.direction = e.direction))
	}
}
class dh {
	constructor() {
		this.value = 0, this.animation = new ph
	}
	load(e) {
		!e || (this.animation.load(e.animation), e.value !== void 0 && (this.value = V(e.value)))
	}
}
class hh {
	constructor() {
		this.stop = 0, this.value = new Bt
	}
	load(e) {
		!e || (e.stop !== void 0 && (this.stop = e.stop), this.value = Bt.create(this.value, e.value), e.opacity !== void 0 && (this.opacity = new dh, typeof e.opacity == "number" ? this.opacity.value = e.opacity : this.opacity.load(e.opacity)))
	}
}
class fh {
	constructor() {
		this.count = 0, this.enable = !1, this.speed = 0, this.sync = !1
	}
	load(e) {
		!e || (e.count !== void 0 && (this.count = V(e.count)), e.enable !== void 0 && (this.enable = e.enable), e.speed !== void 0 && (this.speed = V(e.speed)), e.sync !== void 0 && (this.sync = e.sync))
	}
}
class ph {
	constructor() {
		this.count = 0, this.enable = !1, this.speed = 0, this.sync = !1, this.startValue = "random"
	}
	load(e) {
		!e || (e.count !== void 0 && (this.count = V(e.count)), e.enable !== void 0 && (this.enable = e.enable), e.speed !== void 0 && (this.speed = V(e.speed)), e.sync !== void 0 && (this.sync = e.sync), e.startValue !== void 0 && (this.startValue = e.startValue))
	}
}
class yh {
	constructor() {
		this.enable = !0, this.retries = 0
	}
	load(e) {
		!e || (e.enable !== void 0 && (this.enable = e.enable), e.retries !== void 0 && (this.retries = e.retries))
	}
}
class mh {
	constructor() {
		this.enable = !1, this.minimumValue = 0
	}
	load(e) {
		!e || (e.enable !== void 0 && (this.enable = e.enable), e.minimumValue !== void 0 && (this.minimumValue = e.minimumValue))
	}
}
class Ne {
	constructor() {
		this.random = new mh, this.value = 0
	}
	load(e) {
		!e || (typeof e.random == "boolean" ? this.random.enable = e.random : this.random.load(e.random), e.value !== void 0 && (this.value = V(e.value, this.random.enable ? this.random.minimumValue : void 0)))
	}
}
class Mr extends Ne {
	constructor() {
		super(), this.random.minimumValue = .1, this.value = 1
	}
}
class fa {
	constructor() {
		this.horizontal = new Mr, this.vertical = new Mr
	}
	load(e) {
		!e || (this.horizontal.load(e.horizontal), this.vertical.load(e.vertical))
	}
}
class vh {
	constructor() {
		this.bounce = new fa, this.enable = !1, this.mode = "bounce", this.overlap = new yh
	}
	load(e) {
		!e || (this.bounce.load(e.bounce), e.enable !== void 0 && (this.enable = e.enable), e.mode !== void 0 && (this.mode = e.mode), this.overlap.load(e.overlap))
	}
}
class gh extends Ne {
	constructor() {
		super(), this.value = 3
	}
}
class bh extends Ne {
	constructor() {
		super(), this.value = {
			min: 4,
			max: 9
		}
	}
}
class xh {
	constructor() {
		this.count = 1, this.factor = new gh, this.rate = new bh, this.sizeOffset = !0
	}
	load(e) {
		!e || (e.count !== void 0 && (this.count = e.count), this.factor.load(e.factor), this.rate.load(e.rate), e.particles !== void 0 && (this.particles = de({}, e.particles)), e.sizeOffset !== void 0 && (this.sizeOffset = e.sizeOffset))
	}
}
class wh {
	constructor() {
		this.mode = "none", this.split = new xh
	}
	load(e) {
		!e || (e.mode !== void 0 && (this.mode = e.mode), this.split.load(e.split))
	}
}
class Ph extends Ne {
	constructor() {
		super(), this.sync = !1
	}
	load(e) {
		!e || (super.load(e), e.sync !== void 0 && (this.sync = e.sync))
	}
}
class _h extends Ne {
	constructor() {
		super(), this.random.minimumValue = 1e-4, this.sync = !1
	}
	load(e) {
		!e || (super.load(e), e.sync !== void 0 && (this.sync = e.sync))
	}
}
class Mh {
	constructor() {
		this.count = 0, this.delay = new Ph, this.duration = new _h
	}
	load(e) {
		!e || (e.count !== void 0 && (this.count = e.count), this.delay.load(e.delay), this.duration.load(e.duration))
	}
}
class jh {
	constructor() {
		this.blur = 5, this.color = new ne, this.color.value = "#000", this.enable = !1
	}
	load(e) {
		!e || (e.blur !== void 0 && (this.blur = e.blur), this.color = ne.create(this.color, e.color), e.enable !== void 0 && (this.enable = e.enable))
	}
}
class Eh {
	constructor() {
		this.enable = !1, this.frequency = 1
	}
	load(e) {
		!e || (e.color !== void 0 && (this.color = ne.create(this.color, e.color)), e.enable !== void 0 && (this.enable = e.enable), e.frequency !== void 0 && (this.frequency = e.frequency), e.opacity !== void 0 && (this.opacity = e.opacity))
	}
}
class Ch {
	constructor() {
		this.blink = !1, this.color = new ne, this.color.value = "#fff", this.consent = !1, this.distance = 100, this.enable = !1, this.frequency = 1, this.opacity = 1, this.shadow = new jh, this.triangles = new Eh, this.width = 1, this.warp = !1
	}
	load(e) {
		!e || (e.id !== void 0 && (this.id = e.id), e.blink !== void 0 && (this.blink = e.blink), this.color = ne.create(this.color, e.color), e.consent !== void 0 && (this.consent = e.consent), e.distance !== void 0 && (this.distance = e.distance), e.enable !== void 0 && (this.enable = e.enable), e.frequency !== void 0 && (this.frequency = e.frequency), e.opacity !== void 0 && (this.opacity = e.opacity), this.shadow.load(e.shadow), this.triangles.load(e.triangles), e.width !== void 0 && (this.width = e.width), e.warp !== void 0 && (this.warp = e.warp))
	}
}
class Oh {
	constructor() {
		this.offset = 0, this.value = 90
	}
	load(e) {
		!e || (e.offset !== void 0 && (this.offset = V(e.offset)), e.value !== void 0 && (this.value = V(e.value)))
	}
}
class Sh {
	constructor() {
		this.distance = 200, this.enable = !1, this.rotate = {
			x: 3e3,
			y: 3e3
		}
	}
	get rotateX() {
		return this.rotate.x
	}
	set rotateX(e) {
		this.rotate.x = e
	}
	get rotateY() {
		return this.rotate.y
	}
	set rotateY(e) {
		this.rotate.y = e
	}
	load(e) {
		var i, n, s, o;
		if (!e) return;
		e.distance !== void 0 && (this.distance = V(e.distance)), e.enable !== void 0 && (this.enable = e.enable);
		const r = (n = (i = e.rotate) === null || i === void 0 ? void 0 : i.x) !== null && n !== void 0 ? n : e.rotateX;
		r !== void 0 && (this.rotate.x = r);
		const l = (o = (s = e.rotate) === null || s === void 0 ? void 0 : s.y) !== null && o !== void 0 ? o : e.rotateY;
		l !== void 0 && (this.rotate.y = l)
	}
}
class Th {
	constructor() {
		this.acceleration = 9.81, this.enable = !1, this.inverse = !1, this.maxSpeed = 50
	}
	load(e) {
		!e || (e.acceleration !== void 0 && (this.acceleration = V(e.acceleration)), e.enable !== void 0 && (this.enable = e.enable), e.inverse !== void 0 && (this.inverse = e.inverse), e.maxSpeed !== void 0 && (this.maxSpeed = V(e.maxSpeed)))
	}
}
class kh extends Ne {
	constructor() {
		super()
	}
}
class Ah {
	constructor() {
		this.clamp = !0, this.delay = new kh, this.enable = !1, this.options = {}
	}
	load(e) {
		!e || (e.clamp !== void 0 && (this.clamp = e.clamp), this.delay.load(e.delay), e.enable !== void 0 && (this.enable = e.enable), this.generator = e.generator, e.options && (this.options = de(this.options, e.options)))
	}
}
class zh {
	constructor() {
		this.enable = !1, this.length = 10, this.fillColor = new ne, this.fillColor.value = "#000000"
	}
	load(e) {
		!e || (e.enable !== void 0 && (this.enable = e.enable), this.fillColor = ne.create(this.fillColor, e.fillColor), e.length !== void 0 && (this.length = e.length))
	}
}
class Rh {
	constructor() {
		this.default = "out"
	}
	load(e) {
		var i, n, s, o;
		!e || (e.default !== void 0 && (this.default = e.default), this.bottom = (i = e.bottom) !== null && i !== void 0 ? i : e.default, this.left = (n = e.left) !== null && n !== void 0 ? n : e.default, this.right = (s = e.right) !== null && s !== void 0 ? s : e.default, this.top = (o = e.top) !== null && o !== void 0 ? o : e.default)
	}
}
class Ih {
	constructor() {
		this.acceleration = 0, this.enable = !1
	}
	load(e) {
		!e || (e.acceleration !== void 0 && (this.acceleration = V(e.acceleration)), e.enable !== void 0 && (this.enable = e.enable), this.position = e.position ? de({}, e.position) : void 0)
	}
}
class Fh {
	constructor() {
		this.angle = new Oh, this.attract = new Sh, this.center = {
			x: 50,
			y: 50,
			radius: 0
		}, this.decay = 0, this.distance = {}, this.direction = "none", this.drift = 0, this.enable = !1, this.gravity = new Th, this.path = new Ah, this.outModes = new Rh, this.random = !1, this.size = !1, this.speed = 2, this.spin = new Ih, this.straight = !1, this.trail = new zh, this.vibrate = !1, this.warp = !1
	}
	get collisions() {
		return !1
	}
	set collisions(e) {}
	get bounce() {
		return this.collisions
	}
	set bounce(e) {
		this.collisions = e
	}
	get out_mode() {
		return this.outMode
	}
	set out_mode(e) {
		this.outMode = e
	}
	get outMode() {
		return this.outModes.default
	}
	set outMode(e) {
		this.outModes.default = e
	}
	get noise() {
		return this.path
	}
	set noise(e) {
		this.path = e
	}
	load(e) {
		var i, n, s;
		if (!e) return;
		e.angle !== void 0 && (typeof e.angle == "number" ? this.angle.value = e.angle : this.angle.load(e.angle)), this.attract.load(e.attract), this.center = de(this.center, e.center), e.decay !== void 0 && (this.decay = e.decay), e.direction !== void 0 && (this.direction = e.direction), e.distance !== void 0 && (this.distance = typeof e.distance == "number" ? {
			horizontal: e.distance,
			vertical: e.distance
		} : de({}, e.distance)), e.drift !== void 0 && (this.drift = V(e.drift)), e.enable !== void 0 && (this.enable = e.enable), this.gravity.load(e.gravity);
		const o = (i = e.outMode) !== null && i !== void 0 ? i : e.out_mode;
		(e.outModes !== void 0 || o !== void 0) && (typeof e.outModes == "string" || e.outModes === void 0 && o !== void 0 ? this.outModes.load({
			default: (n = e.outModes) !== null && n !== void 0 ? n : o
		}) : this.outModes.load(e.outModes)), this.path.load((s = e.path) !== null && s !== void 0 ? s : e.noise), e.random !== void 0 && (this.random = e.random), e.size !== void 0 && (this.size = e.size), e.speed !== void 0 && (this.speed = V(e.speed)), this.spin.load(e.spin), e.straight !== void 0 && (this.straight = e.straight), this.trail.load(e.trail), e.vibrate !== void 0 && (this.vibrate = e.vibrate), e.warp !== void 0 && (this.warp = e.warp)
	}
}
class Eo {
	constructor() {
		this.count = 0, this.enable = !1, this.speed = 1, this.sync = !1
	}
	load(e) {
		!e || (e.count !== void 0 && (this.count = V(e.count)), e.enable !== void 0 && (this.enable = e.enable), e.speed !== void 0 && (this.speed = V(e.speed)), e.sync !== void 0 && (this.sync = e.sync))
	}
}
class Dh extends Eo {
	constructor() {
		super(), this.destroy = "none", this.enable = !1, this.speed = 2, this.startValue = "random", this.sync = !1
	}
	get opacity_min() {
		return this.minimumValue
	}
	set opacity_min(e) {
		this.minimumValue = e
	}
	load(e) {
		var i;
		!e || (super.load(e), e.destroy !== void 0 && (this.destroy = e.destroy), e.enable !== void 0 && (this.enable = e.enable), this.minimumValue = (i = e.minimumValue) !== null && i !== void 0 ? i : e.opacity_min, e.speed !== void 0 && (this.speed = e.speed), e.startValue !== void 0 && (this.startValue = e.startValue), e.sync !== void 0 && (this.sync = e.sync))
	}
}
class Lh extends Ne {
	constructor() {
		super(), this.animation = new Dh, this.random.minimumValue = .1, this.value = 1
	}
	get anim() {
		return this.animation
	}
	set anim(e) {
		this.animation = e
	}
	load(e) {
		var i;
		if (!e) return;
		super.load(e);
		const n = (i = e.animation) !== null && i !== void 0 ? i : e.anim;
		n !== void 0 && (this.animation.load(n), this.value = V(this.value, this.animation.enable ? this.animation.minimumValue : void 0))
	}
}
class Hh extends Ne {
	constructor() {
		super(), this.value = 45, this.random.enable = !1, this.random.minimumValue = 0
	}
	load(e) {
		e !== void 0 && super.load(e)
	}
}
class $h {
	constructor() {
		this.animation = new Eo, this.enable = !1, this.opacity = 1, this.rotation = new Hh, this.width = 1
	}
	load(e) {
		!e || (this.animation.load(e.animation), this.rotation.load(e.rotation), e.enable !== void 0 && (this.enable = e.enable), e.opacity !== void 0 && (this.opacity = V(e.opacity)), e.width !== void 0 && (this.width = V(e.width)), e.radius !== void 0 && (this.radius = V(e.radius)), e.color !== void 0 && (this.color = ne.create(this.color, e.color)))
	}
}
class Bh {
	constructor() {
		this.enable = !1, this.area = 800, this.factor = 1e3
	}
	get value_area() {
		return this.area
	}
	set value_area(e) {
		this.area = e
	}
	load(e) {
		var i;
		if (!e) return;
		e.enable !== void 0 && (this.enable = e.enable);
		const n = (i = e.area) !== null && i !== void 0 ? i : e.value_area;
		n !== void 0 && (this.area = n), e.factor !== void 0 && (this.factor = e.factor)
	}
}
class Vh {
	constructor() {
		this.density = new Bh, this.limit = 0, this.value = 100
	}
	get max() {
		return this.limit
	}
	set max(e) {
		this.limit = e
	}
	load(e) {
		var i;
		if (!e) return;
		this.density.load(e.density);
		const n = (i = e.limit) !== null && i !== void 0 ? i : e.max;
		n !== void 0 && (this.limit = n), e.value !== void 0 && (this.value = e.value)
	}
}
class Nh extends Ne {
	constructor() {
		super(), this.enabled = !1, this.distance = 1, this.duration = 1, this.factor = 1, this.speed = 1
	}
	load(e) {
		super.load(e), e && (e.enabled !== void 0 && (this.enabled = e.enabled), e.distance !== void 0 && (this.distance = V(e.distance)), e.duration !== void 0 && (this.duration = V(e.duration)), e.factor !== void 0 && (this.factor = V(e.factor)), e.speed !== void 0 && (this.speed = V(e.speed)))
	}
}
class jr {
	constructor() {
		this.enable = !1, this.value = 0
	}
	load(e) {
		!e || (e.enable !== void 0 && (this.enable = e.enable), e.value !== void 0 && (this.value = V(e.value)))
	}
}
class Wh {
	constructor() {
		this.darken = new jr, this.enable = !1, this.enlighten = new jr, this.mode = "vertical", this.speed = 25
	}
	load(e) {
		!e || (e.backColor !== void 0 && (this.backColor = ne.create(this.backColor, e.backColor)), this.darken.load(e.darken), e.enable !== void 0 && (this.enable = e.enable), this.enlighten.load(e.enlighten), e.mode !== void 0 && (this.mode = e.mode), e.speed !== void 0 && (this.speed = V(e.speed)))
	}
}
class Uh {
	constructor() {
		this.enable = !1, this.speed = 0, this.sync = !1
	}
	load(e) {
		!e || (e.enable !== void 0 && (this.enable = e.enable), e.speed !== void 0 && (this.speed = V(e.speed)), e.sync !== void 0 && (this.sync = e.sync))
	}
}
class Gh extends Ne {
	constructor() {
		super(), this.animation = new Uh, this.direction = "clockwise", this.path = !1, this.value = 0
	}
	load(e) {
		!e || (super.load(e), e.direction !== void 0 && (this.direction = e.direction), this.animation.load(e.animation), e.path !== void 0 && (this.path = e.path))
	}
}
class qh {
	constructor() {
		this.blur = 0, this.color = new ne, this.enable = !1, this.offset = {
			x: 0,
			y: 0
		}, this.color.value = "#000"
	}
	load(e) {
		!e || (e.blur !== void 0 && (this.blur = e.blur), this.color = ne.create(this.color, e.color), e.enable !== void 0 && (this.enable = e.enable), e.offset !== void 0 && (e.offset.x !== void 0 && (this.offset.x = e.offset.x), e.offset.y !== void 0 && (this.offset.y = e.offset.y)))
	}
}
class pa {
	constructor() {
		this.options = {}, this.type = "circle"
	}
	get image() {
		var e;
		return (e = this.options.image) !== null && e !== void 0 ? e : this.options.images
	}
	set image(e) {
		this.options.image = e, this.options.images = e
	}
	get custom() {
		return this.options
	}
	set custom(e) {
		this.options = e
	}
	get images() {
		return this.image
	}
	set images(e) {
		this.image = e
	}
	get stroke() {
		return []
	}
	set stroke(e) {}
	get character() {
		var e;
		return (e = this.options.character) !== null && e !== void 0 ? e : this.options.char
	}
	set character(e) {
		this.options.character = e, this.options.char = e
	}
	get polygon() {
		var e;
		return (e = this.options.polygon) !== null && e !== void 0 ? e : this.options.star
	}
	set polygon(e) {
		this.options.polygon = e, this.options.star = e
	}
	load(e) {
		var i, n, s;
		if (!e) return;
		const o = (i = e.options) !== null && i !== void 0 ? i : e.custom;
		if (o !== void 0)
			for (const r in o) {
				const l = o[r];
				l && (this.options[r] = de((n = this.options[r]) !== null && n !== void 0 ? n : {}, l))
			}
		this.loadShape(e.character, "character", "char", !0), this.loadShape(e.polygon, "polygon", "star", !1), this.loadShape((s = e.image) !== null && s !== void 0 ? s : e.images, "image", "images", !0), e.type !== void 0 && (this.type = e.type)
	}
	loadShape(e, i, n, s) {
		var o, r, l, a;
		e !== void 0 && (e instanceof Array ? (this.options[i] instanceof Array || (this.options[i] = [], (!this.options[n] || s) && (this.options[n] = [])), this.options[i] = de((o = this.options[i]) !== null && o !== void 0 ? o : [], e), (!this.options[n] || s) && (this.options[n] = de((r = this.options[n]) !== null && r !== void 0 ? r : [], e))) : (this.options[i] instanceof Array && (this.options[i] = {}, (!this.options[n] || s) && (this.options[n] = {})), this.options[i] = de((l = this.options[i]) !== null && l !== void 0 ? l : {}, e), (!this.options[n] || s) && (this.options[n] = de((a = this.options[n]) !== null && a !== void 0 ? a : {}, e))))
	}
}
class Kh extends Eo {
	constructor() {
		super(), this.destroy = "none", this.enable = !1, this.speed = 5, this.startValue = "random", this.sync = !1
	}
	get size_min() {
		return this.minimumValue
	}
	set size_min(e) {
		this.minimumValue = e
	}
	load(e) {
		var i;
		super.load(e), e && (e.destroy !== void 0 && (this.destroy = e.destroy), e.enable !== void 0 && (this.enable = e.enable), this.minimumValue = (i = e.minimumValue) !== null && i !== void 0 ? i : e.size_min, e.speed !== void 0 && (this.speed = e.speed), e.startValue !== void 0 && (this.startValue = e.startValue), e.sync !== void 0 && (this.sync = e.sync))
	}
}
class Yh extends Ne {
	constructor() {
		super(), this.animation = new Kh, this.random.minimumValue = 1, this.value = 3
	}
	get anim() {
		return this.animation
	}
	set anim(e) {
		this.animation = e
	}
	load(e) {
		var i;
		if (super.load(e), !e) return;
		const n = (i = e.animation) !== null && i !== void 0 ? i : e.anim;
		n !== void 0 && (this.animation.load(n), this.value = V(this.value, this.animation.enable ? this.animation.minimumValue : void 0))
	}
}
class ms {
	constructor() {
		this.width = 0
	}
	load(e) {
		!e || (e.color !== void 0 && (this.color = Bt.create(this.color, e.color)), e.width !== void 0 && (this.width = e.width), e.opacity !== void 0 && (this.opacity = e.opacity))
	}
}
class Xh {
	constructor() {
		this.enable = !1, this.speed = 0, this.sync = !1
	}
	load(e) {
		!e || (e.enable !== void 0 && (this.enable = e.enable), e.speed !== void 0 && (this.speed = V(e.speed)), e.sync !== void 0 && (this.sync = e.sync))
	}
}
class Jh extends Ne {
	constructor() {
		super(), this.animation = new Xh, this.direction = "clockwise", this.enable = !1, this.value = 0
	}
	load(e) {
		super.load(e), e && (this.animation.load(e.animation), e.direction !== void 0 && (this.direction = e.direction), e.enable !== void 0 && (this.enable = e.enable))
	}
}
class Er {
	constructor() {
		this.enable = !1, this.frequency = .05, this.opacity = 1
	}
	load(e) {
		!e || (e.color !== void 0 && (this.color = ne.create(this.color, e.color)), e.enable !== void 0 && (this.enable = e.enable), e.frequency !== void 0 && (this.frequency = e.frequency), e.opacity !== void 0 && (this.opacity = V(e.opacity)))
	}
}
class Qh {
	constructor() {
		this.lines = new Er, this.particles = new Er
	}
	load(e) {
		!e || (this.lines.load(e.lines), this.particles.load(e.particles))
	}
}
class Zh {
	constructor() {
		this.distance = 5, this.enable = !1, this.speed = 50
	}
	load(e) {
		!e || (e.distance !== void 0 && (this.distance = V(e.distance)), e.enable !== void 0 && (this.enable = e.enable), e.speed !== void 0 && (this.speed = V(e.speed)))
	}
}
class ef extends Ne {
	constructor() {
		super(), this.opacityRate = 1, this.sizeRate = 1, this.velocityRate = 1
	}
	load(e) {
		super.load(e), e && (e.opacityRate !== void 0 && (this.opacityRate = e.opacityRate), e.sizeRate !== void 0 && (this.sizeRate = e.sizeRate), e.velocityRate !== void 0 && (this.velocityRate = e.velocityRate))
	}
}
class tf {
	constructor() {
		this.bounce = new fa, this.collisions = new vh, this.color = new Bt, this.color.value = "#fff", this.destroy = new wh, this.gradient = [], this.groups = {}, this.life = new Mh, this.links = new Ch, this.move = new Fh, this.number = new Vh, this.opacity = new Lh, this.orbit = new $h, this.reduceDuplicates = !1, this.repulse = new Nh, this.roll = new Wh, this.rotate = new Gh, this.shadow = new qh, this.shape = new pa, this.size = new Yh, this.stroke = new ms, this.tilt = new Jh, this.twinkle = new Qh, this.wobble = new Zh, this.zIndex = new ef
	}
	get line_linked() {
		return this.links
	}
	set line_linked(e) {
		this.links = e
	}
	get lineLinked() {
		return this.links
	}
	set lineLinked(e) {
		this.links = e
	}
	load(e) {
		var i, n, s, o, r, l, a, c;
		if (!e) return;
		this.bounce.load(e.bounce), this.color.load(Bt.create(this.color, e.color)), this.destroy.load(e.destroy), this.life.load(e.life);
		const u = (n = (i = e.links) !== null && i !== void 0 ? i : e.lineLinked) !== null && n !== void 0 ? n : e.line_linked;
		if (u !== void 0 && this.links.load(u), e.groups !== void 0)
			for (const p in e.groups) {
				const y = e.groups[p];
				y !== void 0 && (this.groups[p] = de((s = this.groups[p]) !== null && s !== void 0 ? s : {}, y))
			}
		this.move.load(e.move), this.number.load(e.number), this.opacity.load(e.opacity), this.orbit.load(e.orbit), e.reduceDuplicates !== void 0 && (this.reduceDuplicates = e.reduceDuplicates), this.repulse.load(e.repulse), this.roll.load(e.roll), this.rotate.load(e.rotate), this.shape.load(e.shape), this.size.load(e.size), this.shadow.load(e.shadow), this.tilt.load(e.tilt), this.twinkle.load(e.twinkle), this.wobble.load(e.wobble), this.zIndex.load(e.zIndex);
		const d = (r = (o = e.move) === null || o === void 0 ? void 0 : o.collisions) !== null && r !== void 0 ? r : (l = e.move) === null || l === void 0 ? void 0 : l.bounce;
		d !== void 0 && (this.collisions.enable = d), this.collisions.load(e.collisions);
		const h = (a = e.stroke) !== null && a !== void 0 ? a : (c = e.shape) === null || c === void 0 ? void 0 : c.stroke;
		h && (h instanceof Array ? this.stroke = h.map(p => {
			const y = new ms;
			return y.load(p), y
		}) : (this.stroke instanceof Array && (this.stroke = new ms), this.stroke.load(h)));
		const f = e.gradient;
		f && (f instanceof Array ? this.gradient = f.map(p => {
			const y = new _r;
			return y.load(p), y
		}) : (this.gradient instanceof Array && (this.gradient = new _r), this.gradient.load(f)))
	}
}

function Cr(t, e, i, n, s, o) {
	const r = {
		bounced: !1
	};
	return e.min < n.min || e.min > n.max || e.max < n.min || e.max > n.max || (t.max >= i.min && t.max <= (i.max + i.min) / 2 && s > 0 || t.min <= i.max && t.min > (i.max + i.min) / 2 && s < 0) && (r.velocity = s * -o, r.bounced = !0), r
}

function Or(t, e) {
	if (!(e instanceof Array)) return t.matches(e);
	for (const i of e)
		if (t.matches(i)) return !0;
	return !1
}

function Vt() {
	return typeof window == "undefined" || !window || typeof window.document == "undefined" || !window.document
}

function nf() {
	return Vt() ? t => setTimeout(t) : t => (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.setTimeout)(t)
}

function sf() {
	return Vt() ? t => clearTimeout(t) : t => (window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.clearTimeout)(t)
}

function re(t, e) {
	return t === e || e instanceof Array && e.indexOf(t) > -1
}
async function Sr(t, e) {
	try {
		await document.fonts.load(`${e!=null?e:"400"} 36px '${t!=null?t:"Verdana"}'`)
	} catch {}
}

function of (t) {
	return Math.floor(Math.random() * t.length)
}

function ze(t, e, i = !0) {
	const n = e !== void 0 && i ? e % t.length : of (t);
	return t[n]
}

function rn(t, e, i, n, s) {
	return rf(ln(t, n != null ? n : 0), e, i, s)
}

function rf(t, e, i, n) {
	let s = !0;
	return (!n || n === "bottom") && (s = t.top < e.height + i.x), s && (!n || n === "left") && (s = t.right > i.x), s && (!n || n === "right") && (s = t.left < e.width + i.y), s && (!n || n === "top") && (s = t.bottom > i.y), s
}

function ln(t, e) {
	return {
		bottom: t.y + e,
		left: t.x - e,
		right: t.x + e,
		top: t.y - e
	}
}

function de(t, ...e) {
	for (const i of e) {
		if (i == null) continue;
		if (typeof i != "object") {
			t = i;
			continue
		}
		const n = Array.isArray(i);
		n && (typeof t != "object" || !t || !Array.isArray(t)) ? t = [] : !n && (typeof t != "object" || !t || Array.isArray(t)) && (t = {});
		for (const s in i) {
			if (s === "__proto__") continue;
			const o = i,
				r = o[s],
				l = typeof r == "object",
				a = t;
			a[s] = l && Array.isArray(r) ? r.map(c => de(a[s], c)) : de(a[s], r)
		}
	}
	return t
}

function Co(t, e) {
	return e instanceof Array ? !!e.find(i => i.enable && re(t, i.mode)) : re(t, e.mode)
}

function Oo(t, e, i) {
	if (e instanceof Array)
		for (const n of e) {
			const s = n.mode;
			n.enable && re(t, s) && Tr(n, i)
		} else {
			const n = e.mode;
			e.enable && re(t, n) && Tr(e, i)
		}
}

function Tr(t, e) {
	const i = t.selectors;
	if (i instanceof Array)
		for (const n of i) e(n, t);
	else e(i, t)
}

function ya(t, e) {
	if (!(!e || !t)) {
		if (t instanceof Array) return t.find(i => Or(e, i.selectors));
		if (Or(e, t.selectors)) return t
	}
}

function Ws(t) {
	return {
		position: t.getPosition(),
		radius: t.getRadius(),
		mass: t.getMass(),
		velocity: t.velocity,
		factor: ie.create(_t(t.options.bounce.horizontal), _t(t.options.bounce.vertical))
	}
}

function ma(t, e) {
	const {
		x: i,
		y: n
	} = t.velocity.sub(e.velocity), [s, o] = [t.position, e.position], {
		dx: r,
		dy: l
	} = _e(o, s);
	if (i * r + n * l < 0) return;
	const a = -Math.atan2(l, r),
		c = t.mass,
		u = e.mass,
		d = t.velocity.rotate(a),
		h = e.velocity.rotate(a),
		f = xr(d, h, c, u),
		p = xr(h, d, c, u),
		y = f.rotate(-a),
		v = p.rotate(-a);
	t.velocity.x = y.x * t.factor.x, t.velocity.y = y.y * t.factor.y, e.velocity.x = v.x * e.factor.x, e.velocity.y = v.y * e.factor.y
}

function lf(t, e) {
	const i = t.getPosition(),
		n = t.getRadius(),
		s = ln(i, n),
		o = Cr({
			min: s.left,
			max: s.right
		}, {
			min: s.top,
			max: s.bottom
		}, {
			min: e.left,
			max: e.right
		}, {
			min: e.top,
			max: e.bottom
		}, t.velocity.x, _t(t.options.bounce.horizontal));
	o.bounced && (o.velocity !== void 0 && (t.velocity.x = o.velocity), o.position !== void 0 && (t.position.x = o.position));
	const r = Cr({
		min: s.top,
		max: s.bottom
	}, {
		min: s.left,
		max: s.right
	}, {
		min: e.top,
		max: e.bottom
	}, {
		min: e.left,
		max: e.right
	}, t.velocity.y, _t(t.options.bounce.vertical));
	r.bounced && (r.velocity !== void 0 && (t.velocity.y = r.velocity), r.position !== void 0 && (t.position.y = r.position))
}

function va(t, ...e) {
	for (const i of e) t.load(i)
}

function Ti(t, ...e) {
	const i = new ah(t);
	return va(i, ...e), i
}

function So(...t) {
	const e = new tf;
	return va(e, ...t), e
}
const Ui = "generated",
	Hn = "random",
	af = "mid",
	kr = "touchend",
	cf = "mousedown",
	uf = "mouseup",
	si = "mousemove",
	df = "touchstart",
	hf = "touchmove",
	Us = "mouseleave",
	ff = "mouseout",
	pf = "touchcancel",
	yf = "resize",
	mf = "visibilitychange",
	fn = "No polygon data loaded.",
	vf = "No polygon found, you need to specify SVG url in config.";

function vs(t, e, i) {
	let n = i;
	return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
}

function ga(t) {
	if (t.startsWith("rgb")) {
		const i = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.]+)\s*)?\)/i.exec(t);
		return i ? {
			a: i.length > 4 ? parseFloat(i[5]) : 1,
			b: parseInt(i[3], 10),
			g: parseInt(i[2], 10),
			r: parseInt(i[1], 10)
		} : void 0
	} else if (t.startsWith("hsl")) {
		const i = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i.exec(t);
		return i ? xf({
			a: i.length > 4 ? parseFloat(i[5]) : 1,
			h: parseInt(i[1], 10),
			l: parseInt(i[3], 10),
			s: parseInt(i[2], 10)
		}) : void 0
	} else if (t.startsWith("hsv")) {
		const i = /hsva?\(\s*(\d+)°\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i.exec(t);
		return i ? wf({
			a: i.length > 4 ? parseFloat(i[5]) : 1,
			h: parseInt(i[1], 10),
			s: parseInt(i[2], 10),
			v: parseInt(i[3], 10)
		}) : void 0
	} else {
		const e = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,
			i = t.replace(e, (o, r, l, a, c) => r + r + l + l + a + a + (c !== void 0 ? c + c : "")),
			s = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(i);
		return s ? {
			a: s[4] !== void 0 ? parseInt(s[4], 16) / 255 : 1,
			b: parseInt(s[3], 16),
			g: parseInt(s[2], 16),
			r: parseInt(s[1], 16)
		} : void 0
	}
}

function Be(t, e, i = !0) {
	var n, s, o;
	if (t === void 0) return;
	const r = typeof t == "string" ? {
		value: t
	} : t;
	let l;
	if (typeof r.value == "string") l = r.value === Hn ? wa() : bf(r.value);
	else if (r.value instanceof Array) {
		const a = ze(r.value, e, i);
		l = Be({
			value: a
		})
	} else {
		const a = r.value,
			c = (n = a.rgb) !== null && n !== void 0 ? n : r.value;
		if (c.r !== void 0) l = c;
		else {
			const u = (s = a.hsl) !== null && s !== void 0 ? s : r.value;
			if (u.h !== void 0 && u.l !== void 0) l = tn(u);
			else {
				const d = (o = a.hsv) !== null && o !== void 0 ? o : r.value;
				d.h !== void 0 && d.v !== void 0 && (l = xa(d))
			}
		}
	}
	return l
}

function Nt(t, e, i = !0) {
	const n = Be(t, e, i);
	return n !== void 0 ? ba(n) : void 0
}

function ba(t) {
	const e = t.r / 255,
		i = t.g / 255,
		n = t.b / 255,
		s = Math.max(e, i, n),
		o = Math.min(e, i, n),
		r = {
			h: 0,
			l: (s + o) / 2,
			s: 0
		};
	return s !== o && (r.s = r.l < .5 ? (s - o) / (s + o) : (s - o) / (2 - s - o), r.h = e === s ? (i - n) / (s - o) : r.h = i === s ? 2 + (n - e) / (s - o) : 4 + (e - i) / (s - o)), r.l *= 100, r.s *= 100, r.h *= 60, r.h < 0 && (r.h += 360), r
}

function gf(t) {
	var e;
	return (e = ga(t)) === null || e === void 0 ? void 0 : e.a
}

function bf(t) {
	return ga(t)
}

function tn(t) {
	const e = {
			b: 0,
			g: 0,
			r: 0
		},
		i = {
			h: t.h / 360,
			l: t.l / 100,
			s: t.s / 100
		};
	if (i.s === 0) e.b = i.l, e.g = i.l, e.r = i.l;
	else {
		const n = i.l < .5 ? i.l * (1 + i.s) : i.l + i.s - i.l * i.s,
			s = 2 * i.l - n;
		e.r = vs(s, n, i.h + 1 / 3), e.g = vs(s, n, i.h), e.b = vs(s, n, i.h - 1 / 3)
	}
	return e.r = Math.floor(e.r * 255), e.g = Math.floor(e.g * 255), e.b = Math.floor(e.b * 255), e
}

function xf(t) {
	const e = tn(t);
	return {
		a: t.a,
		b: e.b,
		g: e.g,
		r: e.r
	}
}

function xa(t) {
	const e = {
			b: 0,
			g: 0,
			r: 0
		},
		i = {
			h: t.h / 60,
			s: t.s / 100,
			v: t.v / 100
		},
		n = i.v * i.s,
		s = n * (1 - Math.abs(i.h % 2 - 1));
	let o;
	if (i.h >= 0 && i.h <= 1 ? o = {
			r: n,
			g: s,
			b: 0
		} : i.h > 1 && i.h <= 2 ? o = {
			r: s,
			g: n,
			b: 0
		} : i.h > 2 && i.h <= 3 ? o = {
			r: 0,
			g: n,
			b: s
		} : i.h > 3 && i.h <= 4 ? o = {
			r: 0,
			g: s,
			b: n
		} : i.h > 4 && i.h <= 5 ? o = {
			r: s,
			g: 0,
			b: n
		} : i.h > 5 && i.h <= 6 && (o = {
			r: n,
			g: 0,
			b: s
		}), o) {
		const r = i.v - n;
		e.r = Math.floor((o.r + r) * 255), e.g = Math.floor((o.g + r) * 255), e.b = Math.floor((o.b + r) * 255)
	}
	return e
}

function wf(t) {
	const e = xa(t);
	return {
		a: t.a,
		b: e.b,
		g: e.g,
		r: e.r
	}
}

function wa(t) {
	const e = t != null ? t : 0;
	return {
		b: Math.floor(Pe(V(e, 256))),
		g: Math.floor(Pe(V(e, 256))),
		r: Math.floor(Pe(V(e, 256)))
	}
}

function nt(t, e) {
	return `rgba(${t.r}, ${t.g}, ${t.b}, ${e!=null?e:1})`
}

function bi(t, e) {
	return `hsla(${t.h}, ${t.s}%, ${t.l}%, ${e!=null?e:1})`
}

function To(t, e, i, n) {
	let s = t,
		o = e;
	return s.r === void 0 && (s = tn(t)), o.r === void 0 && (o = tn(e)), {
		b: fs(s.b, o.b, i, n),
		g: fs(s.g, o.g, i, n),
		r: fs(s.r, o.r, i, n)
	}
}

function Gs(t, e, i) {
	var n, s;
	if (i === Hn) return wa();
	if (i === "mid") {
		const o = (n = t.getFillColor()) !== null && n !== void 0 ? n : t.getStrokeColor(),
			r = (s = e == null ? void 0 : e.getFillColor()) !== null && s !== void 0 ? s : e == null ? void 0 : e.getStrokeColor();
		if (o && r && e) return To(o, r, t.getRadius(), e.getRadius()); {
			const l = o != null ? o : r;
			if (l) return tn(l)
		}
	} else return i
}

function Pa(t, e, i) {
	const n = typeof t == "string" ? t : t.value;
	return n === Hn ? i ? Be({
		value: n
	}) : e ? Hn : af : Be({
		value: n
	})
}

function Ar(t) {
	return t !== void 0 ? {
		h: t.h.value,
		s: t.s.value,
		l: t.l.value
	} : void 0
}

function _a(t, e, i) {
	const n = {
		h: {
			enable: !1,
			value: t.h
		},
		s: {
			enable: !1,
			value: t.s
		},
		l: {
			enable: !1,
			value: t.l
		}
	};
	return e && (gs(n.h, e.h, i), gs(n.s, e.s, i), gs(n.l, e.l, i)), n
}

function gs(t, e, i) {
	if (t.enable = e.enable, t.enable) {
		if (t.velocity = U(e.speed) / 100 * i, e.sync) return;
		t.status = 0, t.velocity *= Math.random(), t.value && (t.value *= Math.random())
	} else t.velocity = 0
}

function Gi(t, e, i) {
	t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(i.x, i.y), t.closePath()
}

function Pf(t, e, i, n) {
	t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(i.x, i.y), t.lineTo(n.x, n.y), t.closePath()
}

function _f(t, e, i) {
	t.save(), t.fillStyle = i != null ? i : "rgba(0,0,0,0)", t.fillRect(0, 0, e.width, e.height), t.restore()
}

function bs(t, e) {
	t.clearRect(0, 0, e.width, e.height)
}

function Mf(t, e, i, n, s) {
	t.save(), Gi(t, n, s), t.lineWidth = e, t.strokeStyle = i, t.stroke(), t.restore()
}

function jf(t, e, i, n) {
	const s = Math.floor(i.getRadius() / e.getRadius()),
		o = e.getFillColor(),
		r = i.getFillColor();
	if (!o || !r) return;
	const l = e.getPosition(),
		a = i.getPosition(),
		c = To(o, r, e.getRadius(), i.getRadius()),
		u = t.createLinearGradient(l.x, l.y, a.x, a.y);
	return u.addColorStop(0, bi(o, n)), u.addColorStop(s > 1 ? 1 : s, nt(c, n)), u.addColorStop(1, bi(r, n)), u
}

function Ef(t, e, i, n, s, o) {
	t.save(), Gi(t, i, n), t.strokeStyle = nt(s, o), t.lineWidth = e, t.stroke(), t.restore()
}

function Cf(t, e, i, n, s, o, r, l, a, c) {
	var u, d, h, f;
	const p = i.getPosition(),
		y = i.options.tilt,
		v = i.options.roll;
	if (e.save(), y.enable || v.enable) {
		const E = v.enable && i.roll,
			R = y.enable && i.tilt,
			I = E && (v.mode === "horizontal" || v.mode === "both"),
			A = E && (v.mode === "vertical" || v.mode === "both");
		e.setTransform(I ? Math.cos(i.roll.angle) : 1, R ? Math.cos(i.tilt.value) * i.tilt.cosDirection : 0, R ? Math.sin(i.tilt.value) * i.tilt.sinDirection : 0, A ? Math.sin(i.roll.angle) : 1, p.x, p.y)
	} else e.translate(p.x, p.y);
	e.beginPath();
	const g = ((d = (u = i.rotate) === null || u === void 0 ? void 0 : u.value) !== null && d !== void 0 ? d : 0) + (i.options.rotate.path ? i.velocity.angle : 0);
	g !== 0 && e.rotate(g), o && (e.globalCompositeOperation = r);
	const x = i.shadowColor;
	c.enable && x && (e.shadowBlur = c.blur, e.shadowColor = nt(x), e.shadowOffsetX = c.offset.x, e.shadowOffsetY = c.offset.y), s.fill && (e.fillStyle = s.fill);
	const P = i.stroke;
	e.lineWidth = (h = i.strokeWidth) !== null && h !== void 0 ? h : 0, s.stroke && (e.strokeStyle = s.stroke), Of(t, e, i, l, a, n), ((f = P == null ? void 0 : P.width) !== null && f !== void 0 ? f : 0) > 0 && e.stroke(), i.close && e.closePath(), i.fill && e.fill(), e.restore(), e.save(), y.enable && i.tilt ? e.setTransform(1, Math.cos(i.tilt.value) * i.tilt.cosDirection, Math.sin(i.tilt.value) * i.tilt.sinDirection, 1, p.x, p.y) : e.translate(p.x, p.y), g !== 0 && e.rotate(g), o && (e.globalCompositeOperation = r), Sf(t, e, i, l, a, n), e.restore()
}

function Of(t, e, i, n, s, o) {
	if (!i.shape) return;
	const r = t.drawers.get(i.shape);
	!r || r.draw(e, i, n, s, o, t.retina.pixelRatio)
}

function Sf(t, e, i, n, s, o) {
	if (!i.shape) return;
	const r = t.drawers.get(i.shape);
	!(r != null && r.afterEffect) || r.afterEffect(e, i, n, s, o, t.retina.pixelRatio)
}

function Tf(t, e, i) {
	!e.draw || (t.save(), e.draw(t, i), t.restore())
}

function kf(t, e, i, n) {
	!e.drawParticle || (t.save(), e.drawParticle(t, i, n), t.restore())
}

function Af(t, e, i) {
	return {
		h: t.h,
		s: t.s,
		l: t.l + (e === "darken" ? -1 : 1) * i
	}
}
class zf {
	constructor(e) {
		this.container = e, this.size = {
			height: 0,
			width: 0
		}, this.context = null, this.generatedCanvas = !1
	}
	init() {
		this.resize(), this.initStyle(), this.initCover(), this.initTrail(), this.initBackground(), this.paint()
	}
	loadCanvas(e) {
		var i;
		this.generatedCanvas && ((i = this.element) === null || i === void 0 || i.remove()), this.generatedCanvas = e.dataset && Ui in e.dataset ? e.dataset[Ui] === "true" : this.generatedCanvas, this.element = e, this.originalStyle = de({}, this.element.style), this.size.height = e.offsetHeight, this.size.width = e.offsetWidth, this.context = this.element.getContext("2d"), this.container.retina.init(), this.initBackground()
	}
	destroy() {
		var e;
		this.generatedCanvas && ((e = this.element) === null || e === void 0 || e.remove()), this.draw(i => {
			bs(i, this.size)
		})
	}
	paint() {
		const e = this.container.actualOptions;
		this.draw(i => {
			e.backgroundMask.enable && e.backgroundMask.cover ? (bs(i, this.size), this.paintBase(this.coverColorStyle)) : this.paintBase()
		})
	}
	clear() {
		const e = this.container.actualOptions,
			i = e.particles.move.trail;
		e.backgroundMask.enable ? this.paint() : i.enable && i.length > 0 && this.trailFillColor ? this.paintBase(nt(this.trailFillColor, 1 / i.length)) : this.draw(n => {
			bs(n, this.size)
		})
	}
	async windowResize() {
		if (!this.element) return;
		this.resize();
		const e = this.container,
			i = e.updateActualOptions();
		e.particles.setDensity();
		for (const [, n] of e.plugins) n.resize !== void 0 && n.resize();
		i && await e.refresh()
	}
	resize() {
		if (!this.element) return;
		const e = this.container,
			i = e.retina.pixelRatio,
			n = e.canvas.size,
			s = {
				width: this.element.offsetWidth * i,
				height: this.element.offsetHeight * i
			};
		if (s.height === n.height && s.width === n.width && s.height === this.element.height && s.width === this.element.width) return;
		const o = Object.assign({}, n);
		this.element.width = n.width = this.element.offsetWidth * i, this.element.height = n.height = this.element.offsetHeight * i, this.container.started && (this.resizeFactor = {
			width: n.width / o.width,
			height: n.height / o.height
		})
	}
	drawConnectLine(e, i) {
		this.draw(n => {
			var s;
			const o = this.lineStyle(e, i);
			if (!o) return;
			const r = e.getPosition(),
				l = i.getPosition();
			Mf(n, (s = e.retina.linksWidth) !== null && s !== void 0 ? s : this.container.retina.linksWidth, o, r, l)
		})
	}
	drawGrabLine(e, i, n, s) {
		const o = this.container;
		this.draw(r => {
			var l;
			const a = e.getPosition();
			Ef(r, (l = e.retina.linksWidth) !== null && l !== void 0 ? l : o.retina.linksWidth, a, s, i, n)
		})
	}
	drawParticle(e, i) {
		var n, s, o, r, l, a;
		if (e.spawning || e.destroyed) return;
		const c = e.getRadius();
		if (c <= 0) return;
		const u = e.getFillColor(),
			d = (n = e.getStrokeColor()) !== null && n !== void 0 ? n : u;
		if (!u && !d) return;
		let [h, f] = this.getPluginParticleColors(e);
		(!h || !f) && (h || (h = u || void 0), f || (f = d || void 0));
		const p = this.container.actualOptions,
			y = e.options.zIndex,
			v = (1 - e.zIndexFactor) ** y.opacityRate,
			g = (r = (s = e.bubble.opacity) !== null && s !== void 0 ? s : (o = e.opacity) === null || o === void 0 ? void 0 : o.value) !== null && r !== void 0 ? r : 1,
			x = (a = (l = e.stroke) === null || l === void 0 ? void 0 : l.opacity) !== null && a !== void 0 ? a : g,
			P = g * v,
			E = x * v,
			R = {
				fill: h ? bi(h, P) : void 0
			};
		R.stroke = f ? bi(f, E) : R.fill, this.draw(I => {
			const A = (1 - e.zIndexFactor) ** y.sizeRate,
				W = this.container;
			for (const N of W.particles.updaters)
				if (N.beforeDraw && N.beforeDraw(e), N.getColorStyles) {
					const {
						fill: le,
						stroke: G
					} = N.getColorStyles(e, I, c, P);
					le && (R.fill = le), G && (R.stroke = G)
				} Cf(W, I, e, i, R, p.backgroundMask.enable, p.backgroundMask.composite, c * A, P, e.options.shadow);
			for (const N of W.particles.updaters) N.afterDraw && N.afterDraw(e)
		})
	}
	drawPlugin(e, i) {
		this.draw(n => {
			Tf(n, e, i)
		})
	}
	drawParticlePlugin(e, i, n) {
		this.draw(s => {
			kf(s, e, i, n)
		})
	}
	initBackground() {
		const e = this.container.actualOptions,
			i = e.background,
			n = this.element,
			s = n == null ? void 0 : n.style;
		if (!!s) {
			if (i.color) {
				const o = Be(i.color);
				s.backgroundColor = o ? nt(o, i.opacity) : ""
			} else s.backgroundColor = "";
			s.backgroundImage = i.image || "", s.backgroundPosition = i.position || "", s.backgroundRepeat = i.repeat || "", s.backgroundSize = i.size || ""
		}
	}
	draw(e) {
		if (!!this.context) return e(this.context)
	}
	initCover() {
		const e = this.container.actualOptions,
			i = e.backgroundMask.cover,
			n = i.color,
			s = Be(n);
		if (s) {
			const o = {
				r: s.r,
				g: s.g,
				b: s.b,
				a: i.opacity
			};
			this.coverColorStyle = nt(o, o.a)
		}
	}
	initTrail() {
		const e = this.container.actualOptions,
			i = e.particles.move.trail,
			n = Be(i.fillColor);
		if (n) {
			const s = e.particles.move.trail;
			this.trailFillColor = {
				r: n.r,
				g: n.g,
				b: n.b,
				a: 1 / s.length
			}
		}
	}
	getPluginParticleColors(e) {
		let i, n;
		for (const [, s] of this.container.plugins)
			if (!i && s.particleFillColor && (i = Nt(s.particleFillColor(e))), !n && s.particleStrokeColor && (n = Nt(s.particleStrokeColor(e))), i && n) break;
		return [i, n]
	}
	initStyle() {
		const e = this.element,
			i = this.container.actualOptions;
		if (!e) return;
		const n = this.originalStyle;
		i.fullScreen.enable ? (this.originalStyle = de({}, e.style), e.style.setProperty("position", "fixed", "important"), e.style.setProperty("z-index", i.fullScreen.zIndex.toString(10), "important"), e.style.setProperty("top", "0", "important"), e.style.setProperty("left", "0", "important"), e.style.setProperty("width", "100%", "important"), e.style.setProperty("height", "100%", "important")) : n && (e.style.position = n.position, e.style.zIndex = n.zIndex, e.style.top = n.top, e.style.left = n.left, e.style.width = n.width, e.style.height = n.height);
		for (const s in i.style) {
			if (!s || !i.style) continue;
			const o = i.style[s];
			!o || e.style.setProperty(s, o, "important")
		}
	}
	paintBase(e) {
		this.draw(i => {
			_f(i, this.size, e)
		})
	}
	lineStyle(e, i) {
		return this.draw(n => {
			const s = this.container.actualOptions,
				o = s.interactivity.modes.connect;
			return jf(n, e, i, o.links.opacity)
		})
	}
}

function Je(t, e, i, n, s) {
	if (n) {
		let o = {
			passive: !0
		};
		typeof s == "boolean" ? o.capture = s : s !== void 0 && (o = s), t.addEventListener(e, i, o)
	} else {
		const o = s;
		t.removeEventListener(e, i, o)
	}
}
class Rf {
	constructor(e) {
		this.container = e, this.canPush = !0, this.mouseMoveHandler = i => this.mouseTouchMove(i), this.touchStartHandler = i => this.mouseTouchMove(i), this.touchMoveHandler = i => this.mouseTouchMove(i), this.touchEndHandler = () => this.mouseTouchFinish(), this.mouseLeaveHandler = () => this.mouseTouchFinish(), this.touchCancelHandler = () => this.mouseTouchFinish(), this.touchEndClickHandler = i => this.mouseTouchClick(i), this.mouseUpHandler = i => this.mouseTouchClick(i), this.mouseDownHandler = () => this.mouseDown(), this.visibilityChangeHandler = () => this.handleVisibilityChange(), this.themeChangeHandler = i => this.handleThemeChange(i), this.oldThemeChangeHandler = i => this.handleThemeChange(i), this.resizeHandler = () => this.handleWindowResize()
	}
	addListeners() {
		this.manageListeners(!0)
	}
	removeListeners() {
		this.manageListeners(!1)
	}
	manageListeners(e) {
		var i;
		const n = this.container,
			s = n.actualOptions,
			o = s.interactivity.detectsOn;
		let r = Us;
		if (o === "window") n.interactivity.element = window, r = ff;
		else if (o === "parent" && n.canvas.element) {
			const u = n.canvas.element;
			n.interactivity.element = (i = u.parentElement) !== null && i !== void 0 ? i : u.parentNode
		} else n.interactivity.element = n.canvas.element;
		const l = !Vt() && typeof matchMedia != "undefined" && matchMedia("(prefers-color-scheme: dark)");
		l && (l.addEventListener !== void 0 ? Je(l, "change", this.themeChangeHandler, e) : l.addListener !== void 0 && (e ? l.addListener(this.oldThemeChangeHandler) : l.removeListener(this.oldThemeChangeHandler)));
		const a = n.interactivity.element;
		if (!a) return;
		const c = a;
		(s.interactivity.events.onHover.enable || s.interactivity.events.onClick.enable) && (Je(a, si, this.mouseMoveHandler, e), Je(a, df, this.touchStartHandler, e), Je(a, hf, this.touchMoveHandler, e), s.interactivity.events.onClick.enable ? (Je(a, kr, this.touchEndClickHandler, e), Je(a, uf, this.mouseUpHandler, e), Je(a, cf, this.mouseDownHandler, e)) : Je(a, kr, this.touchEndHandler, e), Je(a, r, this.mouseLeaveHandler, e), Je(a, pf, this.touchCancelHandler, e)), n.canvas.element && (n.canvas.element.style.pointerEvents = c === n.canvas.element ? "initial" : "none"), s.interactivity.events.resize && (typeof ResizeObserver != "undefined" ? this.resizeObserver && !e ? (n.canvas.element && this.resizeObserver.unobserve(n.canvas.element), this.resizeObserver.disconnect(), delete this.resizeObserver) : !this.resizeObserver && e && n.canvas.element && (this.resizeObserver = new ResizeObserver(u => {
			!u.find(h => h.target === n.canvas.element) || this.handleWindowResize()
		}), this.resizeObserver.observe(n.canvas.element)) : Je(window, yf, this.resizeHandler, e)), document && Je(document, mf, this.visibilityChangeHandler, e, !1)
	}
	handleWindowResize() {
		this.resizeTimeout && (clearTimeout(this.resizeTimeout), delete this.resizeTimeout), this.resizeTimeout = setTimeout(async () => {
			var e;
			return (e = this.container.canvas) === null || e === void 0 ? void 0 : e.windowResize()
		}, 500)
	}
	handleVisibilityChange() {
		const e = this.container,
			i = e.actualOptions;
		this.mouseTouchFinish(), i.pauseOnBlur && (document != null && document.hidden ? (e.pageHidden = !0, e.pause()) : (e.pageHidden = !1, e.getAnimationStatus() ? e.play(!0) : e.draw(!0)))
	}
	mouseDown() {
		const e = this.container.interactivity;
		if (e) {
			const i = e.mouse;
			i.clicking = !0, i.downPosition = i.position
		}
	}
	mouseTouchMove(e) {
		var i, n, s, o, r, l, a;
		const c = this.container,
			u = c.actualOptions;
		if (!(!((i = c.interactivity) === null || i === void 0) && i.element)) return;
		c.interactivity.mouse.inside = !0;
		let d;
		const h = c.canvas.element;
		if (e.type.startsWith("mouse")) {
			this.canPush = !0;
			const p = e;
			if (c.interactivity.element === window) {
				if (h) {
					const y = h.getBoundingClientRect();
					d = {
						x: p.clientX - y.left,
						y: p.clientY - y.top
					}
				}
			} else if (u.interactivity.detectsOn === "parent") {
				const y = p.target,
					v = p.currentTarget,
					g = c.canvas.element;
				if (y && v && g) {
					const x = y.getBoundingClientRect(),
						P = v.getBoundingClientRect(),
						E = g.getBoundingClientRect();
					d = {
						x: p.offsetX + 2 * x.left - (P.left + E.left),
						y: p.offsetY + 2 * x.top - (P.top + E.top)
					}
				} else d = {
					x: (n = p.offsetX) !== null && n !== void 0 ? n : p.clientX,
					y: (s = p.offsetY) !== null && s !== void 0 ? s : p.clientY
				}
			} else p.target === c.canvas.element && (d = {
				x: (o = p.offsetX) !== null && o !== void 0 ? o : p.clientX,
				y: (r = p.offsetY) !== null && r !== void 0 ? r : p.clientY
			})
		} else {
			this.canPush = e.type !== "touchmove";
			const p = e,
				y = p.touches[p.touches.length - 1],
				v = h == null ? void 0 : h.getBoundingClientRect();
			d = {
				x: y.clientX - ((l = v == null ? void 0 : v.left) !== null && l !== void 0 ? l : 0),
				y: y.clientY - ((a = v == null ? void 0 : v.top) !== null && a !== void 0 ? a : 0)
			}
		}
		const f = c.retina.pixelRatio;
		d && (d.x *= f, d.y *= f), c.interactivity.mouse.position = d, c.interactivity.status = si
	}
	mouseTouchFinish() {
		const e = this.container.interactivity;
		if (!e) return;
		const i = e.mouse;
		delete i.position, delete i.clickPosition, delete i.downPosition, e.status = Us, i.inside = !1, i.clicking = !1
	}
	mouseTouchClick(e) {
		const i = this.container,
			n = i.actualOptions,
			s = i.interactivity.mouse;
		s.inside = !0;
		let o = !1;
		const r = s.position;
		if (!(!r || !n.interactivity.events.onClick.enable)) {
			for (const [, l] of i.plugins)
				if (!!l.clickPositionValid && (o = l.clickPositionValid(r), o)) break;
			o || this.doMouseTouchClick(e), s.clicking = !1
		}
	}
	doMouseTouchClick(e) {
		const i = this.container,
			n = i.actualOptions;
		if (this.canPush) {
			const s = i.interactivity.mouse.position;
			if (!s) return;
			i.interactivity.mouse.clickPosition = {
				x: s.x,
				y: s.y
			}, i.interactivity.mouse.clickTime = new Date().getTime();
			const o = n.interactivity.events.onClick;
			if (o.mode instanceof Array)
				for (const r of o.mode) this.handleClickMode(r);
			else this.handleClickMode(o.mode)
		}
		e.type === "touchend" && setTimeout(() => this.mouseTouchFinish(), 500)
	}
	handleThemeChange(e) {
		const i = e,
			n = i.matches ? this.container.options.defaultDarkTheme : this.container.options.defaultLightTheme,
			s = this.container.options.themes.find(o => o.name === n);
		s && s.default.auto && this.container.loadTheme(n)
	}
	handleClickMode(e) {
		this.container.handleClickMode(e)
	}
}
class If {
	constructor(e) {
		this.container = e
	}
	async nextFrame(e) {
		var i;
		try {
			const n = this.container;
			if (n.lastFrameTime !== void 0 && e < n.lastFrameTime + 1e3 / n.fpsLimit) {
				n.draw(!1);
				return
			}(i = n.lastFrameTime) !== null && i !== void 0 || (n.lastFrameTime = e);
			const s = e - n.lastFrameTime,
				o = {
					value: s,
					factor: 60 * s / 1e3
				};
			if (n.lifeTime += o.value, n.lastFrameTime = e, s > 1e3) {
				n.draw(!1);
				return
			}
			if (await n.particles.draw(o), n.duration > 0 && n.lifeTime > n.duration) {
				n.destroy();
				return
			}
			n.getAnimationStatus() && n.draw(!1)
		} catch (n) {
			console.error("tsParticles error in animation loop", n)
		}
	}
}
var Ff = globalThis && globalThis.__classPrivateFieldSet || function(t, e, i, n, s) {
		if (n === "m") throw new TypeError("Private method is not writable");
		if (n === "a" && !s) throw new TypeError("Private accessor was defined without a setter");
		if (typeof e == "function" ? t !== e || !s : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
		return n === "a" ? s.call(t, i) : s ? s.value = i : e.set(t, i), i
	},
	Df = globalThis && globalThis.__classPrivateFieldGet || function(t, e, i, n) {
		if (i === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
		if (typeof e == "function" ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
		return i === "m" ? n : i === "a" ? n.call(t) : n ? n.value : e.get(t)
	},
	Pn;
class Lf {
	constructor(e, i) {
		this.container = i, Pn.set(this, void 0), Ff(this, Pn, e, "f"), this.externalInteractors = [], this.particleInteractors = [], this.init()
	}
	init() {
		const e = Df(this, Pn, "f").plugins.getInteractors(this.container, !0);
		this.externalInteractors = [], this.particleInteractors = [];
		for (const i of e) switch (i.type) {
			case 0:
				this.externalInteractors.push(i);
				break;
			case 1:
				this.particleInteractors.push(i);
				break
		}
	}
	async externalInteract(e) {
		for (const i of this.externalInteractors) i.isEnabled() && await i.interact(e)
	}
	async particlesInteract(e, i) {
		for (const n of this.externalInteractors) n.reset(e);
		for (const n of this.particleInteractors) n.isEnabled(e) && await n.interact(e, i)
	}
	handleClickMode(e) {
		for (const i of this.externalInteractors) i.handleClickMode && i.handleClickMode(e)
	}
}
Pn = new WeakMap;
class Ie extends ie {
	constructor(e, i, n) {
		if (super(e, i), typeof e != "number" && e) this.z = e.z;
		else if (n !== void 0) this.z = n;
		else throw new Error("tsParticles - Vector not initialized correctly")
	}
	static clone(e) {
		return Ie.create(e.x, e.y, e.z)
	}
	static create(e, i, n) {
		return new Ie(e, i, n)
	}
	static get origin() {
		return Ie.create(0, 0, 0)
	}
	add(e) {
		return e instanceof Ie ? Ie.create(this.x + e.x, this.y + e.y, this.z + e.z) : super.add(e)
	}
	addTo(e) {
		super.addTo(e), e instanceof Ie && (this.z += e.z)
	}
	sub(e) {
		return e instanceof Ie ? Ie.create(this.x - e.x, this.y - e.y, this.z - e.z) : super.sub(e)
	}
	subFrom(e) {
		super.subFrom(e), e instanceof Ie && (this.z -= e.z)
	}
	mult(e) {
		return Ie.create(this.x * e, this.y * e, this.z * e)
	}
	multTo(e) {
		super.multTo(e), this.z *= e
	}
	div(e) {
		return Ie.create(this.x / e, this.y / e, this.z / e)
	}
	divTo(e) {
		super.divTo(e), this.z /= e
	}
	copy() {
		return Ie.clone(this)
	}
	setTo(e) {
		super.setTo(e);
		const i = e;
		i.z !== void 0 && (this.z = i.z)
	}
}
var Hf = globalThis && globalThis.__classPrivateFieldSet || function(t, e, i, n, s) {
		if (n === "m") throw new TypeError("Private method is not writable");
		if (n === "a" && !s) throw new TypeError("Private accessor was defined without a setter");
		if (typeof e == "function" ? t !== e || !s : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
		return n === "a" ? s.call(t, i) : s ? s.value = i : e.set(t, i), i
	},
	$f = globalThis && globalThis.__classPrivateFieldGet || function(t, e, i, n) {
		if (i === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
		if (typeof e == "function" ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
		return i === "m" ? n : i === "a" ? n.call(t) : n ? n.value : e.get(t)
	},
	_n;
const zr = t => {
	!(re(t.outMode, t.checkModes) || re(t.outMode, t.checkModes)) || (t.coord > t.maxCoord - t.radius * 2 ? t.setCb(-t.radius) : t.coord < t.radius * 2 && t.setCb(t.radius))
};
class Bf {
	constructor(e, i, n, s, o, r) {
		var l, a, c, u, d, h, f;
		this.id = i, this.container = n, this.group = r, _n.set(this, void 0), Hf(this, _n, e, "f"), this.fill = !0, this.close = !0, this.lastPathTime = 0, this.destroyed = !1, this.unbreakable = !1, this.splitCount = 0, this.misplaced = !1, this.retina = {
			maxDistance: {}
		}, this.outType = "normal", this.ignoresResizeRatio = !0;
		const p = n.retina.pixelRatio,
			y = n.actualOptions,
			v = So(y.particles),
			g = v.shape.type,
			x = v.reduceDuplicates;
		if (this.shape = g instanceof Array ? ze(g, this.id, x) : g, o != null && o.shape) {
			if (o.shape.type) {
				const ve = o.shape.type;
				this.shape = ve instanceof Array ? ze(ve, this.id, x) : ve
			}
			const J = new pa;
			J.load(o.shape), this.shape && (this.shapeData = this.loadShapeData(J, x))
		} else this.shapeData = this.loadShapeData(v.shape, x);
		o !== void 0 && v.load(o), ((l = this.shapeData) === null || l === void 0 ? void 0 : l.particles) !== void 0 && v.load((a = this.shapeData) === null || a === void 0 ? void 0 : a.particles), this.fill = (u = (c = this.shapeData) === null || c === void 0 ? void 0 : c.fill) !== null && u !== void 0 ? u : this.fill, this.close = (h = (d = this.shapeData) === null || d === void 0 ? void 0 : d.close) !== null && h !== void 0 ? h : this.close, this.options = v, this.pathDelay = _t(this.options.move.path.delay) * 1e3;
		const P = U(this.options.zIndex.value);
		n.retina.initParticle(this);
		const E = this.options.size,
			R = E.value;
		this.size = {
			enable: E.animation.enable,
			value: U(E.value) * n.retina.pixelRatio,
			max: lt(R) * p,
			min: gi(R) * p,
			loops: 0,
			maxLoops: U(E.animation.count)
		};
		const I = E.animation;
		if (I.enable) {
			switch (this.size.status = 0, I.startValue) {
				case "min":
					this.size.value = this.size.min, this.size.status = 0;
					break;
				case "random":
					this.size.value = Pe(this.size) * p, this.size.status = Math.random() >= .5 ? 0 : 1;
					break;
				case "max":
				default:
					this.size.value = this.size.max, this.size.status = 1;
					break
			}
			this.size.velocity = ((f = this.retina.sizeAnimationSpeed) !== null && f !== void 0 ? f : n.retina.sizeAnimationSpeed) / 100 * n.retina.reduceFactor, I.sync || (this.size.velocity *= Math.random())
		}
		this.bubble = {
			inRange: !1
		}, this.position = this.calcPosition(n, s, ct(P, 0, n.zLayers)), this.initialPosition = this.position.copy();
		const A = n.canvas.size,
			W = this.options.move.center;
		switch (this.moveCenter = {
			x: A.width * W.x / 100,
			y: A.height * W.y / 100,
			radius: this.options.move.center.radius
		}, this.direction = jd(this.options.move.direction, this.position, this.moveCenter), this.options.move.direction) {
			case "inside":
				this.outType = "inside";
				break;
			case "outside":
				this.outType = "outside";
				break
		}
		this.initialVelocity = this.calculateVelocity(), this.velocity = this.initialVelocity.copy(), this.moveDecay = 1 - U(this.options.move.decay);
		const N = this.options.move.gravity;
		this.gravity = {
			enable: N.enable,
			acceleration: U(N.acceleration),
			inverse: N.inverse
		}, this.offset = ie.origin;
		const le = n.particles;
		le.needsSort = le.needsSort || le.lastZIndex < this.position.z, le.lastZIndex = this.position.z, this.zIndexFactor = this.position.z / n.zLayers, this.sides = 24;
		let G = n.drawers.get(this.shape);
		G || (G = $f(this, _n, "f").plugins.getShapeDrawer(this.shape), G && n.drawers.set(this.shape, G)), G != null && G.loadShape && (G == null || G.loadShape(this));
		const F = G == null ? void 0 : G.getSidesCount;
		F && (this.sides = F(this)), this.life = this.loadLife(), this.spawning = this.life.delay > 0, this.shadowColor = Be(this.options.shadow.color);
		for (const J of n.particles.updaters) J.init && J.init(this);
		for (const J of n.particles.movers) J.init && J.init(this);
		G && G.particleInit && G.particleInit(n, this);
		for (const [, J] of n.plugins) J.particleCreated && J.particleCreated(this)
	}
	isVisible() {
		return !this.destroyed && !this.spawning && this.isInsideCanvas()
	}
	isInsideCanvas() {
		const e = this.getRadius(),
			i = this.container.canvas.size;
		return this.position.x >= -e && this.position.y >= -e && this.position.y <= i.height + e && this.position.x <= i.width + e
	}
	draw(e) {
		const i = this.container;
		for (const [, n] of i.plugins) i.canvas.drawParticlePlugin(n, this, e);
		i.canvas.drawParticle(this, e)
	}
	getPosition() {
		return {
			x: this.position.x + this.offset.x,
			y: this.position.y + this.offset.y,
			z: this.position.z
		}
	}
	getRadius() {
		var e;
		return (e = this.bubble.radius) !== null && e !== void 0 ? e : this.size.value
	}
	getMass() {
		return this.getRadius() ** 2 * Math.PI / 2
	}
	getFillColor() {
		var e, i;
		const n = (e = this.bubble.color) !== null && e !== void 0 ? e : Ar(this.color);
		if (n && this.roll && (this.backColor || this.roll.alter)) {
			const s = this.options.roll.mode === "both" ? 2 : 1,
				o = this.options.roll.mode === "horizontal" ? Math.PI / 2 : 0;
			if (Math.floor((((i = this.roll.angle) !== null && i !== void 0 ? i : 0) + o) / (Math.PI / s)) % 2) {
				if (this.backColor) return this.backColor;
				if (this.roll.alter) return Af(n, this.roll.alter.type, this.roll.alter.value)
			}
		}
		return n
	}
	getStrokeColor() {
		var e, i;
		return (i = (e = this.bubble.color) !== null && e !== void 0 ? e : Ar(this.strokeColor)) !== null && i !== void 0 ? i : this.getFillColor()
	}
	destroy(e) {
		if (this.destroyed = !0, this.bubble.inRange = !1, this.unbreakable) return;
		this.destroyed = !0, this.bubble.inRange = !1;
		for (const [, n] of this.container.plugins) n.particleDestroyed && n.particleDestroyed(this, e);
		if (e) return;
		this.options.destroy.mode === "split" && this.split()
	}
	reset() {
		this.opacity && (this.opacity.loops = 0), this.size.loops = 0
	}
	split() {
		const e = this.options.destroy.split;
		if (e.count >= 0 && this.splitCount++ > e.count) return;
		const i = _t(e.rate);
		for (let n = 0; n < i; n++) this.container.particles.addSplitParticle(this)
	}
	calcPosition(e, i, n, s = 0) {
		var o, r, l, a;
		for (const [, v] of e.plugins) {
			const g = v.particlePosition !== void 0 ? v.particlePosition(i, this) : void 0;
			if (g !== void 0) return Ie.create(g.x, g.y, n)
		}
		const c = e.canvas.size,
			u = Od({
				size: c,
				position: i
			}),
			d = Ie.create(u.x, u.y, n),
			h = this.getRadius(),
			f = this.options.move.outModes,
			p = v => {
				zr({
					outMode: v,
					checkModes: ["bounce", "bounce-horizontal"],
					coord: d.x,
					maxCoord: e.canvas.size.width,
					setCb: g => d.x += g,
					radius: h
				})
			},
			y = v => {
				zr({
					outMode: v,
					checkModes: ["bounce", "bounce-vertical"],
					coord: d.y,
					maxCoord: e.canvas.size.height,
					setCb: g => d.y += g,
					radius: h
				})
			};
		return p((o = f.left) !== null && o !== void 0 ? o : f.default), p((r = f.right) !== null && r !== void 0 ? r : f.default), y((l = f.top) !== null && l !== void 0 ? l : f.default), y((a = f.bottom) !== null && a !== void 0 ? a : f.default), this.checkOverlap(d, s) ? this.calcPosition(e, void 0, n, s + 1) : d
	}
	checkOverlap(e, i = 0) {
		const n = this.options.collisions,
			s = this.getRadius();
		if (!n.enable) return !1;
		const o = n.overlap;
		if (o.enable) return !1;
		const r = o.retries;
		if (r >= 0 && i > r) throw new Error("Particle is overlapping and can't be placed");
		let l = !1;
		for (const a of this.container.particles.array)
			if (we(e, a.position) < s + a.getRadius()) {
				l = !0;
				break
			} return l
	}
	calculateVelocity() {
		const i = Ed(this.direction).copy(),
			n = this.options.move;
		if (n.direction === "inside" || n.direction === "outside") return i;
		const s = Math.PI / 180 * U(n.angle.value),
			o = Math.PI / 180 * U(n.angle.offset),
			r = {
				left: o - s / 2,
				right: o + s / 2
			};
		return n.straight || (i.angle += Pe(V(r.left, r.right))), n.random && typeof n.speed == "number" && (i.length *= Math.random()), i
	}
	loadShapeData(e, i) {
		const n = e.options[this.shape];
		if (n) return de({}, n instanceof Array ? ze(n, this.id, i) : n)
	}
	loadLife() {
		const e = this.container,
			i = this.options,
			n = i.life,
			s = {
				delay: e.retina.reduceFactor ? U(n.delay.value) * (n.delay.sync ? 1 : Math.random()) / e.retina.reduceFactor * 1e3 : 0,
				delayTime: 0,
				duration: e.retina.reduceFactor ? U(n.duration.value) * (n.duration.sync ? 1 : Math.random()) / e.retina.reduceFactor * 1e3 : 0,
				time: 0,
				count: i.life.count
			};
		return s.duration <= 0 && (s.duration = -1), s.count <= 0 && (s.count = -1), s
	}
}
_n = new WeakMap;
class Vf {
	constructor(e, i) {
		this.position = e, this.particle = i
	}
}
class Ma {
	constructor(e, i) {
		this.position = {
			x: e,
			y: i
		}
	}
}
class Ge extends Ma {
	constructor(e, i, n) {
		super(e, i), this.radius = n
	}
	contains(e) {
		return we(e, this.position) <= this.radius
	}
	intersects(e) {
		const i = e,
			n = e,
			s = this.position,
			o = e.position,
			r = Math.abs(o.x - s.x),
			l = Math.abs(o.y - s.y),
			a = this.radius;
		if (n.radius !== void 0) {
			const c = a + n.radius,
				u = Math.sqrt(r * r + l + l);
			return c > u
		} else if (i.size !== void 0) {
			const c = i.size.width,
				u = i.size.height,
				d = Math.pow(r - c, 2) + Math.pow(l - u, 2);
			return r > a + c || l > a + u ? !1 : r <= c || l <= u ? !0 : d <= a * a
		}
		return !1
	}
}
class et extends Ma {
	constructor(e, i, n, s) {
		super(e, i), this.size = {
			height: s,
			width: n
		}
	}
	contains(e) {
		const i = this.size.width,
			n = this.size.height,
			s = this.position;
		return e.x >= s.x && e.x <= s.x + i && e.y >= s.y && e.y <= s.y + n
	}
	intersects(e) {
		const i = e,
			n = e,
			s = this.size.width,
			o = this.size.height,
			r = this.position,
			l = e.position;
		if (n.radius !== void 0) return n.intersects(this);
		if (!i.size) return !1;
		const a = i.size,
			c = a.width,
			u = a.height;
		return l.x < r.x + s && l.x + c > r.x && l.y < r.y + o && l.y + u > r.y
	}
}
class ja extends Ge {
	constructor(e, i, n, s) {
		super(e, i, n), this.canvasSize = s, this.canvasSize = Object.assign({}, s)
	}
	contains(e) {
		if (super.contains(e)) return !0;
		const i = {
			x: e.x - this.canvasSize.width,
			y: e.y
		};
		if (super.contains(i)) return !0;
		const n = {
			x: e.x - this.canvasSize.width,
			y: e.y - this.canvasSize.height
		};
		if (super.contains(n)) return !0;
		const s = {
			x: e.x,
			y: e.y - this.canvasSize.height
		};
		return super.contains(s)
	}
	intersects(e) {
		if (super.intersects(e)) return !0;
		const i = e,
			n = e,
			s = {
				x: e.position.x - this.canvasSize.width,
				y: e.position.y - this.canvasSize.height
			};
		if (n.radius !== void 0) {
			const o = new Ge(s.x, s.y, n.radius * 2);
			return super.intersects(o)
		} else if (i.size !== void 0) {
			const o = new et(s.x, s.y, i.size.width * 2, i.size.height * 2);
			return super.intersects(o)
		}
		return !1
	}
}
class Zt {
	constructor(e, i) {
		this.rectangle = e, this.capacity = i, this.points = [], this.divided = !1
	}
	insert(e) {
		var i, n, s, o, r;
		return this.rectangle.contains(e.position) ? this.points.length < this.capacity ? (this.points.push(e), !0) : (this.divided || this.subdivide(), (r = ((i = this.northEast) === null || i === void 0 ? void 0 : i.insert(e)) || ((n = this.northWest) === null || n === void 0 ? void 0 : n.insert(e)) || ((s = this.southEast) === null || s === void 0 ? void 0 : s.insert(e)) || ((o = this.southWest) === null || o === void 0 ? void 0 : o.insert(e))) !== null && r !== void 0 ? r : !1) : !1
	}
	queryCircle(e, i) {
		return this.query(new Ge(e.x, e.y, i))
	}
	queryCircleWarp(e, i, n) {
		const s = n,
			o = n;
		return this.query(new ja(e.x, e.y, i, s.canvas !== void 0 ? s.canvas.size : o))
	}
	queryRectangle(e, i) {
		return this.query(new et(e.x, e.y, i.width, i.height))
	}
	query(e, i) {
		var n, s, o, r;
		const l = i != null ? i : [];
		if (!e.intersects(this.rectangle)) return [];
		for (const a of this.points) !e.contains(a.position) && we(e.position, a.position) > a.particle.getRadius() || l.push(a.particle);
		return this.divided && ((n = this.northEast) === null || n === void 0 || n.query(e, l), (s = this.northWest) === null || s === void 0 || s.query(e, l), (o = this.southEast) === null || o === void 0 || o.query(e, l), (r = this.southWest) === null || r === void 0 || r.query(e, l)), l
	}
	subdivide() {
		const e = this.rectangle.position.x,
			i = this.rectangle.position.y,
			n = this.rectangle.size.width,
			s = this.rectangle.size.height,
			o = this.capacity;
		this.northEast = new Zt(new et(e, i, n / 2, s / 2), o), this.northWest = new Zt(new et(e + n / 2, i, n / 2, s / 2), o), this.southEast = new Zt(new et(e, i + s / 2, n / 2, s / 2), o), this.southWest = new Zt(new et(e + n / 2, i + s / 2, n / 2, s / 2), o), this.divided = !0
	}
}
var Nf = globalThis && globalThis.__classPrivateFieldSet || function(t, e, i, n, s) {
		if (n === "m") throw new TypeError("Private method is not writable");
		if (n === "a" && !s) throw new TypeError("Private accessor was defined without a setter");
		if (typeof e == "function" ? t !== e || !s : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
		return n === "a" ? s.call(t, i) : s ? s.value = i : e.set(t, i), i
	},
	qt = globalThis && globalThis.__classPrivateFieldGet || function(t, e, i, n) {
		if (i === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
		if (typeof e == "function" ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
		return i === "m" ? n : i === "a" ? n.call(t) : n ? n.value : e.get(t)
	},
	ft;
class Wf {
	constructor(e, i) {
		this.container = i, ft.set(this, void 0), Nf(this, ft, e, "f"), this.nextId = 0, this.array = [], this.zArray = [], this.limit = 0, this.needsSort = !1, this.lastZIndex = 0, this.freqs = {
			links: new Map,
			triangles: new Map
		}, this.interactionManager = new Lf(qt(this, ft, "f"), i);
		const n = this.container.canvas.size;
		this.linksColors = new Map, this.quadTree = new Zt(new et(-n.width / 4, -n.height / 4, n.width * 3 / 2, n.height * 3 / 2), 4), this.movers = qt(this, ft, "f").plugins.getMovers(i, !0), this.updaters = qt(this, ft, "f").plugins.getUpdaters(i, !0)
	}
	get count() {
		return this.array.length
	}
	init() {
		var e;
		const i = this.container,
			n = i.actualOptions;
		this.lastZIndex = 0, this.needsSort = !1, this.freqs.links = new Map, this.freqs.triangles = new Map;
		let s = !1;
		this.updaters = qt(this, ft, "f").plugins.getUpdaters(i, !0), this.interactionManager.init();
		for (const [, o] of i.plugins)
			if (o.particlesInitialization !== void 0 && (s = o.particlesInitialization()), s) break;
		if (this.addManualParticles(), !s) {
			for (const o in n.particles.groups) {
				const r = n.particles.groups[o];
				for (let l = this.count, a = 0; a < ((e = r.number) === null || e === void 0 ? void 0 : e.value) && l < n.particles.number.value; l++, a++) this.addParticle(void 0, r, o)
			}
			for (let o = this.count; o < n.particles.number.value; o++) this.addParticle()
		}
		i.pathGenerator.init(i)
	}
	async redraw() {
		this.clear(), this.init(), await this.draw({
			value: 0,
			factor: 0
		})
	}
	removeAt(e, i = 1, n, s) {
		if (!(e >= 0 && e <= this.count)) return;
		let o = 0;
		for (let r = e; o < i && r < this.count; r++) {
			const l = this.array[r];
			if (!l || l.group !== n) continue;
			l.destroy(s), this.array.splice(r--, 1);
			const a = this.zArray.indexOf(l);
			this.zArray.splice(a, 1), o++, qt(this, ft, "f").dispatchEvent("particleRemoved", {
				container: this.container,
				data: {
					particle: l
				}
			})
		}
	}
	remove(e, i, n) {
		this.removeAt(this.array.indexOf(e), void 0, i, n)
	}
	async update(e) {
		const i = this.container,
			n = [];
		i.pathGenerator.update();
		for (const [, s] of i.plugins) s.update !== void 0 && s.update(e);
		for (const s of this.array) {
			const o = i.canvas.resizeFactor;
			o && !s.ignoresResizeRatio && (s.position.x *= o.width, s.position.y *= o.height), s.ignoresResizeRatio = !1, s.bubble.inRange = !1;
			for (const [, r] of this.container.plugins) {
				if (s.destroyed) break;
				r.particleUpdate && r.particleUpdate(s, e)
			}
			for (const r of this.movers) r.isEnabled(s) && r.move(s, e);
			if (s.destroyed) {
				n.push(s);
				continue
			}
			this.quadTree.insert(new Vf(s.getPosition(), s))
		}
		for (const s of n) this.remove(s);
		await this.interactionManager.externalInteract(e);
		for (const s of i.particles.array) {
			for (const o of this.updaters) o.update(s, e);
			!s.destroyed && !s.spawning && await this.interactionManager.particlesInteract(s, e)
		}
		delete i.canvas.resizeFactor
	}
	async draw(e) {
		const i = this.container,
			n = this.container.canvas.size;
		this.quadTree = new Zt(new et(-n.width / 4, -n.height / 4, n.width * 3 / 2, n.height * 3 / 2), 4), i.canvas.clear(), await this.update(e), this.needsSort && (this.zArray.sort((s, o) => o.position.z - s.position.z || s.id - o.id), this.lastZIndex = this.zArray[this.zArray.length - 1].position.z, this.needsSort = !1);
		for (const [, s] of i.plugins) i.canvas.drawPlugin(s, e);
		for (const s of this.zArray) s.draw(e)
	}
	clear() {
		this.array = [], this.zArray = []
	}
	push(e, i, n, s) {
		this.pushing = !0;
		for (let o = 0; o < e; o++) this.addParticle(i == null ? void 0 : i.position, n, s);
		this.pushing = !1
	}
	addParticle(e, i, n) {
		const s = this.container,
			o = s.actualOptions,
			r = o.particles.number.limit * s.density;
		if (r > 0) {
			const l = this.count + 1 - r;
			l > 0 && this.removeQuantity(l)
		}
		return this.pushParticle(e, i, n)
	}
	addSplitParticle(e) {
		const i = e.options.destroy.split,
			n = So(e.options),
			s = _t(i.factor);
		n.color.load({
			value: {
				hsl: e.getFillColor()
			}
		}), typeof n.size.value == "number" ? n.size.value /= s : (n.size.value.min /= s, n.size.value.max /= s), n.load(i.particles);
		const o = i.sizeOffset ? V(-e.size.value, e.size.value) : 0,
			r = {
				x: e.position.x + Pe(o),
				y: e.position.y + Pe(o)
			};
		return this.pushParticle(r, n, e.group, l => l.size.value < .5 ? !1 : (l.velocity.length = Pe(V(e.velocity.length, l.velocity.length)), l.splitCount = e.splitCount + 1, l.unbreakable = !0, setTimeout(() => {
			l.unbreakable = !1
		}, 500), !0))
	}
	removeQuantity(e, i) {
		this.removeAt(0, e, i)
	}
	getLinkFrequency(e, i) {
		const n = V(e.id, i.id),
			s = `${gi(n)}_${lt(n)}`;
		let o = this.freqs.links.get(s);
		return o === void 0 && (o = Math.random(), this.freqs.links.set(s, o)), o
	}
	getTriangleFrequency(e, i, n) {
		let [s, o, r] = [e.id, i.id, n.id];
		s > o && ([o, s] = [s, o]), o > r && ([r, o] = [o, r]), s > r && ([r, s] = [s, r]);
		const l = `${s}_${o}_${r}`;
		let a = this.freqs.triangles.get(l);
		return a === void 0 && (a = Math.random(), this.freqs.triangles.set(l, a)), a
	}
	addManualParticles() {
		const e = this.container,
			i = e.actualOptions;
		for (const n of i.manualParticles) this.addParticle(Cd({
			size: e.canvas.size,
			position: n.position
		}), n.options)
	}
	setDensity() {
		const e = this.container.actualOptions;
		for (const i in e.particles.groups) this.applyDensity(e.particles.groups[i], 0, i);
		this.applyDensity(e.particles, e.manualParticles.length)
	}
	handleClickMode(e) {
		this.interactionManager.handleClickMode(e)
	}
	applyDensity(e, i, n) {
		var s;
		if (!(!((s = e.number.density) === null || s === void 0) && s.enable)) return;
		const o = e.number,
			r = this.initDensityFactor(o.density),
			l = o.value,
			a = o.limit > 0 ? o.limit : l,
			c = Math.min(l, a) * r + i,
			u = Math.min(this.count, this.array.filter(d => d.group === n).length);
		this.limit = o.limit * r, u < c ? this.push(Math.abs(c - u), void 0, e, n) : u > c && this.removeQuantity(u - c, n)
	}
	initDensityFactor(e) {
		const i = this.container;
		if (!i.canvas.element || !e.enable) return 1;
		const n = i.canvas.element,
			s = i.retina.pixelRatio;
		return n.width * n.height / (e.factor * s ** 2 * e.area)
	}
	pushParticle(e, i, n, s) {
		try {
			const o = new Bf(qt(this, ft, "f"), this.nextId, this.container, e, i, n);
			let r = !0;
			return s && (r = s(o)), r ? (this.array.push(o), this.zArray.push(o), this.nextId++, qt(this, ft, "f").dispatchEvent("particleAdded", {
				container: this.container,
				data: {
					particle: o
				}
			}), o) : void 0
		} catch (o) {
			console.warn(`error adding particle: ${o}`);
			return
		}
	}
}
ft = new WeakMap;
class Uf {
	constructor(e) {
		this.container = e
	}
	init() {
		const e = this.container,
			i = e.actualOptions;
		this.pixelRatio = !i.detectRetina || Vt() ? 1 : window.devicePixelRatio;
		const n = this.container.actualOptions.motion;
		if (n && (n.disable || n.reduce.value))
			if (Vt() || typeof matchMedia == "undefined" || !matchMedia) this.reduceFactor = 1;
			else {
				const l = matchMedia("(prefers-reduced-motion: reduce)");
				if (l) {
					this.handleMotionChange(l);
					const a = () => {
						this.handleMotionChange(l), e.refresh().catch(() => {})
					};
					l.addEventListener !== void 0 ? l.addEventListener("change", a) : l.addListener !== void 0 && l.addListener(a)
				}
			}
		else this.reduceFactor = 1;
		const s = this.pixelRatio;
		if (e.canvas.element) {
			const l = e.canvas.element;
			e.canvas.size.width = l.offsetWidth * s, e.canvas.size.height = l.offsetHeight * s
		}
		const o = i.particles;
		this.attractDistance = U(o.move.attract.distance) * s, this.linksDistance = o.links.distance * s, this.linksWidth = o.links.width * s, this.sizeAnimationSpeed = U(o.size.animation.speed) * s, this.maxSpeed = U(o.move.gravity.maxSpeed) * s;
		const r = i.interactivity.modes;
		this.connectModeDistance = r.connect.distance * s, this.connectModeRadius = r.connect.radius * s, this.grabModeDistance = r.grab.distance * s, this.repulseModeDistance = r.repulse.distance * s, this.bounceModeDistance = r.bounce.distance * s, this.attractModeDistance = r.attract.distance * s, this.slowModeRadius = r.slow.radius * s, this.bubbleModeDistance = r.bubble.distance * s, r.bubble.size && (this.bubbleModeSize = r.bubble.size * s)
	}
	initParticle(e) {
		const i = e.options,
			n = this.pixelRatio,
			s = i.move.distance,
			o = e.retina;
		o.attractDistance = U(i.move.attract.distance) * n, o.linksDistance = i.links.distance * n, o.linksWidth = i.links.width * n, o.moveDrift = U(i.move.drift) * n, o.moveSpeed = U(i.move.speed) * n, o.sizeAnimationSpeed = U(i.size.animation.speed) * n;
		const r = o.maxDistance;
		r.horizontal = s.horizontal !== void 0 ? s.horizontal * n : void 0, r.vertical = s.vertical !== void 0 ? s.vertical * n : void 0, o.maxSpeed = U(i.move.gravity.maxSpeed) * n
	}
	handleMotionChange(e) {
		const i = this.container.actualOptions;
		if (e.matches) {
			const n = i.motion;
			this.reduceFactor = n.disable ? 0 : n.reduce.value ? 1 / n.reduce.factor : 1
		} else this.reduceFactor = 1
	}
}
var Gf = globalThis && globalThis.__classPrivateFieldSet || function(t, e, i, n, s) {
		if (n === "m") throw new TypeError("Private method is not writable");
		if (n === "a" && !s) throw new TypeError("Private accessor was defined without a setter");
		if (typeof e == "function" ? t !== e || !s : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
		return n === "a" ? s.call(t, i) : s ? s.value = i : e.set(t, i), i
	},
	je = globalThis && globalThis.__classPrivateFieldGet || function(t, e, i, n) {
		if (i === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
		if (typeof e == "function" ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
		return i === "m" ? n : i === "a" ? n.call(t) : n ? n.value : e.get(t)
	},
	xe;
class qf {
	constructor(e, i, n) {
		this.id = i, xe.set(this, void 0), Gf(this, xe, e, "f"), this.fpsLimit = 120, this.duration = 0, this.lifeTime = 0, this.firstStart = !0, this.started = !1, this.destroyed = !1, this.paused = !0, this.lastFrameTime = 0, this.zLayers = 100, this.pageHidden = !1, this._sourceOptions = n, this._initialSourceOptions = n, this.retina = new Uf(this), this.canvas = new zf(this), this.particles = new Wf(je(this, xe, "f"), this), this.drawer = new If(this), this.pathGenerator = {
			generate: s => {
				const o = s.velocity.copy();
				return o.angle += o.length * Math.PI / 180, o
			},
			init: () => {},
			update: () => {}
		}, this.interactivity = {
			mouse: {
				clicking: !1,
				inside: !1
			}
		}, this.plugins = new Map, this.drawers = new Map, this.density = 1, this._options = Ti(je(this, xe, "f")), this.actualOptions = Ti(je(this, xe, "f")), this.eventListeners = new Rf(this), typeof IntersectionObserver != "undefined" && IntersectionObserver && (this.intersectionObserver = new IntersectionObserver(s => this.intersectionManager(s))), je(this, xe, "f").dispatchEvent("containerBuilt", {
			container: this
		})
	}
	get options() {
		return this._options
	}
	get sourceOptions() {
		return this._sourceOptions
	}
	play(e) {
		const i = this.paused || e;
		if (this.firstStart && !this.actualOptions.autoPlay) {
			this.firstStart = !1;
			return
		}
		if (this.paused && (this.paused = !1), i)
			for (const [, n] of this.plugins) n.play && n.play();
		je(this, xe, "f").dispatchEvent("containerPlay", {
			container: this
		}), this.draw(i || !1)
	}
	pause() {
		if (this.drawAnimationFrame !== void 0 && (sf()(this.drawAnimationFrame), delete this.drawAnimationFrame), !this.paused) {
			for (const [, e] of this.plugins) e.pause && e.pause();
			this.pageHidden || (this.paused = !0), je(this, xe, "f").dispatchEvent("containerPaused", {
				container: this
			})
		}
	}
	draw(e) {
		let i = e;
		this.drawAnimationFrame = nf()(async n => {
			i && (this.lastFrameTime = void 0, i = !1), await this.drawer.nextFrame(n)
		})
	}
	getAnimationStatus() {
		return !this.paused && !this.pageHidden
	}
	setNoise(e, i, n) {
		this.setPath(e, i, n)
	}
	setPath(e, i, n) {
		var s, o, r;
		if (!!e)
			if (typeof e == "function") this.pathGenerator.generate = e, i && (this.pathGenerator.init = i), n && (this.pathGenerator.update = n);
			else {
				const l = this.pathGenerator;
				this.pathGenerator = e, (s = this.pathGenerator).generate || (s.generate = l.generate), (o = this.pathGenerator).init || (o.init = l.init), (r = this.pathGenerator).update || (r.update = l.update)
			}
	}
	destroy() {
		this.stop(), this.canvas.destroy();
		for (const [, e] of this.drawers) e.destroy && e.destroy(this);
		for (const e of this.drawers.keys()) this.drawers.delete(e);
		this.destroyed = !0, je(this, xe, "f").dispatchEvent("containerDestroyed", {
			container: this
		})
	}
	exportImg(e) {
		this.exportImage(e)
	}
	exportImage(e, i, n) {
		var s;
		return (s = this.canvas.element) === null || s === void 0 ? void 0 : s.toBlob(e, i != null ? i : "image/png", n)
	}
	exportConfiguration() {
		return JSON.stringify(this.actualOptions, void 0, 2)
	}
	refresh() {
		return this.stop(), this.start()
	}
	reset() {
		return this._options = Ti(je(this, xe, "f")), this.refresh()
	}
	stop() {
		if (!!this.started) {
			this.firstStart = !0, this.started = !1, this.eventListeners.removeListeners(), this.pause(), this.particles.clear(), this.canvas.clear(), this.interactivity.element instanceof HTMLElement && this.intersectionObserver && this.intersectionObserver.unobserve(this.interactivity.element);
			for (const [, e] of this.plugins) e.stop && e.stop();
			for (const e of this.plugins.keys()) this.plugins.delete(e);
			this.particles.linksColors = new Map, delete this.particles.grabLineColor, delete this.particles.linksColor, this._sourceOptions = this._options, je(this, xe, "f").dispatchEvent("containerStopped", {
				container: this
			})
		}
	}
	async loadTheme(e) {
		this.currentTheme = e, await this.refresh()
	}
	async start() {
		if (!this.started) {
			await this.init(), this.started = !0, this.eventListeners.addListeners(), this.interactivity.element instanceof HTMLElement && this.intersectionObserver && this.intersectionObserver.observe(this.interactivity.element);
			for (const [, e] of this.plugins) e.startAsync !== void 0 ? await e.startAsync() : e.start !== void 0 && e.start();
			je(this, xe, "f").dispatchEvent("containerStarted", {
				container: this
			}), this.play()
		}
	}
	addClickHandler(e) {
		const i = this.interactivity.element;
		if (!i) return;
		const n = (d, h, f) => {
				if (this.destroyed) return;
				const p = this.retina.pixelRatio,
					y = {
						x: h.x * p,
						y: h.y * p
					},
					v = this.particles.quadTree.queryCircle(y, f * p);
				e(d, v)
			},
			s = d => {
				if (this.destroyed) return;
				const h = d,
					f = {
						x: h.offsetX || h.clientX,
						y: h.offsetY || h.clientY
					};
				n(d, f, 1)
			},
			o = () => {
				this.destroyed || (c = !0, u = !1)
			},
			r = () => {
				this.destroyed || (u = !0)
			},
			l = d => {
				var h, f, p;
				if (!this.destroyed) {
					if (c && !u) {
						const y = d;
						let v = y.touches[y.touches.length - 1];
						if (!v && (v = y.changedTouches[y.changedTouches.length - 1], !v)) return;
						const g = (h = this.canvas.element) === null || h === void 0 ? void 0 : h.getBoundingClientRect(),
							x = {
								x: v.clientX - ((f = g == null ? void 0 : g.left) !== null && f !== void 0 ? f : 0),
								y: v.clientY - ((p = g == null ? void 0 : g.top) !== null && p !== void 0 ? p : 0)
							};
						n(d, x, Math.max(v.radiusX, v.radiusY))
					}
					c = !1, u = !1
				}
			},
			a = () => {
				this.destroyed || (c = !1, u = !1)
			};
		let c = !1,
			u = !1;
		i.addEventListener("click", s), i.addEventListener("touchstart", o), i.addEventListener("touchmove", r), i.addEventListener("touchend", l), i.addEventListener("touchcancel", a)
	}
	handleClickMode(e) {
		this.particles.handleClickMode(e);
		for (const [, i] of this.plugins) i.handleClickMode && i.handleClickMode(e)
	}
	updateActualOptions() {
		this.actualOptions.responsive = [];
		const e = this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options);
		return this.actualOptions.setTheme(this.currentTheme), this.responsiveMaxWidth != e ? (this.responsiveMaxWidth = e, !0) : !1
	}
	async init() {
		const e = je(this, xe, "f").plugins.getSupportedShapes();
		for (const s of e) {
			const o = je(this, xe, "f").plugins.getShapeDrawer(s);
			o && this.drawers.set(s, o)
		}
		this._options = Ti(je(this, xe, "f"), this._initialSourceOptions, this.sourceOptions), this.actualOptions = Ti(je(this, xe, "f"), this._options), this.retina.init(), this.canvas.init(), this.updateActualOptions(), this.canvas.initBackground(), this.canvas.resize(), this.zLayers = this.actualOptions.zLayers, this.duration = U(this.actualOptions.duration), this.lifeTime = 0, this.fpsLimit = this.actualOptions.fpsLimit > 0 ? this.actualOptions.fpsLimit : 120;
		const i = je(this, xe, "f").plugins.getAvailablePlugins(this);
		for (const [s, o] of i) this.plugins.set(s, o);
		for (const [, s] of this.drawers) s.init && await s.init(this);
		for (const [, s] of this.plugins) s.init ? s.init(this.actualOptions) : s.initAsync !== void 0 && await s.initAsync(this.actualOptions);
		const n = this.actualOptions.particles.move.path;
		n.generator && this.setPath(je(this, xe, "f").plugins.getPathGenerator(n.generator)), je(this, xe, "f").dispatchEvent("containerInit", {
			container: this
		}), this.particles.init(), this.particles.setDensity();
		for (const [, s] of this.plugins) s.particlesSetup !== void 0 && s.particlesSetup();
		je(this, xe, "f").dispatchEvent("particlesSetup", {
			container: this
		})
	}
	intersectionManager(e) {
		if (!!this.actualOptions.pauseOnOutsideViewport)
			for (const i of e) i.target === this.interactivity.element && (i.isIntersecting ? this.play() : this.pause())
	}
}
xe = new WeakMap;
var Kf = globalThis && globalThis.__classPrivateFieldSet || function(t, e, i, n, s) {
		if (n === "m") throw new TypeError("Private method is not writable");
		if (n === "a" && !s) throw new TypeError("Private accessor was defined without a setter");
		if (typeof e == "function" ? t !== e || !s : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
		return n === "a" ? s.call(t, i) : s ? s.value = i : e.set(t, i), i
	},
	ki = globalThis && globalThis.__classPrivateFieldGet || function(t, e, i, n) {
		if (i === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
		if (typeof e == "function" ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
		return i === "m" ? n : i === "a" ? n.call(t) : n ? n.value : e.get(t)
	},
	zt;

function Yf(t) {
	console.error(`Error tsParticles - fetch status: ${t}`), console.error("Error tsParticles - File config not found")
}
class Xf {
	constructor(e) {
		zt.set(this, void 0), Kf(this, zt, e, "f")
	}
	dom() {
		return ki(this, zt, "f").domArray
	}
	domItem(e) {
		const i = this.dom(),
			n = i[e];
		if (n && !n.destroyed) return n;
		i.splice(e, 1)
	}
	async loadOptions(e) {
		var i, n, s;
		const o = (i = e.tagId) !== null && i !== void 0 ? i : `tsparticles${Math.floor(Math.random()*1e4)}`,
			{
				options: r,
				index: l
			} = e;
		let a = (n = e.element) !== null && n !== void 0 ? n : document.getElementById(o);
		a || (a = document.createElement("div"), a.id = o, (s = document.querySelector("body")) === null || s === void 0 || s.append(a));
		const c = r instanceof Array ? ze(r, l) : r,
			u = this.dom(),
			d = u.findIndex(p => p.id === o);
		if (d >= 0) {
			const p = this.domItem(d);
			p && !p.destroyed && (p.destroy(), u.splice(d, 1))
		}
		let h;
		if (a.tagName.toLowerCase() === "canvas") h = a, h.dataset[Ui] = "false";
		else {
			const p = a.getElementsByTagName("canvas");
			p.length ? (h = p[0], h.dataset[Ui] = "false") : (h = document.createElement("canvas"), h.dataset[Ui] = "true", h.style.width = "100%", h.style.height = "100%", a.appendChild(h))
		}
		const f = new qf(ki(this, zt, "f"), o, c);
		return d >= 0 ? u.splice(d, 0, f) : u.push(f), f.canvas.loadCanvas(h), await f.start(), f
	}
	async loadRemoteOptions(e) {
		const {
			url: i,
			index: n
		} = e, s = i instanceof Array ? ze(i, n) : i;
		if (!s) return;
		const o = await fetch(s);
		if (!o.ok) {
			Yf(o.status);
			return
		}
		const r = await o.json();
		return this.loadOptions({
			tagId: e.tagId,
			element: e.element,
			index: n,
			options: r
		})
	}
	load(e, i, n) {
		const s = {
			index: n
		};
		return typeof e == "string" ? s.tagId = e : s.options = e, typeof i == "number" ? s.index = i != null ? i : s.index : s.options = i != null ? i : s.options, this.loadOptions(s)
	}
	async set(e, i, n, s) {
		const o = {
			index: s
		};
		return typeof e == "string" ? o.tagId = e : o.element = e, i instanceof HTMLElement ? o.element = i : o.options = i, typeof n == "number" ? o.index = n : o.options = n != null ? n : o.options, this.loadOptions(o)
	}
	async loadJSON(e, i, n) {
		let s, o;
		return typeof i == "number" || i === void 0 ? s = e : (o = e, s = i), this.loadRemoteOptions({
			tagId: o,
			url: s,
			index: n
		})
	}
	async setJSON(e, i, n, s) {
		let o, r, l, a;
		return e instanceof HTMLElement ? (a = e, o = i, l = n) : (r = e, a = i, o = n, l = s), this.loadRemoteOptions({
			tagId: r,
			url: o,
			index: l,
			element: a
		})
	}
	setOnClickHandler(e) {
		const i = this.dom();
		if (!i.length) throw new Error("Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()");
		for (const n of i) n.addClickHandler(e)
	}
	addEventListener(e, i) {
		ki(this, zt, "f").eventDispatcher.addEventListener(e, i)
	}
	removeEventListener(e, i) {
		ki(this, zt, "f").eventDispatcher.removeEventListener(e, i)
	}
	dispatchEvent(e, i) {
		ki(this, zt, "f").eventDispatcher.dispatchEvent(e, i)
	}
}
zt = new WeakMap;
var Jf = globalThis && globalThis.__classPrivateFieldSet || function(t, e, i, n, s) {
		if (n === "m") throw new TypeError("Private method is not writable");
		if (n === "a" && !s) throw new TypeError("Private accessor was defined without a setter");
		if (typeof e == "function" ? t !== e || !s : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
		return n === "a" ? s.call(t, i) : s ? s.value = i : e.set(t, i), i
	},
	qs;
class Qf {
	constructor(e) {
		qs.set(this, void 0), Jf(this, qs, e, "f"), this.plugins = [], this.interactorsInitializers = new Map, this.moversInitializers = new Map, this.updatersInitializers = new Map, this.interactors = new Map, this.movers = new Map, this.updaters = new Map, this.presets = new Map, this.drawers = new Map, this.pathGenerators = new Map
	}
	getPlugin(e) {
		return this.plugins.find(i => i.id === e)
	}
	addPlugin(e) {
		this.getPlugin(e.id) || this.plugins.push(e)
	}
	getAvailablePlugins(e) {
		const i = new Map;
		for (const n of this.plugins) !n.needsPlugin(e.actualOptions) || i.set(n.id, n.getPlugin(e));
		return i
	}
	loadOptions(e, i) {
		for (const n of this.plugins) n.loadOptions(e, i)
	}
	getPreset(e) {
		return this.presets.get(e)
	}
	addPreset(e, i, n = !1) {
		(n || !this.getPreset(e)) && this.presets.set(e, i)
	}
	getShapeDrawer(e) {
		return this.drawers.get(e)
	}
	addShapeDrawer(e, i) {
		this.getShapeDrawer(e) || this.drawers.set(e, i)
	}
	getSupportedShapes() {
		return this.drawers.keys()
	}
	getPathGenerator(e) {
		return this.pathGenerators.get(e)
	}
	addPathGenerator(e, i) {
		this.getPathGenerator(e) || this.pathGenerators.set(e, i)
	}
	getInteractors(e, i = !1) {
		let n = this.interactors.get(e);
		return (!n || i) && (n = [...this.interactorsInitializers.values()].map(s => s(e)), this.interactors.set(e, n)), n
	}
	addInteractor(e, i) {
		this.interactorsInitializers.set(e, i)
	}
	getUpdaters(e, i = !1) {
		let n = this.updaters.get(e);
		return (!n || i) && (n = [...this.updatersInitializers.values()].map(s => s(e)), this.updaters.set(e, n)), n
	}
	addParticleUpdater(e, i) {
		this.updatersInitializers.set(e, i)
	}
	getMovers(e, i = !1) {
		let n = this.movers.get(e);
		return (!n || i) && (n = [...this.moversInitializers.values()].map(s => s(e)), this.movers.set(e, n)), n
	}
	addParticleMover(e, i) {
		this.moversInitializers.set(e, i)
	}
}
qs = new WeakMap;
var xs = globalThis && globalThis.__classPrivateFieldSet || function(t, e, i, n, s) {
		if (n === "m") throw new TypeError("Private method is not writable");
		if (n === "a" && !s) throw new TypeError("Private accessor was defined without a setter");
		if (typeof e == "function" ? t !== e || !s : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
		return n === "a" ? s.call(t, i) : s ? s.value = i : e.set(t, i), i
	},
	Qe = globalThis && globalThis.__classPrivateFieldGet || function(t, e, i, n) {
		if (i === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
		if (typeof e == "function" ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
		return i === "m" ? n : i === "a" ? n.call(t) : n ? n.value : e.get(t)
	},
	Li, De;
class Zf {
	constructor() {
		Li.set(this, void 0), De.set(this, void 0), this.domArray = [], this.eventDispatcher = new Md, xs(this, Li, !1, "f"), xs(this, De, new Xf(this), "f"), this.plugins = new Qf(this)
	}
	init() {
		Qe(this, Li, "f") || xs(this, Li, !0, "f")
	}
	async loadFromArray(e, i, n) {
		return Qe(this, De, "f").load(e, i, n)
	}
	async load(e, i) {
		return Qe(this, De, "f").load(e, i)
	}
	async set(e, i, n) {
		return Qe(this, De, "f").set(e, i, n)
	}
	async loadJSON(e, i, n) {
		return Qe(this, De, "f").loadJSON(e, i, n)
	}
	async setJSON(e, i, n, s) {
		return Qe(this, De, "f").setJSON(e, i, n, s)
	}
	setOnClickHandler(e) {
		Qe(this, De, "f").setOnClickHandler(e)
	}
	dom() {
		return Qe(this, De, "f").dom()
	}
	domItem(e) {
		return Qe(this, De, "f").domItem(e)
	}
	async refresh() {
		for (const e of this.dom()) await e.refresh()
	}
	async addShape(e, i, n, s, o) {
		let r;
		typeof i == "function" ? r = {
			afterEffect: s,
			destroy: o,
			draw: i,
			init: n
		} : r = i, this.plugins.addShapeDrawer(e, r), await this.refresh()
	}
	async addPreset(e, i, n = !1) {
		this.plugins.addPreset(e, i, n), await this.refresh()
	}
	async addPlugin(e) {
		this.plugins.addPlugin(e), await this.refresh()
	}
	async addPathGenerator(e, i) {
		this.plugins.addPathGenerator(e, i), await this.refresh()
	}
	async addInteractor(e, i) {
		this.plugins.addInteractor(e, i), await this.refresh()
	}
	async addMover(e, i) {
		this.plugins.addParticleMover(e, i), await this.refresh()
	}
	async addParticleUpdater(e, i) {
		this.plugins.addParticleUpdater(e, i), await this.refresh()
	}
	addEventListener(e, i) {
		Qe(this, De, "f").addEventListener(e, i)
	}
	removeEventListener(e, i) {
		Qe(this, De, "f").removeEventListener(e, i)
	}
	dispatchEvent(e, i) {
		Qe(this, De, "f").dispatchEvent(e, i)
	}
}
Li = new WeakMap, De = new WeakMap;
class bt {
	constructor(e) {
		this.container = e, this.type = 0
	}
}
class ko {
	constructor(e) {
		this.container = e, this.type = 1
	}
}
const Hi = new Zf;
Hi.init();
class ep {
	constructor() {
		this.radius = 0, this.mass = 0
	}
	load(e) {
		!e || (e.mass !== void 0 && (this.mass = e.mass), e.radius !== void 0 && (this.radius = e.radius))
	}
}
class tp extends Ne {
	constructor() {
		super(), this.density = 5, this.value = 50, this.limit = new ep
	}
	load(e) {
		!e || (super.load(e), e.density !== void 0 && (this.density = e.density), typeof e.limit == "number" ? this.limit.radius = e.limit : this.limit.load(e.limit))
	}
}
class mt {
	constructor() {
		this.color = new ne, this.color.value = "#000000", this.draggable = !1, this.opacity = 1, this.destroy = !0, this.orbits = !1, this.size = new tp
	}
	load(e) {
		e !== void 0 && (e.color !== void 0 && (this.color = ne.create(this.color, e.color)), e.draggable !== void 0 && (this.draggable = e.draggable), this.name = e.name, e.opacity !== void 0 && (this.opacity = e.opacity), e.position !== void 0 && (this.position = {}, e.position.x !== void 0 && (this.position.x = V(e.position.x)), e.position.y !== void 0 && (this.position.y = V(e.position.y))), e.size !== void 0 && this.size.load(e.size), e.destroy !== void 0 && (this.destroy = e.destroy), e.orbits !== void 0 && (this.orbits = e.orbits))
	}
}
class ip {
	constructor(e, i, n, s) {
		var o, r, l;
		this.absorbers = e, this.container = i, this.initialPosition = s ? ie.create(s.x, s.y) : void 0, n instanceof mt ? this.options = n : (this.options = new mt, this.options.load(n)), this.dragging = !1, this.name = this.options.name, this.opacity = this.options.opacity, this.size = U(this.options.size.value) * i.retina.pixelRatio, this.mass = this.size * this.options.size.density * i.retina.reduceFactor;
		const a = this.options.size.limit;
		this.limit = {
			radius: a.radius * i.retina.pixelRatio * i.retina.reduceFactor,
			mass: a.mass
		}, this.color = (o = Be(this.options.color)) !== null && o !== void 0 ? o : {
			b: 0,
			g: 0,
			r: 0
		}, this.position = (l = (r = this.initialPosition) === null || r === void 0 ? void 0 : r.copy()) !== null && l !== void 0 ? l : this.calcPosition()
	}
	attract(e) {
		const i = this.container,
			n = this.options;
		if (n.draggable) {
			const c = i.interactivity.mouse;
			c.clicking && c.downPosition ? we(this.position, c.downPosition) <= this.size && (this.dragging = !0) : this.dragging = !1, this.dragging && c.position && (this.position.x = c.position.x, this.position.y = c.position.y)
		}
		const s = e.getPosition(),
			{
				dx: o,
				dy: r,
				distance: l
			} = _e(this.position, s),
			a = ie.create(o, r);
		if (a.length = this.mass / Math.pow(l, 2) * i.retina.reduceFactor, l < this.size + e.getRadius()) {
			const c = e.getRadius() * .033 * i.retina.pixelRatio;
			this.size > e.getRadius() && l < this.size - e.getRadius() || e.absorberOrbit !== void 0 && e.absorberOrbit.length < 0 ? n.destroy ? e.destroy() : (e.needsNewPosition = !0, this.updateParticlePosition(e, a)) : (n.destroy && (e.size.value -= c), this.updateParticlePosition(e, a)), (this.limit.radius <= 0 || this.size < this.limit.radius) && (this.size += c), (this.limit.mass <= 0 || this.mass < this.limit.mass) && (this.mass += c * this.options.size.density * i.retina.reduceFactor)
		} else this.updateParticlePosition(e, a)
	}
	resize() {
		const e = this.initialPosition;
		this.position = e && rn(e, this.container.canvas.size, ie.origin) ? e : this.calcPosition()
	}
	draw(e) {
		e.translate(this.position.x, this.position.y), e.beginPath(), e.arc(0, 0, this.size, 0, Math.PI * 2, !1), e.closePath(), e.fillStyle = nt(this.color, this.opacity), e.fill()
	}
	calcPosition() {
		const e = ua({
			size: this.container.canvas.size,
			position: this.options.position
		});
		return ie.create(e.x, e.y)
	}
	updateParticlePosition(e, i) {
		var n;
		if (e.destroyed) return;
		const s = this.container,
			o = s.canvas.size;
		if (e.needsNewPosition) {
			const r = ca({
				size: o
			});
			e.position.setTo(r), e.velocity.setTo(e.initialVelocity), e.absorberOrbit = void 0, e.needsNewPosition = !1
		}
		if (this.options.orbits) {
			if (e.absorberOrbit === void 0 && (e.absorberOrbit = ie.create(0, 0), e.absorberOrbit.length = we(e.getPosition(), this.position), e.absorberOrbit.angle = Math.random() * Math.PI * 2), e.absorberOrbit.length <= this.size && !this.options.destroy) {
				const u = Math.min(o.width, o.height);
				e.absorberOrbit.length = u * (1 + (Math.random() * .2 - .1))
			}
			e.absorberOrbitDirection === void 0 && (e.absorberOrbitDirection = e.velocity.x >= 0 ? "clockwise" : "counter-clockwise");
			const r = e.absorberOrbit.length,
				l = e.absorberOrbit.angle,
				a = e.absorberOrbitDirection;
			e.velocity.setTo(ie.origin);
			const c = {
				x: a === "clockwise" ? Math.cos : Math.sin,
				y: a === "clockwise" ? Math.sin : Math.cos
			};
			e.position.x = this.position.x + r * c.x(l), e.position.y = this.position.y + r * c.y(l), e.absorberOrbit.length -= i.length, e.absorberOrbit.angle += ((n = e.retina.moveSpeed) !== null && n !== void 0 ? n : 0) * s.retina.pixelRatio / 100 * s.retina.reduceFactor
		} else {
			const r = ie.origin;
			r.length = i.length, r.angle = i.angle, e.velocity.addTo(r)
		}
	}
}
class np {
	constructor(e) {
		this.container = e, this.array = [], this.absorbers = [], this.interactivityAbsorbers = [], e.getAbsorber = i => i === void 0 || typeof i == "number" ? this.array[i || 0] : this.array.find(n => n.name === i), e.addAbsorber = (i, n) => this.addAbsorber(i, n)
	}
	init(e) {
		var i, n;
		if (!e) return;
		e.absorbers && (e.absorbers instanceof Array ? this.absorbers = e.absorbers.map(o => {
			const r = new mt;
			return r.load(o), r
		}) : (this.absorbers instanceof Array && (this.absorbers = new mt), this.absorbers.load(e.absorbers)));
		const s = (n = (i = e.interactivity) === null || i === void 0 ? void 0 : i.modes) === null || n === void 0 ? void 0 : n.absorbers;
		if (s && (s instanceof Array ? this.interactivityAbsorbers = s.map(o => {
				const r = new mt;
				return r.load(o), r
			}) : (this.interactivityAbsorbers instanceof Array && (this.interactivityAbsorbers = new mt), this.interactivityAbsorbers.load(s))), this.absorbers instanceof Array)
			for (const o of this.absorbers) this.addAbsorber(o);
		else this.addAbsorber(this.absorbers)
	}
	particleUpdate(e) {
		for (const i of this.array)
			if (i.attract(e), e.destroyed) break
	}
	draw(e) {
		for (const i of this.array) e.save(), i.draw(e), e.restore()
	}
	stop() {
		this.array = []
	}
	resize() {
		for (const e of this.array) e.resize()
	}
	handleClickMode(e) {
		const i = this.absorbers,
			n = this.interactivityAbsorbers;
		if (e === "absorber") {
			let s;
			n instanceof Array ? n.length > 0 && (s = ze(n)) : s = n;
			const o = s != null ? s : i instanceof Array ? ze(i) : i,
				r = this.container.interactivity.mouse.clickPosition;
			this.addAbsorber(o, r)
		}
	}
	addAbsorber(e, i) {
		const n = new ip(this, this.container, e, i);
		return this.array.push(n), n
	}
	removeAbsorber(e) {
		const i = this.array.indexOf(e);
		i >= 0 && this.array.splice(i, 1)
	}
}
class sp {
	constructor() {
		this.id = "absorbers"
	}
	getPlugin(e) {
		return new np(e)
	}
	needsPlugin(e) {
		var i, n, s;
		if (!e) return !1;
		const o = e.absorbers;
		return o instanceof Array ? !!o.length : o ? !0 : !!(((s = (n = (i = e.interactivity) === null || i === void 0 ? void 0 : i.events) === null || n === void 0 ? void 0 : n.onClick) === null || s === void 0 ? void 0 : s.mode) && re("absorber", e.interactivity.events.onClick.mode))
	}
	loadOptions(e, i) {
		var n, s;
		if (!this.needsPlugin(e) && !this.needsPlugin(i)) return;
		const o = e;
		if (i != null && i.absorbers)
			if ((i == null ? void 0 : i.absorbers) instanceof Array) o.absorbers = i == null ? void 0 : i.absorbers.map(l => {
				const a = new mt;
				return a.load(l), a
			});
			else {
				let l = o.absorbers;
				(l == null ? void 0 : l.load) === void 0 && (o.absorbers = l = new mt), l.load(i == null ? void 0 : i.absorbers)
			} const r = (s = (n = i == null ? void 0 : i.interactivity) === null || n === void 0 ? void 0 : n.modes) === null || s === void 0 ? void 0 : s.absorbers;
		if (r)
			if (r instanceof Array) o.interactivity.modes.absorbers = r.map(l => {
				const a = new mt;
				return a.load(l), a
			});
			else {
				let l = o.interactivity.modes.absorbers;
				(l == null ? void 0 : l.load) === void 0 && (o.interactivity.modes.absorbers = l = new mt), l.load(r)
			}
	}
}
async function op(t) {
	const e = new sp;
	await t.addPlugin(e)
}
class rp {
	randomPosition(e, i, n) {
		const s = (d, h) => {
				const f = Math.random() / 4,
					p = Math.atan(h / d * Math.tan(2 * Math.PI * f)),
					y = Math.random();
				return y < .25 ? p : y < .5 ? Math.PI - p : y < .75 ? Math.PI + p : -p
			},
			o = (d, h, f) => d * h / Math.sqrt((h * Math.cos(f)) ** 2 + (d * Math.sin(f)) ** 2),
			[r, l] = [i.width / 2, i.height / 2],
			a = s(r, l),
			c = o(r, l, a),
			u = n ? c * Math.sqrt(Math.random()) : c;
		return {
			x: e.x + u * Math.cos(a),
			y: e.y + u * Math.sin(a)
		}
	}
}
class lp {
	constructor() {
		this.wait = !1
	}
	load(e) {
		e !== void 0 && (e.count !== void 0 && (this.count = e.count), e.delay !== void 0 && (this.delay = e.delay), e.duration !== void 0 && (this.duration = e.duration), e.wait !== void 0 && (this.wait = e.wait))
	}
}
class ap {
	constructor() {
		this.quantity = 1, this.delay = .1
	}
	load(e) {
		e !== void 0 && (e.quantity !== void 0 && (this.quantity = V(e.quantity)), e.delay !== void 0 && (this.delay = V(e.delay)))
	}
}
class Ea {
	constructor() {
		this.mode = "percent", this.height = 0, this.width = 0
	}
	load(e) {
		e !== void 0 && (e.mode !== void 0 && (this.mode = e.mode), e.height !== void 0 && (this.height = e.height), e.width !== void 0 && (this.width = e.width))
	}
}
class rt {
	constructor() {
		this.autoPlay = !0, this.fill = !0, this.life = new lp, this.rate = new ap, this.shape = "square", this.startCount = 0
	}
	load(e) {
		e !== void 0 && (e.autoPlay !== void 0 && (this.autoPlay = e.autoPlay), e.size !== void 0 && (this.size === void 0 && (this.size = new Ea), this.size.load(e.size)), e.direction !== void 0 && (this.direction = e.direction), this.domId = e.domId, e.fill !== void 0 && (this.fill = e.fill), this.life.load(e.life), this.name = e.name, e.particles !== void 0 && (this.particles = de({}, e.particles)), this.rate.load(e.rate), e.shape !== void 0 && (this.shape = e.shape), e.position !== void 0 && (this.position = {}, e.position.x !== void 0 && (this.position.x = V(e.position.x)), e.position.y !== void 0 && (this.position.y = V(e.position.y))), e.spawnColor !== void 0 && (this.spawnColor === void 0 && (this.spawnColor = new Bt), this.spawnColor.load(e.spawnColor)), e.startCount !== void 0 && (this.startCount = e.startCount))
	}
}
var Ai = globalThis && globalThis.__classPrivateFieldSet || function(t, e, i, n, s) {
		if (n === "m") throw new TypeError("Private method is not writable");
		if (n === "a" && !s) throw new TypeError("Private accessor was defined without a setter");
		if (typeof e == "function" ? t !== e || !s : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
		return n === "a" ? s.call(t, i) : s ? s.value = i : e.set(t, i), i
	},
	Kt = globalThis && globalThis.__classPrivateFieldGet || function(t, e, i, n) {
		if (i === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
		if (typeof e == "function" ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
		return i === "m" ? n : i === "a" ? n.call(t) : n ? n.value : e.get(t)
	},
	ui, $i, Xt;
class cp {
	constructor(e, i, n, s, o) {
		var r, l, a, c, u, d, h, f;
		this.emitters = i, this.container = n, ui.set(this, void 0), $i.set(this, void 0), Xt.set(this, void 0), Ai(this, Xt, e, "f"), this.currentDuration = 0, this.currentEmitDelay = 0, this.currentSpawnDelay = 0, this.initialPosition = o, s instanceof rt ? this.options = s : (this.options = new rt, this.options.load(s)), this.spawnDelay = ((r = this.options.life.delay) !== null && r !== void 0 ? r : 0) * 1e3 / this.container.retina.reduceFactor, this.position = (l = this.initialPosition) !== null && l !== void 0 ? l : this.calcPosition(), this.name = this.options.name, this.shape = (a = Kt(this, Xt, "f").emitterShapeManager) === null || a === void 0 ? void 0 : a.getShape(this.options.shape), this.fill = this.options.fill, Ai(this, ui, !this.options.life.wait, "f"), Ai(this, $i, !1, "f");
		let p = de({}, this.options.particles);
		p != null || (p = {}), (c = p.move) !== null && c !== void 0 || (p.move = {}), (u = (f = p.move).direction) !== null && u !== void 0 || (f.direction = this.options.direction), this.options.spawnColor && (this.spawnColor = Nt(this.options.spawnColor)), this.paused = !this.options.autoPlay, this.particlesOptions = p, this.size = (d = this.options.size) !== null && d !== void 0 ? d : (() => {
			const y = new Ea;
			return y.load({
				height: 0,
				mode: "percent",
				width: 0
			}), y
		})(), this.lifeCount = (h = this.options.life.count) !== null && h !== void 0 ? h : -1, this.immortal = this.lifeCount <= 0, Kt(this, Xt, "f").dispatchEvent("emitterCreated", {
			container: n,
			data: {
				emitter: this
			}
		}), this.play()
	}
	externalPlay() {
		this.paused = !1, this.play()
	}
	externalPause() {
		this.paused = !0, this.pause()
	}
	play() {
		var e;
		if (!this.paused && !!(this.container.retina.reduceFactor && (this.lifeCount > 0 || this.immortal || !this.options.life.count) && (Kt(this, ui, "f") || this.currentSpawnDelay >= ((e = this.spawnDelay) !== null && e !== void 0 ? e : 0)))) {
			if (this.emitDelay === void 0) {
				const i = U(this.options.rate.delay);
				this.emitDelay = 1e3 * i / this.container.retina.reduceFactor
			}(this.lifeCount > 0 || this.immortal) && this.prepareToDie()
		}
	}
	pause() {
		this.paused || delete this.emitDelay
	}
	resize() {
		const e = this.initialPosition;
		this.position = e && rn(e, this.container.canvas.size, ie.origin) ? e : this.calcPosition()
	}
	update(e) {
		var i, n, s;
		this.paused || (Kt(this, ui, "f") && (Ai(this, ui, !1, "f"), this.currentSpawnDelay = (i = this.spawnDelay) !== null && i !== void 0 ? i : 0, this.currentEmitDelay = (n = this.emitDelay) !== null && n !== void 0 ? n : 0), Kt(this, $i, "f") || (Ai(this, $i, !0, "f"), this.emitParticles(this.options.startCount)), this.duration !== void 0 && (this.currentDuration += e.value, this.currentDuration >= this.duration && (this.pause(), this.spawnDelay !== void 0 && delete this.spawnDelay, this.immortal || this.lifeCount--, this.lifeCount > 0 || this.immortal ? (this.position = this.calcPosition(), this.spawnDelay = ((s = this.options.life.delay) !== null && s !== void 0 ? s : 0) * 1e3 / this.container.retina.reduceFactor) : this.destroy(), this.currentDuration -= this.duration, delete this.duration)), this.spawnDelay !== void 0 && (this.currentSpawnDelay += e.value, this.currentSpawnDelay >= this.spawnDelay && (Kt(this, Xt, "f").dispatchEvent("emitterPlay", {
			container: this.container
		}), this.play(), this.currentSpawnDelay -= this.currentSpawnDelay, delete this.spawnDelay)), this.emitDelay !== void 0 && (this.currentEmitDelay += e.value, this.currentEmitDelay >= this.emitDelay && (this.emit(), this.currentEmitDelay -= this.emitDelay)))
	}
	getPosition() {
		if (this.options.domId) {
			const e = this.container,
				i = document.getElementById(this.options.domId);
			if (i) {
				const n = i.getBoundingClientRect();
				return {
					x: (n.x + n.width / 2) * e.retina.pixelRatio,
					y: (n.y + n.height / 2) * e.retina.pixelRatio
				}
			}
		}
		return this.position
	}
	getSize() {
		const e = this.container;
		if (this.options.domId) {
			const i = document.getElementById(this.options.domId);
			if (i) {
				const n = i.getBoundingClientRect();
				return {
					width: n.width * e.retina.pixelRatio,
					height: n.height * e.retina.pixelRatio
				}
			}
		}
		return {
			width: this.size.mode === "percent" ? e.canvas.size.width * this.size.width / 100 : this.size.width,
			height: this.size.mode === "percent" ? e.canvas.size.height * this.size.height / 100 : this.size.height
		}
	}
	prepareToDie() {
		var e;
		if (this.paused) return;
		const i = (e = this.options.life) === null || e === void 0 ? void 0 : e.duration;
		this.container.retina.reduceFactor && (this.lifeCount > 0 || this.immortal) && i !== void 0 && i > 0 && (this.duration = i * 1e3)
	}
	destroy() {
		this.emitters.removeEmitter(this), Kt(this, Xt, "f").dispatchEvent("emitterDestroyed", {
			container: this.container,
			data: {
				emitter: this
			}
		})
	}
	calcPosition() {
		return ua({
			size: this.container.canvas.size,
			position: this.options.position
		})
	}
	emit() {
		if (this.paused) return;
		const e = U(this.options.rate.quantity);
		this.emitParticles(e)
	}
	emitParticles(e) {
		var i, n, s;
		const o = this.getPosition(),
			r = this.getSize();
		for (let l = 0; l < e; l++) {
			const a = de({}, this.particlesOptions);
			if (this.spawnColor) {
				const u = (i = this.options.spawnColor) === null || i === void 0 ? void 0 : i.animation;
				u && (this.spawnColor.h = this.setColorAnimation(u.h, this.spawnColor.h, 360), this.spawnColor.s = this.setColorAnimation(u.s, this.spawnColor.s, 100), this.spawnColor.l = this.setColorAnimation(u.l, this.spawnColor.l, 100)), a.color ? a.color.value = this.spawnColor : a.color = {
					value: this.spawnColor
				}
			}
			if (!o) return;
			const c = (s = (n = this.shape) === null || n === void 0 ? void 0 : n.randomPosition(o, r, this.fill)) !== null && s !== void 0 ? s : o;
			this.container.particles.addParticle(c, a)
		}
	}
	setColorAnimation(e, i, n) {
		var s;
		const o = this.container;
		if (!e.enable) return i;
		const r = Pe(e.offset),
			l = U(this.options.rate.delay),
			a = 1e3 * l / o.retina.reduceFactor,
			c = U((s = e.speed) !== null && s !== void 0 ? s : 0);
		return (i + c * o.fpsLimit / a + r * 3.6) % n
	}
}
ui = new WeakMap, $i = new WeakMap, Xt = new WeakMap;
var up = globalThis && globalThis.__classPrivateFieldSet || function(t, e, i, n, s) {
		if (n === "m") throw new TypeError("Private method is not writable");
		if (n === "a" && !s) throw new TypeError("Private accessor was defined without a setter");
		if (typeof e == "function" ? t !== e || !s : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
		return n === "a" ? s.call(t, i) : s ? s.value = i : e.set(t, i), i
	},
	dp = globalThis && globalThis.__classPrivateFieldGet || function(t, e, i, n) {
		if (i === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
		if (typeof e == "function" ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
		return i === "m" ? n : i === "a" ? n.call(t) : n ? n.value : e.get(t)
	},
	Mn;
class hp {
	constructor(e, i) {
		this.container = i, Mn.set(this, void 0), up(this, Mn, e, "f"), this.array = [], this.emitters = [], this.interactivityEmitters = [], i.getEmitter = n => n === void 0 || typeof n == "number" ? this.array[n || 0] : this.array.find(s => s.name === n), i.addEmitter = (n, s) => this.addEmitter(n, s), i.removeEmitter = n => {
			const s = i.getEmitter(n);
			s && this.removeEmitter(s)
		}, i.playEmitter = n => {
			const s = i.getEmitter(n);
			s && s.externalPlay()
		}, i.pauseEmitter = n => {
			const s = i.getEmitter(n);
			s && s.externalPause()
		}
	}
	init(e) {
		var i, n;
		if (!e) return;
		e.emitters && (e.emitters instanceof Array ? this.emitters = e.emitters.map(o => {
			const r = new rt;
			return r.load(o), r
		}) : (this.emitters instanceof Array && (this.emitters = new rt), this.emitters.load(e.emitters)));
		const s = (n = (i = e.interactivity) === null || i === void 0 ? void 0 : i.modes) === null || n === void 0 ? void 0 : n.emitters;
		if (s && (s instanceof Array ? this.interactivityEmitters = s.map(o => {
				const r = new rt;
				return r.load(o), r
			}) : (this.interactivityEmitters instanceof Array && (this.interactivityEmitters = new rt), this.interactivityEmitters.load(s))), this.emitters instanceof Array)
			for (const o of this.emitters) this.addEmitter(o);
		else this.addEmitter(this.emitters)
	}
	play() {
		for (const e of this.array) e.play()
	}
	pause() {
		for (const e of this.array) e.pause()
	}
	stop() {
		this.array = []
	}
	update(e) {
		for (const i of this.array) i.update(e)
	}
	handleClickMode(e) {
		const i = this.emitters,
			n = this.interactivityEmitters;
		if (e === "emitter") {
			let s;
			n instanceof Array ? n.length > 0 && (s = ze(n)) : s = n;
			const o = s != null ? s : i instanceof Array ? ze(i) : i,
				r = this.container.interactivity.mouse.clickPosition;
			this.addEmitter(de({}, o), r)
		}
	}
	resize() {
		for (const e of this.array) e.resize()
	}
	addEmitter(e, i) {
		const n = new rt;
		n.load(e);
		const s = new cp(dp(this, Mn, "f"), this, this.container, n, i);
		return this.array.push(s), s
	}
	removeEmitter(e) {
		const i = this.array.indexOf(e);
		i >= 0 && this.array.splice(i, 1)
	}
}
Mn = new WeakMap;
var fp = globalThis && globalThis.__classPrivateFieldSet || function(t, e, i, n, s) {
		if (n === "m") throw new TypeError("Private method is not writable");
		if (n === "a" && !s) throw new TypeError("Private accessor was defined without a setter");
		if (typeof e == "function" ? t !== e || !s : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
		return n === "a" ? s.call(t, i) : s ? s.value = i : e.set(t, i), i
	},
	Ks;
const ws = new Map;
class pp {
	constructor(e) {
		Ks.set(this, void 0), fp(this, Ks, e, "f")
	}
	addShape(e, i) {
		this.getShape(e) || ws.set(e, i)
	}
	getShape(e) {
		return ws.get(e)
	}
	getSupportedShapes() {
		return ws.keys()
	}
}
Ks = new WeakMap;

function Rr(t, e) {
	return t + e * (Math.random() - .5)
}
class yp {
	randomPosition(e, i, n) {
		if (n) return {
			x: Rr(e.x, i.width),
			y: Rr(e.y, i.height)
		}; {
			const s = i.width / 2,
				o = i.height / 2,
				r = Math.floor(Math.random() * 4),
				l = (Math.random() - .5) * 2;
			switch (r) {
				case 0:
					return {
						x: e.x + l * s, y: e.y - o
					};
				case 1:
					return {
						x: e.x - s, y: e.y + l * o
					};
				case 2:
					return {
						x: e.x + l * s, y: e.y + o
					};
				case 3:
				default:
					return {
						x: e.x + s, y: e.y + l * o
					}
			}
		}
	}
}
var mp = globalThis && globalThis.__classPrivateFieldSet || function(t, e, i, n, s) {
		if (n === "m") throw new TypeError("Private method is not writable");
		if (n === "a" && !s) throw new TypeError("Private accessor was defined without a setter");
		if (typeof e == "function" ? t !== e || !s : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
		return n === "a" ? s.call(t, i) : s ? s.value = i : e.set(t, i), i
	},
	vp = globalThis && globalThis.__classPrivateFieldGet || function(t, e, i, n) {
		if (i === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
		if (typeof e == "function" ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
		return i === "m" ? n : i === "a" ? n.call(t) : n ? n.value : e.get(t)
	},
	jn;
class gp {
	constructor(e) {
		jn.set(this, void 0), mp(this, jn, e, "f"), this.id = "emitters"
	}
	getPlugin(e) {
		return new hp(vp(this, jn, "f"), e)
	}
	needsPlugin(e) {
		var i, n, s;
		if (e === void 0) return !1;
		const o = e.emitters;
		return o instanceof Array && !!o.length || o !== void 0 || !!(!((s = (n = (i = e.interactivity) === null || i === void 0 ? void 0 : i.events) === null || n === void 0 ? void 0 : n.onClick) === null || s === void 0) && s.mode) && re("emitter", e.interactivity.events.onClick.mode)
	}
	loadOptions(e, i) {
		var n, s;
		if (!this.needsPlugin(e) && !this.needsPlugin(i)) return;
		const o = e;
		if (i != null && i.emitters)
			if ((i == null ? void 0 : i.emitters) instanceof Array) o.emitters = i == null ? void 0 : i.emitters.map(l => {
				const a = new rt;
				return a.load(l), a
			});
			else {
				let l = o.emitters;
				(l == null ? void 0 : l.load) === void 0 && (o.emitters = l = new rt), l.load(i == null ? void 0 : i.emitters)
			} const r = (s = (n = i == null ? void 0 : i.interactivity) === null || n === void 0 ? void 0 : n.modes) === null || s === void 0 ? void 0 : s.emitters;
		if (r)
			if (r instanceof Array) o.interactivity.modes.emitters = r.map(l => {
				const a = new rt;
				return a.load(l), a
			});
			else {
				let l = o.interactivity.modes.emitters;
				(l == null ? void 0 : l.load) === void 0 && (o.interactivity.modes.emitters = l = new rt), l.load(r)
			}
	}
}
jn = new WeakMap;
async function bp(t) {
	t.emitterShapeManager || (t.emitterShapeManager = new pp(t)), t.addEmitterShape || (t.addEmitterShape = (i, n) => {
		var s;
		(s = t.emitterShapeManager) === null || s === void 0 || s.addShape(i, n)
	});
	const e = new gp(t);
	await t.addPlugin(e), t.addEmitterShape("circle", new rp), t.addEmitterShape("square", new yp)
}
class xp extends bt {
	constructor(e) {
		super(e), this.delay = 0
	}
	async interact(e) {
		var i, n, s, o;
		if (!this.container.retina.reduceFactor) return;
		const r = this.container,
			l = r.actualOptions,
			a = l.interactivity.modes.trail,
			c = a.delay * 1e3 / this.container.retina.reduceFactor;
		if (this.delay < c && (this.delay += e.value), this.delay < c) return;
		let u = !0;
		a.pauseOnStop && (r.interactivity.mouse.position === this.lastPosition || ((i = r.interactivity.mouse.position) === null || i === void 0 ? void 0 : i.x) === ((n = this.lastPosition) === null || n === void 0 ? void 0 : n.x) && ((s = r.interactivity.mouse.position) === null || s === void 0 ? void 0 : s.y) === ((o = this.lastPosition) === null || o === void 0 ? void 0 : o.y)) && (u = !1), r.interactivity.mouse.position ? this.lastPosition = {
			x: r.interactivity.mouse.position.x,
			y: r.interactivity.mouse.position.y
		} : delete this.lastPosition, u && r.particles.push(a.quantity, r.interactivity.mouse, a.particles), this.delay -= c
	}
	isEnabled() {
		const e = this.container,
			i = e.actualOptions,
			n = e.interactivity.mouse,
			s = i.interactivity.events;
		return n.clicking && n.inside && !!n.position && re("trail", s.onClick.mode) || n.inside && !!n.position && re("trail", s.onHover.mode)
	}
	reset() {}
}
async function wp(t) {
	await t.addInteractor("externalTrail", e => new xp(e))
}
const Pp = "modulepreload",
	Ir = {},
	_p = "/",
	Mp = function(e, i) {
		return !i || i.length === 0 ? e() : Promise.all(i.map(n => {
			if (n = `${_p}${n}`, n in Ir) return;
			Ir[n] = !0;
			const s = n.endsWith(".css"),
				o = s ? '[rel="stylesheet"]' : "";
			if (document.querySelector(`link[href="${n}"]${o}`)) return;
			const r = document.createElement("link");
			if (r.rel = s ? "stylesheet" : Pp, s || (r.as = "script", r.crossOrigin = ""), r.href = n, document.head.appendChild(r), s) return new Promise((l, a) => {
				r.addEventListener("load", l), r.addEventListener("error", () => a(new Error(`Unable to preload CSS for ${n}`)))
			})
		})).then(() => e())
	};
class jp {
	constructor() {
		this.color = new ne, this.width = .5, this.opacity = 1
	}
	load(e) {
		var i;
		!e || (this.color = ne.create(this.color, e.color), typeof this.color.value == "string" && (this.opacity = (i = gf(this.color.value)) !== null && i !== void 0 ? i : this.opacity), e.opacity !== void 0 && (this.opacity = e.opacity), e.width !== void 0 && (this.width = e.width))
	}
}
class Ep {
	constructor() {
		this.enable = !1, this.stroke = new jp
	}
	get lineWidth() {
		return this.stroke.width
	}
	set lineWidth(e) {
		this.stroke.width = e
	}
	get lineColor() {
		return this.stroke.color
	}
	set lineColor(e) {
		this.stroke.color = ne.create(this.stroke.color, e)
	}
	load(e) {
		var i;
		if (!e) return;
		e.enable !== void 0 && (this.enable = e.enable);
		const n = (i = e.stroke) !== null && i !== void 0 ? i : {
			color: e.lineColor,
			width: e.lineWidth
		};
		this.stroke.load(n)
	}
}
class Cp {
	constructor() {
		this.arrangement = "one-per-point"
	}
	load(e) {
		!e || e.arrangement !== void 0 && (this.arrangement = e.arrangement)
	}
}
class Op {
	constructor() {
		this.path = [], this.size = {
			height: 0,
			width: 0
		}
	}
	load(e) {
		!e || (e.path !== void 0 && (this.path = e.path), e.size !== void 0 && (e.size.width !== void 0 && (this.size.width = e.size.width), e.size.height !== void 0 && (this.size.height = e.size.height)))
	}
}
class Sp {
	constructor() {
		this.radius = 10, this.type = "path"
	}
	load(e) {
		!e || (e.radius !== void 0 && (this.radius = e.radius), e.type !== void 0 && (this.type = e.type))
	}
}
class Ca {
	constructor() {
		this.draw = new Ep, this.enable = !1, this.inline = new Cp, this.move = new Sp, this.scale = 1, this.type = "none"
	}
	get inlineArrangement() {
		return this.inline.arrangement
	}
	set inlineArrangement(e) {
		this.inline.arrangement = e
	}
	load(e) {
		!e || (this.draw.load(e.draw), this.inline.load(e.inline), this.move.load(e.move), e.scale !== void 0 && (this.scale = e.scale), e.type !== void 0 && (this.type = e.type), e.enable !== void 0 ? this.enable = e.enable : this.enable = this.type !== "none", e.url !== void 0 && (this.url = e.url), e.data !== void 0 && (typeof e.data == "string" ? this.data = e.data : (this.data = new Op, this.data.load(e.data))), e.position !== void 0 && (this.position = de({}, e.position)))
	}
}

function Tp(t, e, i) {
	const n = Be(i.color);
	if (!!n) {
		t.beginPath(), t.moveTo(e[0].x, e[0].y);
		for (const s of e) t.lineTo(s.x, s.y);
		t.closePath(), t.strokeStyle = nt(n), t.lineWidth = i.width, t.stroke()
	}
}

function kp(t, e, i, n) {
	t.translate(n.x, n.y);
	const s = Be(i.color);
	!s || (t.strokeStyle = nt(s, i.opacity), t.lineWidth = i.width, t.stroke(e))
}

function Ap(t, e, i) {
	var n;
	const s = [];
	for (const o of t) {
		const r = o.element.pathSegList,
			l = (n = r == null ? void 0 : r.numberOfItems) !== null && n !== void 0 ? n : 0,
			a = {
				x: 0,
				y: 0
			};
		for (let c = 0; c < l; c++) {
			const u = r == null ? void 0 : r.getItem(c),
				d = window.SVGPathSeg;
			switch (u == null ? void 0 : u.pathSegType) {
				case d.PATHSEG_MOVETO_ABS:
				case d.PATHSEG_LINETO_ABS:
				case d.PATHSEG_CURVETO_CUBIC_ABS:
				case d.PATHSEG_CURVETO_QUADRATIC_ABS:
				case d.PATHSEG_ARC_ABS:
				case d.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
				case d.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: {
					const h = u;
					a.x = h.x, a.y = h.y;
					break
				}
				case d.PATHSEG_LINETO_HORIZONTAL_ABS:
					a.x = u.x;
					break;
				case d.PATHSEG_LINETO_VERTICAL_ABS:
					a.y = u.y;
					break;
				case d.PATHSEG_LINETO_REL:
				case d.PATHSEG_MOVETO_REL:
				case d.PATHSEG_CURVETO_CUBIC_REL:
				case d.PATHSEG_CURVETO_QUADRATIC_REL:
				case d.PATHSEG_ARC_REL:
				case d.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
				case d.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: {
					const h = u;
					a.x += h.x, a.y += h.y;
					break
				}
				case d.PATHSEG_LINETO_HORIZONTAL_REL:
					a.x += u.x;
					break;
				case d.PATHSEG_LINETO_VERTICAL_REL:
					a.y += u.y;
					break;
				case d.PATHSEG_UNKNOWN:
				case d.PATHSEG_CLOSEPATH:
					continue
			}
			s.push({
				x: a.x * e + i.x,
				y: a.y * e + i.y
			})
		}
	}
	return s
}

function zp(t, e, i) {
	const {
		dx: n,
		dy: s
	} = _e(i, t), {
		dx: o,
		dy: r
	} = _e(e, t), l = (n * o + s * r) / (o ** 2 + r ** 2), a = {
		x: t.x + o * l,
		y: t.x + r * l,
		isOnSegment: l >= 0 && l <= 1
	};
	return l < 0 ? (a.x = t.x, a.y = t.y) : l > 1 && (a.x = e.x, a.y = e.y), a
}

function Rp(t, e, i) {
	const {
		dx: n,
		dy: s
	} = _e(t, e), o = Math.atan2(s, n), r = ie.create(Math.sin(o), -Math.cos(o)), l = 2 * (i.x * r.x + i.y * r.y);
	r.multTo(l), i.subFrom(r)
}
var Ip = globalThis && globalThis.__classPrivateFieldSet || function(t, e, i, n, s) {
		if (n === "m") throw new TypeError("Private method is not writable");
		if (n === "a" && !s) throw new TypeError("Private accessor was defined without a setter");
		if (typeof e == "function" ? t !== e || !s : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
		return n === "a" ? s.call(t, i) : s ? s.value = i : e.set(t, i), i
	},
	Fp = globalThis && globalThis.__classPrivateFieldGet || function(t, e, i, n) {
		if (i === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
		if (typeof e == "function" ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
		return i === "m" ? n : i === "a" ? n.call(t) : n ? n.value : e.get(t)
	},
	En;
class Dp {
	constructor(e, i) {
		this.container = e, En.set(this, void 0), Ip(this, En, i, "f"), this.dimension = {
			height: 0,
			width: 0
		}, this.path2DSupported = !!window.Path2D, this.options = new Ca, this.polygonMaskMoveRadius = this.options.move.radius * e.retina.pixelRatio
	}
	async initAsync(e) {
		this.options.load(e == null ? void 0 : e.polygon);
		const i = this.options;
		this.polygonMaskMoveRadius = i.move.radius * this.container.retina.pixelRatio, i.enable && await this.initRawData()
	}
	resize() {
		const e = this.container,
			i = this.options;
		!(i.enable && i.type !== "none") || (this.redrawTimeout && clearTimeout(this.redrawTimeout), this.redrawTimeout = window.setTimeout(async () => {
			await this.initRawData(!0), await e.particles.redraw()
		}, 250))
	}
	stop() {
		delete this.raw, delete this.paths
	}
	particlesInitialization() {
		const e = this.options;
		return e.enable && e.type === "inline" && (e.inline.arrangement === "one-per-point" || e.inline.arrangement === "per-point") ? (this.drawPoints(), !0) : !1
	}
	particlePosition(e) {
		var i, n;
		if (!!(this.options.enable && ((n = (i = this.raw) === null || i === void 0 ? void 0 : i.length) !== null && n !== void 0 ? n : 0) > 0)) return de({}, e || this.randomPoint())
	}
	particleBounce(e, i, n) {
		return this.polygonBounce(e, i, n)
	}
	clickPositionValid(e) {
		const i = this.options;
		return i.enable && i.type !== "none" && i.type !== "inline" && this.checkInsidePolygon(e)
	}
	draw(e) {
		var i;
		if (!(!((i = this.paths) === null || i === void 0) && i.length)) return;
		const n = this.options,
			s = n.draw;
		if (!n.enable || !s.enable) return;
		const o = this.raw;
		for (const r of this.paths) {
			const l = r.path2d,
				a = this.path2DSupported;
			!e || (a && l && this.offset ? kp(e, l, s.stroke, this.offset) : o && Tp(e, o, s.stroke))
		}
	}
	polygonBounce(e, i, n) {
		const s = this.options;
		if (!this.raw || !s.enable || n !== "top") return !1;
		if (s.type === "inside" || s.type === "outside") {
			let o, r, l;
			const a = e.getPosition(),
				c = e.getRadius();
			for (let u = 0, d = this.raw.length - 1; u < this.raw.length; d = u++) {
				const h = this.raw[u],
					f = this.raw[d];
				o = zp(h, f, a);
				const p = _e(a, o);
				if ([r, l] = [p.dx, p.dy], p.distance < c) return Rp(h, f, e.velocity), !0
			}
			if (o && r !== void 0 && l !== void 0 && !this.checkInsidePolygon(a)) {
				const u = {
					x: 1,
					y: 1
				};
				return e.position.x >= o.x && (u.x = -1), e.position.y >= o.y && (u.y = -1), e.position.x = o.x + c * 2 * u.x, e.position.y = o.y + c * 2 * u.y, e.velocity.mult(-1), !0
			}
		} else if (s.type === "inline" && e.initialPosition && we(e.initialPosition, e.getPosition()) > this.polygonMaskMoveRadius) return e.velocity.x = e.velocity.y / 2 - e.velocity.x, e.velocity.y = e.velocity.x / 2 - e.velocity.y, !0;
		return !1
	}
	checkInsidePolygon(e) {
		var i, n;
		const s = this.container,
			o = this.options;
		if (!o.enable || o.type === "none" || o.type === "inline") return !0;
		if (!this.raw) throw new Error(vf);
		const r = s.canvas.size,
			l = (i = e == null ? void 0 : e.x) !== null && i !== void 0 ? i : Math.random() * r.width,
			a = (n = e == null ? void 0 : e.y) !== null && n !== void 0 ? n : Math.random() * r.height;
		let c = !1;
		for (let u = 0, d = this.raw.length - 1; u < this.raw.length; d = u++) {
			const h = this.raw[u],
				f = this.raw[d];
			h.y > a != f.y > a && l < (f.x - h.x) * (a - h.y) / (f.y - h.y) + h.x && (c = !c)
		}
		return o.type === "inside" ? c : o.type === "outside" ? !c : !1
	}
	parseSvgPath(e, i) {
		var n, s, o;
		const r = i != null ? i : !1;
		if (this.paths !== void 0 && !r) return this.raw;
		const l = this.container,
			a = this.options,
			c = new DOMParser,
			u = c.parseFromString(e, "image/svg+xml"),
			d = u.getElementsByTagName("svg")[0];
		let h = d.getElementsByTagName("path");
		h.length || (h = u.getElementsByTagName("path")), this.paths = [];
		for (let v = 0; v < h.length; v++) {
			const g = h.item(v);
			g && this.paths.push({
				element: g,
				length: g.getTotalLength()
			})
		}
		const f = l.retina.pixelRatio,
			p = a.scale / f;
		this.dimension.width = parseFloat((n = d.getAttribute("width")) !== null && n !== void 0 ? n : "0") * p, this.dimension.height = parseFloat((s = d.getAttribute("height")) !== null && s !== void 0 ? s : "0") * p;
		const y = (o = a.position) !== null && o !== void 0 ? o : {
			x: 50,
			y: 50
		};
		return this.offset = {
			x: l.canvas.size.width * y.x / (100 * f) - this.dimension.width / 2,
			y: l.canvas.size.height * y.y / (100 * f) - this.dimension.height / 2
		}, Ap(this.paths, p, this.offset)
	}
	async downloadSvgPath(e, i) {
		const n = this.options,
			s = e || n.url,
			o = i != null ? i : !1;
		if (!s || this.paths !== void 0 && !o) return this.raw;
		const r = await fetch(s);
		if (!r.ok) throw new Error("tsParticles Error - Error occurred during polygon mask download");
		return this.parseSvgPath(await r.text(), i)
	}
	drawPoints() {
		if (!!this.raw)
			for (const e of this.raw) this.container.particles.addParticle({
				x: e.x,
				y: e.y
			})
	}
	randomPoint() {
		const e = this.container,
			i = this.options;
		let n;
		if (i.type === "inline") switch (i.inline.arrangement) {
			case "random-point":
				n = this.getRandomPoint();
				break;
			case "random-length":
				n = this.getRandomPointByLength();
				break;
			case "equidistant":
				n = this.getEquidistantPointByIndex(e.particles.count);
				break;
			case "one-per-point":
			case "per-point":
			default:
				n = this.getPointByIndex(e.particles.count)
		} else n = {
			x: Math.random() * e.canvas.size.width,
			y: Math.random() * e.canvas.size.height
		};
		return this.checkInsidePolygon(n) ? n : this.randomPoint()
	}
	getRandomPoint() {
		if (!this.raw || !this.raw.length) throw new Error(fn);
		const e = ze(this.raw);
		return {
			x: e.x,
			y: e.y
		}
	}
	getRandomPointByLength() {
		var e, i, n;
		const s = this.options;
		if (!this.raw || !this.raw.length || !(!((e = this.paths) === null || e === void 0) && e.length)) throw new Error(fn);
		const o = ze(this.paths),
			r = Math.floor(Math.random() * o.length) + 1,
			l = o.element.getPointAtLength(r);
		return {
			x: l.x * s.scale + (((i = this.offset) === null || i === void 0 ? void 0 : i.x) || 0),
			y: l.y * s.scale + (((n = this.offset) === null || n === void 0 ? void 0 : n.y) || 0)
		}
	}
	getEquidistantPointByIndex(e) {
		var i, n, s, o, r, l, a;
		const c = this.container.actualOptions,
			u = this.options;
		if (!this.raw || !this.raw.length || !(!((i = this.paths) === null || i === void 0) && i.length)) throw new Error(fn);
		let d = 0,
			h;
		const f = this.paths.reduce((y, v) => y + v.length, 0),
			p = f / c.particles.number.value;
		for (const y of this.paths) {
			const v = p * e - d;
			if (v <= y.length) {
				h = y.element.getPointAtLength(v);
				break
			} else d += y.length
		}
		return {
			x: ((n = h == null ? void 0 : h.x) !== null && n !== void 0 ? n : 0) * u.scale + ((o = (s = this.offset) === null || s === void 0 ? void 0 : s.x) !== null && o !== void 0 ? o : 0),
			y: ((r = h == null ? void 0 : h.y) !== null && r !== void 0 ? r : 0) * u.scale + ((a = (l = this.offset) === null || l === void 0 ? void 0 : l.y) !== null && a !== void 0 ? a : 0)
		}
	}
	getPointByIndex(e) {
		if (!this.raw || !this.raw.length) throw new Error(fn);
		const i = this.raw[e % this.raw.length];
		return {
			x: i.x,
			y: i.y
		}
	}
	createPath2D() {
		var e, i;
		const n = this.options;
		if (!(!this.path2DSupported || !(!((e = this.paths) === null || e === void 0) && e.length)))
			for (const s of this.paths) {
				const o = (i = s.element) === null || i === void 0 ? void 0 : i.getAttribute("d");
				if (o) {
					const r = new Path2D(o),
						l = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix(),
						a = new Path2D,
						c = l.scale(n.scale);
					a.addPath ? (a.addPath(r, c), s.path2d = a) : delete s.path2d
				} else delete s.path2d;
				s.path2d || !this.raw || (s.path2d = new Path2D, s.path2d.moveTo(this.raw[0].x, this.raw[0].y), this.raw.forEach((r, l) => {
					var a;
					l > 0 && ((a = s.path2d) === null || a === void 0 || a.lineTo(r.x, r.y))
				}), s.path2d.closePath())
			}
	}
	async initRawData(e) {
		const i = this.options;
		if (i.url) this.raw = await this.downloadSvgPath(i.url, e);
		else if (i.data) {
			const n = i.data;
			let s;
			if (typeof n != "string") {
				const o = n.path instanceof Array ? n.path.map(l => `<path d="${l}" />`).join("") : `<path d="${n.path}" />`;
				s = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${n.size.width}" height="${n.size.height}">${o}</svg>`
			} else s = n;
			this.raw = this.parseSvgPath(s, e)
		}
		this.createPath2D(), Fp(this, En, "f").dispatchEvent("polygonMaskLoaded", {
			container: this.container
		})
	}
}
En = new WeakMap;
var Lp = globalThis && globalThis.__classPrivateFieldSet || function(t, e, i, n, s) {
		if (n === "m") throw new TypeError("Private method is not writable");
		if (n === "a" && !s) throw new TypeError("Private accessor was defined without a setter");
		if (typeof e == "function" ? t !== e || !s : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
		return n === "a" ? s.call(t, i) : s ? s.value = i : e.set(t, i), i
	},
	Hp = globalThis && globalThis.__classPrivateFieldGet || function(t, e, i, n) {
		if (i === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
		if (typeof e == "function" ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
		return i === "m" ? n : i === "a" ? n.call(t) : n ? n.value : e.get(t)
	},
	Cn;
class $p {
	constructor(e) {
		Cn.set(this, void 0), this.id = "polygonMask", Lp(this, Cn, e, "f")
	}
	getPlugin(e) {
		return new Dp(e, Hp(this, Cn, "f"))
	}
	needsPlugin(e) {
		var i, n, s;
		return (n = (i = e == null ? void 0 : e.polygon) === null || i === void 0 ? void 0 : i.enable) !== null && n !== void 0 ? n : ((s = e == null ? void 0 : e.polygon) === null || s === void 0 ? void 0 : s.type) !== void 0 && e.polygon.type !== "none"
	}
	loadOptions(e, i) {
		if (!this.needsPlugin(i)) return;
		const n = e;
		let s = n.polygon;
		(s == null ? void 0 : s.load) === void 0 && (n.polygon = s = new Ca), s.load(i == null ? void 0 : i.polygon)
	}
}
Cn = new WeakMap;
async function Bp(t) {
	!Vt() && !("SVGPathSeg" in window) && await Mp(() => import("./pathseg.7140b611.js"), []);
	const e = new $p(t);
	await t.addPlugin(e)
}

function Vp(t, e) {
	const i = t.options.roll;
	if (!t.roll || !i.enable) return;
	const n = t.roll.speed * e.factor,
		s = 2 * Math.PI;
	t.roll.angle += n, t.roll.angle > s && (t.roll.angle -= s)
}
class Np {
	init(e) {
		const i = e.options.roll;
		if (i.enable)
			if (e.roll = {
					angle: Math.random() * Math.PI * 2,
					speed: U(i.speed) / 360
				}, i.backColor) e.backColor = Nt(i.backColor);
			else if (i.darken.enable && i.enlighten.enable) {
			const n = Math.random() >= .5 ? "darken" : "enlighten";
			e.roll.alter = {
				type: n,
				value: U(n === "darken" ? i.darken.value : i.enlighten.value)
			}
		} else i.darken.enable ? e.roll.alter = {
			type: "darken",
			value: U(i.darken.value)
		} : i.enlighten.enable && (e.roll.alter = {
			type: "enlighten",
			value: U(i.enlighten.value)
		});
		else e.roll = {
			angle: 0,
			speed: 0
		}
	}
	isEnabled(e) {
		const i = e.options.roll;
		return !e.destroyed && !e.spawning && i.enable
	}
	update(e, i) {
		!this.isEnabled(e) || Vp(e, i)
	}
}
async function Wp(t) {
	await t.addParticleUpdater("roll", () => new Np)
}
const Up = t => {
	const e = (n, s) => t.load(n, s);
	e.load = (n, s, o) => {
		t.loadJSON(n, s).then(r => {
			r && o(r)
		}).catch(() => {
			o(void 0)
		})
	}, e.setOnClickHandler = n => {
		t.setOnClickHandler(n)
	};
	const i = t.dom();
	return {
		particlesJS: e,
		pJSDom: i
	}
};

function Gp(t, e) {
	var i;
	const n = t.rotate;
	if (!n) return;
	const o = t.options.rotate.animation,
		r = ((i = n.velocity) !== null && i !== void 0 ? i : 0) * e.factor,
		l = 2 * Math.PI;
	if (!!o.enable) switch (n.status) {
		case 0:
			n.value += r, n.value > l && (n.value -= l);
			break;
		case 1:
		default:
			n.value -= r, n.value < 0 && (n.value += l);
			break
	}
}
class qp {
	constructor(e) {
		this.container = e
	}
	init(e) {
		const i = e.options.rotate;
		e.rotate = {
			enable: i.animation.enable,
			value: U(i.value) * Math.PI / 180
		};
		let n = i.direction;
		switch (n === "random" && (n = Math.floor(Math.random() * 2) > 0 ? "counter-clockwise" : "clockwise"), n) {
			case "counter-clockwise":
			case "counterClockwise":
				e.rotate.status = 1;
				break;
			case "clockwise":
				e.rotate.status = 0;
				break
		}
		const s = e.options.rotate.animation;
		s.enable && (e.rotate.velocity = U(s.speed) / 360 * this.container.retina.reduceFactor, s.sync || (e.rotate.velocity *= Math.random()))
	}
	isEnabled(e) {
		const i = e.options.rotate,
			n = i.animation;
		return !e.destroyed && !e.spawning && !i.path && n.enable
	}
	update(e, i) {
		!this.isEnabled(e) || Gp(e, i)
	}
}
async function Kp(t) {
	await t.addParticleUpdater("angle", e => new qp(e))
}

function Yp(t) {
	const e = t.initialPosition,
		{
			dx: i,
			dy: n
		} = _e(e, t.position),
		s = Math.abs(i),
		o = Math.abs(n),
		r = t.retina.maxDistance.horizontal,
		l = t.retina.maxDistance.vertical;
	if (!(!r && !l)) {
		if ((r && s >= r || l && o >= l) && !t.misplaced) t.misplaced = !!r && s > r || !!l && o > l, r && (t.velocity.x = t.velocity.y / 2 - t.velocity.x), l && (t.velocity.y = t.velocity.x / 2 - t.velocity.y);
		else if ((!r || s < r) && (!l || o < l) && t.misplaced) t.misplaced = !1;
		else if (t.misplaced) {
			const a = t.position,
				c = t.velocity;
			r && (a.x < e.x && c.x < 0 || a.x > e.x && c.x > 0) && (c.x *= -Math.random()), l && (a.y < e.y && c.y < 0 || a.y > e.y && c.y > 0) && (c.y *= -Math.random())
		}
	}
}

function Xp(t, e) {
	const i = t.container;
	if (!t.spin) return;
	const n = {
		x: t.spin.direction === "clockwise" ? Math.cos : Math.sin,
		y: t.spin.direction === "clockwise" ? Math.sin : Math.cos
	};
	t.position.x = t.spin.center.x + t.spin.radius * n.x(t.spin.angle), t.position.y = t.spin.center.y + t.spin.radius * n.y(t.spin.angle), t.spin.radius += t.spin.acceleration;
	const s = Math.max(i.canvas.size.width, i.canvas.size.height);
	t.spin.radius > s / 2 ? (t.spin.radius = s / 2, t.spin.acceleration *= -1) : t.spin.radius < 0 && (t.spin.radius = 0, t.spin.acceleration *= -1), t.spin.angle += e / 100 * (1 - t.spin.radius / s)
}

function Jp(t, e) {
	const n = t.options.move.path;
	if (!n.enable) return;
	const o = t.container;
	if (t.lastPathTime <= t.pathDelay) {
		t.lastPathTime += e.value;
		return
	}
	const r = o.pathGenerator.generate(t);
	t.velocity.addTo(r), n.clamp && (t.velocity.x = ct(t.velocity.x, -1, 1), t.velocity.y = ct(t.velocity.y, -1, 1)), t.lastPathTime -= t.pathDelay
}

function Qp(t) {
	const e = t.container,
		i = e.actualOptions;
	if (!re("slow", i.interactivity.events.onHover.mode)) return 1;
	const s = t.container.interactivity.mouse.position;
	if (!s) return 1;
	const o = t.getPosition(),
		r = we(s, o),
		l = e.retina.slowModeRadius;
	if (r > l) return 1;
	const a = r / l || 0,
		c = i.interactivity.modes.slow.factor;
	return a / c
}
class Zp {
	init(e) {
		var i;
		const n = e.container,
			s = e.options,
			o = s.move.spin;
		if (o.enable) {
			const r = (i = o.position) !== null && i !== void 0 ? i : {
					x: 50,
					y: 50
				},
				l = {
					x: r.x / 100 * n.canvas.size.width,
					y: r.y / 100 * n.canvas.size.height
				},
				a = e.getPosition(),
				c = we(a, l),
				u = U(o.acceleration);
			e.retina.spinAcceleration = u * n.retina.pixelRatio, e.spin = {
				center: l,
				direction: e.velocity.x >= 0 ? "clockwise" : "counter-clockwise",
				angle: e.velocity.angle,
				radius: c,
				acceleration: e.retina.spinAcceleration
			}
		}
	}
	isEnabled(e) {
		return !e.destroyed && e.options.move.enable
	}
	move(e, i) {
		var n, s, o, r, l;
		const a = e.options,
			c = a.move;
		if (!c.enable) return;
		const u = e.container,
			d = Qp(e),
			h = ((n = (r = e.retina).moveSpeed) !== null && n !== void 0 ? n : r.moveSpeed = U(c.speed) * u.retina.pixelRatio) * u.retina.reduceFactor,
			f = (s = (l = e.retina).moveDrift) !== null && s !== void 0 ? s : l.moveDrift = U(e.options.move.drift) * u.retina.pixelRatio,
			p = lt(a.size.value) * u.retina.pixelRatio,
			y = c.size ? e.getRadius() / p : 1,
			v = y * d * (i.factor || 1),
			g = 2,
			x = h * v / g;
		Jp(e, i);
		const P = e.gravity,
			E = P.enable && P.inverse ? -1 : 1;
		P.enable && x && (e.velocity.y += E * (P.acceleration * i.factor) / (60 * x)), f && x && (e.velocity.x += f * i.factor / (60 * x));
		const R = e.moveDecay;
		R != 1 && e.velocity.multTo(R);
		const I = e.velocity.mult(x),
			A = (o = e.retina.maxSpeed) !== null && o !== void 0 ? o : u.retina.maxSpeed;
		P.enable && A > 0 && (!P.inverse && I.y >= 0 && I.y >= A || P.inverse && I.y <= 0 && I.y <= -A) && (I.y = E * A, x && (e.velocity.y = I.y / x));
		const W = e.options.zIndex,
			N = (1 - e.zIndexFactor) ** W.velocityRate;
		c.spin.enable ? Xp(e, x) : (N != 1 && I.multTo(N), e.position.addTo(I), c.vibrate && (e.position.x += Math.sin(e.position.x * Math.cos(e.position.y)), e.position.y += Math.cos(e.position.y * Math.sin(e.position.x)))), Yp(e)
	}
}
async function e1(t) {
	t.addMover("base", () => new Zp)
}
class t1 {
	getSidesCount() {
		return 12
	}
	draw(e, i, n) {
		e.arc(0, 0, n, 0, Math.PI * 2, !1)
	}
}
async function i1(t) {
	await t.addShape("circle", new t1)
}

function Ps(t, e, i, n, s) {
	var o;
	const r = e;
	if (!r || !i.enable) return;
	const l = Pe(i.offset),
		a = ((o = e.velocity) !== null && o !== void 0 ? o : 0) * t.factor + l * 3.6;
	!s || r.status === 0 ? (r.value += a, s && r.value > n && (r.status = 1, r.value -= r.value % n)) : (r.value -= a, r.value < 0 && (r.status = 0, r.value += r.value)), r.value > n && (r.value %= n)
}

function n1(t, e) {
	var i, n, s;
	const o = t.options.color.animation;
	((i = t.color) === null || i === void 0 ? void 0 : i.h) !== void 0 && Ps(e, t.color.h, o.h, 360, !1), ((n = t.color) === null || n === void 0 ? void 0 : n.s) !== void 0 && Ps(e, t.color.s, o.s, 100, !0), ((s = t.color) === null || s === void 0 ? void 0 : s.l) !== void 0 && Ps(e, t.color.l, o.l, 100, !0)
}
class s1 {
	constructor(e) {
		this.container = e
	}
	init(e) {
		const i = Nt(e.options.color, e.id, e.options.reduceDuplicates);
		i && (e.color = _a(i, e.options.color.animation, this.container.retina.reduceFactor))
	}
	isEnabled(e) {
		var i, n, s;
		const o = e.options.color.animation;
		return !e.destroyed && !e.spawning && (((i = e.color) === null || i === void 0 ? void 0 : i.h.value) !== void 0 && o.h.enable || ((n = e.color) === null || n === void 0 ? void 0 : n.s.value) !== void 0 && o.s.enable || ((s = e.color) === null || s === void 0 ? void 0 : s.l.value) !== void 0 && o.l.enable)
	}
	update(e, i) {
		n1(e, i)
	}
}
async function o1(t) {
	await t.addParticleUpdater("color", e => new s1(e))
}
class r1 extends bt {
	constructor(e) {
		super(e), e.attract || (e.attract = {
			particles: []
		}), this.handleClickMode = i => {
			const n = this.container.actualOptions;
			if (i === "attract") {
				e.attract || (e.attract = {
					particles: []
				}), e.attract.clicking = !0, e.attract.count = 0;
				for (const s of e.attract.particles) s.velocity.setTo(s.initialVelocity);
				e.attract.particles = [], e.attract.finish = !1, setTimeout(() => {
					e.destroyed || (e.attract || (e.attract = {
						particles: []
					}), e.attract.clicking = !1)
				}, n.interactivity.modes.attract.duration * 1e3)
			}
		}
	}
	isEnabled() {
		const e = this.container,
			i = e.actualOptions,
			n = e.interactivity.mouse,
			s = i.interactivity.events;
		if ((!n.position || !s.onHover.enable) && (!n.clickPosition || !s.onClick.enable)) return !1;
		const o = s.onHover.mode,
			r = s.onClick.mode;
		return re("attract", o) || re("attract", r)
	}
	reset() {}
	async interact() {
		const e = this.container,
			i = e.actualOptions,
			n = e.interactivity.status === si,
			s = i.interactivity.events,
			o = s.onHover.enable,
			r = s.onHover.mode,
			l = s.onClick.enable,
			a = s.onClick.mode;
		n && o && re("attract", r) ? this.hoverAttract() : l && re("attract", a) && this.clickAttract()
	}
	hoverAttract() {
		const e = this.container,
			i = e.interactivity.mouse.position;
		if (!i) return;
		const n = e.retina.attractModeDistance;
		this.processAttract(i, n, new Ge(i.x, i.y, n))
	}
	processAttract(e, i, n) {
		const s = this.container,
			o = s.actualOptions.interactivity.modes.attract,
			r = s.particles.quadTree.query(n);
		for (const l of r) {
			const {
				dx: a,
				dy: c,
				distance: u
			} = _e(l.position, e), d = o.speed * o.factor, h = ct(aa(1 - u / i, o.easing) * d, 0, o.maxSpeed), f = ie.create(u === 0 ? d : a / u * h, u === 0 ? d : c / u * h);
			l.position.subFrom(f)
		}
	}
	clickAttract() {
		const e = this.container;
		if (e.attract || (e.attract = {
				particles: []
			}), e.attract.finish || (e.attract.count || (e.attract.count = 0), e.attract.count++, e.attract.count === e.particles.count && (e.attract.finish = !0)), e.attract.clicking) {
			const i = e.interactivity.mouse.clickPosition;
			if (!i) return;
			const n = e.retina.attractModeDistance;
			this.processAttract(i, n, new Ge(i.x, i.y, n))
		} else e.attract.clicking === !1 && (e.attract.particles = [])
	}
}
async function l1(t) {
	await t.addInteractor("externalAttract", e => new r1(e))
}
class a1 extends bt {
	constructor(e) {
		super(e)
	}
	isEnabled() {
		const e = this.container,
			i = e.actualOptions,
			n = e.interactivity.mouse,
			s = i.interactivity.events,
			o = s.onDiv;
		return n.position && s.onHover.enable && re("bounce", s.onHover.mode) || Co("bounce", o)
	}
	async interact() {
		const e = this.container,
			i = e.actualOptions,
			n = i.interactivity.events,
			s = e.interactivity.status === si,
			o = n.onHover.enable,
			r = n.onHover.mode,
			l = n.onDiv;
		s && o && re("bounce", r) ? this.processMouseBounce() : Oo("bounce", l, (a, c) => this.singleSelectorBounce(a, c))
	}
	reset() {}
	processMouseBounce() {
		const e = this.container,
			i = e.retina.pixelRatio,
			n = 10 * i,
			s = e.interactivity.mouse.position,
			o = e.retina.bounceModeDistance;
		s && this.processBounce(s, o, new Ge(s.x, s.y, o + n))
	}
	singleSelectorBounce(e, i) {
		const n = this.container,
			s = document.querySelectorAll(e);
		!s.length || s.forEach(o => {
			const r = o,
				l = n.retina.pixelRatio,
				a = {
					x: (r.offsetLeft + r.offsetWidth / 2) * l,
					y: (r.offsetTop + r.offsetHeight / 2) * l
				},
				c = r.offsetWidth / 2 * l,
				u = 10 * l,
				d = i.type === "circle" ? new Ge(a.x, a.y, c + u) : new et(r.offsetLeft * l - u, r.offsetTop * l - u, r.offsetWidth * l + u * 2, r.offsetHeight * l + u * 2);
			this.processBounce(a, c, d)
		})
	}
	processBounce(e, i, n) {
		const s = this.container.particles.quadTree.query(n);
		for (const o of s) n instanceof Ge ? ma(Ws(o), {
			position: e,
			radius: i,
			mass: i ** 2 * Math.PI / 2,
			velocity: ie.origin,
			factor: ie.origin
		}) : n instanceof et && lf(o, ln(e, i))
	}
}
async function c1(t) {
	await t.addInteractor("externalBounce", e => new a1(e))
}

function Fr(t, e, i, n) {
	if (e >= i) {
		const s = t + (e - i) * n;
		return ct(s, t, e)
	} else if (e < i) {
		const s = t - (i - e) * n;
		return ct(s, e, t)
	}
}
class u1 extends bt {
	constructor(e) {
		super(e), e.bubble || (e.bubble = {}), this.handleClickMode = i => {
			i === "bubble" && (e.bubble || (e.bubble = {}), e.bubble.clicking = !0)
		}
	}
	isEnabled() {
		const e = this.container,
			i = e.actualOptions,
			n = e.interactivity.mouse,
			s = i.interactivity.events,
			o = s.onDiv,
			r = Co("bubble", o);
		if (!(r || s.onHover.enable && n.position || s.onClick.enable && n.clickPosition)) return !1;
		const l = s.onHover.mode,
			a = s.onClick.mode;
		return re("bubble", l) || re("bubble", a) || r
	}
	reset(e, i) {
		!(!e.bubble.inRange || i) || (delete e.bubble.div, delete e.bubble.opacity, delete e.bubble.radius, delete e.bubble.color)
	}
	async interact() {
		const e = this.container.actualOptions,
			i = e.interactivity.events,
			n = i.onHover,
			s = i.onClick,
			o = n.enable,
			r = n.mode,
			l = s.enable,
			a = s.mode,
			c = i.onDiv;
		o && re("bubble", r) ? this.hoverBubble() : l && re("bubble", a) ? this.clickBubble() : Oo("bubble", c, (u, d) => this.singleSelectorHover(u, d))
	}
	singleSelectorHover(e, i) {
		const n = this.container,
			s = document.querySelectorAll(e);
		!s.length || s.forEach(o => {
			const r = o,
				l = n.retina.pixelRatio,
				a = {
					x: (r.offsetLeft + r.offsetWidth / 2) * l,
					y: (r.offsetTop + r.offsetHeight / 2) * l
				},
				c = r.offsetWidth / 2 * l,
				u = i.type === "circle" ? new Ge(a.x, a.y, c) : new et(r.offsetLeft * l, r.offsetTop * l, r.offsetWidth * l, r.offsetHeight * l),
				d = n.particles.quadTree.query(u);
			for (const h of d) {
				if (!u.contains(h.getPosition())) continue;
				h.bubble.inRange = !0;
				const f = n.actualOptions.interactivity.modes.bubble.divs,
					p = ya(f, r);
				(!h.bubble.div || h.bubble.div !== r) && (this.reset(h, !0), h.bubble.div = r), this.hoverBubbleSize(h, 1, p), this.hoverBubbleOpacity(h, 1, p), this.hoverBubbleColor(h, 1, p)
			}
		})
	}
	process(e, i, n, s) {
		const o = this.container,
			r = s.bubbleObj.optValue;
		if (r === void 0) return;
		const l = o.actualOptions,
			a = l.interactivity.modes.bubble.duration,
			c = o.retina.bubbleModeDistance,
			u = s.particlesObj.optValue,
			d = s.bubbleObj.value,
			h = s.particlesObj.value || 0,
			f = s.type;
		if (r !== u)
			if (o.bubble || (o.bubble = {}), o.bubble.durationEnd) d && (f === "size" && delete e.bubble.radius, f === "opacity" && delete e.bubble.opacity);
			else if (i <= c) {
			if ((d != null ? d : h) !== r) {
				const y = h - n * (h - r) / a;
				f === "size" && (e.bubble.radius = y), f === "opacity" && (e.bubble.opacity = y)
			}
		} else f === "size" && delete e.bubble.radius, f === "opacity" && delete e.bubble.opacity
	}
	clickBubble() {
		var e, i;
		const n = this.container,
			s = n.actualOptions,
			o = n.interactivity.mouse.clickPosition;
		if (!o) return;
		n.bubble || (n.bubble = {});
		const r = n.retina.bubbleModeDistance,
			l = n.particles.quadTree.queryCircle(o, r);
		for (const a of l) {
			if (!n.bubble.clicking) continue;
			a.bubble.inRange = !n.bubble.durationEnd;
			const c = a.getPosition(),
				u = we(c, o),
				d = (new Date().getTime() - (n.interactivity.mouse.clickTime || 0)) / 1e3;
			d > s.interactivity.modes.bubble.duration && (n.bubble.durationEnd = !0), d > s.interactivity.modes.bubble.duration * 2 && (n.bubble.clicking = !1, n.bubble.durationEnd = !1);
			const h = {
				bubbleObj: {
					optValue: n.retina.bubbleModeSize,
					value: a.bubble.radius
				},
				particlesObj: {
					optValue: lt(a.options.size.value) * n.retina.pixelRatio,
					value: a.size.value
				},
				type: "size"
			};
			this.process(a, u, d, h);
			const f = {
				bubbleObj: {
					optValue: s.interactivity.modes.bubble.opacity,
					value: a.bubble.opacity
				},
				particlesObj: {
					optValue: lt(a.options.opacity.value),
					value: (i = (e = a.opacity) === null || e === void 0 ? void 0 : e.value) !== null && i !== void 0 ? i : 1
				},
				type: "opacity"
			};
			this.process(a, u, d, f), n.bubble.durationEnd ? delete a.bubble.color : u <= n.retina.bubbleModeDistance ? this.hoverBubbleColor(a, u) : delete a.bubble.color
		}
	}
	hoverBubble() {
		const e = this.container,
			i = e.interactivity.mouse.position;
		if (i === void 0) return;
		const n = e.retina.bubbleModeDistance,
			s = e.particles.quadTree.queryCircle(i, n);
		for (const o of s) {
			o.bubble.inRange = !0;
			const r = o.getPosition(),
				l = we(r, i),
				a = 1 - l / n;
			l <= n ? a >= 0 && e.interactivity.status === si && (this.hoverBubbleSize(o, a), this.hoverBubbleOpacity(o, a), this.hoverBubbleColor(o, a)) : this.reset(o), e.interactivity.status === Us && this.reset(o)
		}
	}
	hoverBubbleSize(e, i, n) {
		const s = this.container,
			o = n != null && n.size ? n.size * s.retina.pixelRatio : s.retina.bubbleModeSize;
		if (o === void 0) return;
		const r = lt(e.options.size.value) * s.retina.pixelRatio,
			l = e.size.value,
			a = Fr(l, o, r, i);
		a !== void 0 && (e.bubble.radius = a)
	}
	hoverBubbleOpacity(e, i, n) {
		var s, o, r;
		const l = this.container,
			a = l.actualOptions,
			c = (s = n == null ? void 0 : n.opacity) !== null && s !== void 0 ? s : a.interactivity.modes.bubble.opacity;
		if (!c) return;
		const u = e.options.opacity.value,
			d = (r = (o = e.opacity) === null || o === void 0 ? void 0 : o.value) !== null && r !== void 0 ? r : 1,
			h = Fr(d, c, lt(u), i);
		h !== void 0 && (e.bubble.opacity = h)
	}
	hoverBubbleColor(e, i, n) {
		const s = this.container.actualOptions,
			o = n != null ? n : s.interactivity.modes.bubble;
		if (!e.bubble.finalColor) {
			const r = o.color;
			if (!r) return;
			const l = r instanceof Array ? ze(r) : r;
			e.bubble.finalColor = Nt(l)
		}
		if (!!e.bubble.finalColor)
			if (o.mix) {
				e.bubble.color = void 0;
				const r = e.getFillColor();
				e.bubble.color = r ? ba(To(r, e.bubble.finalColor, 1 - i, i)) : e.bubble.finalColor
			} else e.bubble.color = e.bubble.finalColor
	}
}
async function d1(t) {
	await t.addInteractor("externalBubble", e => new u1(e))
}
class h1 extends bt {
	constructor(e) {
		super(e)
	}
	isEnabled() {
		const e = this.container,
			i = e.interactivity.mouse,
			n = e.actualOptions.interactivity.events;
		return n.onHover.enable && i.position ? re("connect", n.onHover.mode) : !1
	}
	reset() {}
	async interact() {
		const e = this.container;
		if (e.actualOptions.interactivity.events.onHover.enable && e.interactivity.status === "mousemove") {
			const n = e.interactivity.mouse.position;
			if (!n) return;
			const s = Math.abs(e.retina.connectModeRadius),
				o = e.particles.quadTree.queryCircle(n, s);
			let r = 0;
			for (const l of o) {
				const a = l.getPosition();
				for (const c of o.slice(r + 1)) {
					const u = c.getPosition(),
						d = Math.abs(e.retina.connectModeDistance),
						h = Math.abs(a.x - u.x),
						f = Math.abs(a.y - u.y);
					h < d && f < d && e.canvas.drawConnectLine(l, c)
				}++r
			}
		}
	}
}
async function f1(t) {
	await t.addInteractor("externalConnect", e => new h1(e))
}
class p1 extends bt {
	constructor(e) {
		super(e)
	}
	isEnabled() {
		const e = this.container,
			i = e.interactivity.mouse,
			n = e.actualOptions.interactivity.events;
		return n.onHover.enable && !!i.position && re("grab", n.onHover.mode)
	}
	reset() {}
	async interact() {
		var e;
		const i = this.container,
			n = i.actualOptions,
			s = n.interactivity;
		if (!s.events.onHover.enable || i.interactivity.status !== si) return;
		const o = i.interactivity.mouse.position;
		if (!o) return;
		const r = i.retina.grabModeDistance,
			l = i.particles.quadTree.queryCircle(o, r);
		for (const a of l) {
			const c = a.getPosition(),
				u = we(c, o);
			if (u > r) continue;
			const d = s.modes.grab.links,
				h = d.opacity,
				f = h - u * h / r;
			if (f <= 0) continue;
			const p = (e = d.color) !== null && e !== void 0 ? e : a.options.links.color;
			if (!i.particles.grabLineColor) {
				const v = n.interactivity.modes.grab.links;
				i.particles.grabLineColor = Pa(p, v.blink, v.consent)
			}
			const y = Gs(a, void 0, i.particles.grabLineColor);
			if (!y) return;
			i.canvas.drawGrabLine(a, y, f, o)
		}
	}
}
async function y1(t) {
	await t.addInteractor("externalGrab", e => new p1(e))
}
class m1 extends bt {
	constructor(e) {
		super(e), this.handleClickMode = i => {
			if (i !== "pause") return;
			const n = this.container;
			n.getAnimationStatus() ? n.pause() : n.play()
		}
	}
	isEnabled() {
		return !0
	}
	reset() {}
	async interact() {}
}

function v1(t) {
	t.addInteractor("externalPause", e => new m1(e))
}
class g1 extends bt {
	constructor(e) {
		super(e), this.handleClickMode = i => {
			if (i !== "push") return;
			const n = this.container,
				s = n.actualOptions,
				o = s.interactivity.modes.push.quantity;
			if (o <= 0) return;
			const r = s.interactivity.modes.push,
				l = ze([void 0, ...r.groups]),
				a = l !== void 0 ? n.actualOptions.particles.groups[l] : void 0;
			n.particles.push(o, n.interactivity.mouse, a, l)
		}
	}
	isEnabled() {
		return !0
	}
	reset() {}
	async interact() {}
}
async function b1(t) {
	await t.addInteractor("externalPush", e => new g1(e))
}
class x1 extends bt {
	constructor(e) {
		super(e), this.handleClickMode = i => {
			if (i !== "remove") return;
			const n = this.container,
				o = n.actualOptions.interactivity.modes.remove.quantity;
			n.particles.removeQuantity(o)
		}
	}
	isEnabled() {
		return !0
	}
	reset() {}
	async interact() {}
}

function w1(t) {
	t.addInteractor("externalRemove", e => new x1(e))
}
class P1 extends bt {
	constructor(e) {
		super(e), e.repulse || (e.repulse = {
			particles: []
		}), this.handleClickMode = i => {
			const n = this.container.actualOptions;
			if (i === "repulse") {
				e.repulse || (e.repulse = {
					particles: []
				}), e.repulse.clicking = !0, e.repulse.count = 0;
				for (const s of e.repulse.particles) s.velocity.setTo(s.initialVelocity);
				e.repulse.particles = [], e.repulse.finish = !1, setTimeout(() => {
					e.destroyed || (e.repulse || (e.repulse = {
						particles: []
					}), e.repulse.clicking = !1)
				}, n.interactivity.modes.repulse.duration * 1e3)
			}
		}
	}
	isEnabled() {
		const e = this.container,
			i = e.actualOptions,
			n = e.interactivity.mouse,
			s = i.interactivity.events,
			o = s.onDiv,
			r = Co("repulse", o);
		if (!(r || s.onHover.enable && n.position || s.onClick.enable && n.clickPosition)) return !1;
		const l = s.onHover.mode,
			a = s.onClick.mode;
		return re("repulse", l) || re("repulse", a) || r
	}
	reset() {}
	async interact() {
		const e = this.container,
			i = e.actualOptions,
			n = e.interactivity.status === si,
			s = i.interactivity.events,
			o = s.onHover.enable,
			r = s.onHover.mode,
			l = s.onClick.enable,
			a = s.onClick.mode,
			c = s.onDiv;
		n && o && re("repulse", r) ? this.hoverRepulse() : l && re("repulse", a) ? this.clickRepulse() : Oo("repulse", c, (u, d) => this.singleSelectorRepulse(u, d))
	}
	singleSelectorRepulse(e, i) {
		const n = this.container,
			s = document.querySelectorAll(e);
		!s.length || s.forEach(o => {
			const r = o,
				l = n.retina.pixelRatio,
				a = {
					x: (r.offsetLeft + r.offsetWidth / 2) * l,
					y: (r.offsetTop + r.offsetHeight / 2) * l
				},
				c = r.offsetWidth / 2 * l,
				u = i.type === "circle" ? new Ge(a.x, a.y, c) : new et(r.offsetLeft * l, r.offsetTop * l, r.offsetWidth * l, r.offsetHeight * l),
				d = n.actualOptions.interactivity.modes.repulse.divs,
				h = ya(d, r);
			this.processRepulse(a, c, u, h)
		})
	}
	hoverRepulse() {
		const e = this.container,
			i = e.interactivity.mouse.position;
		if (!i) return;
		const n = e.retina.repulseModeDistance;
		this.processRepulse(i, n, new Ge(i.x, i.y, n))
	}
	processRepulse(e, i, n, s) {
		var o;
		const r = this.container,
			l = r.particles.quadTree.query(n),
			a = r.actualOptions.interactivity.modes.repulse;
		for (const c of l) {
			const {
				dx: u,
				dy: d,
				distance: h
			} = _e(c.position, e), f = ((o = s == null ? void 0 : s.speed) !== null && o !== void 0 ? o : a.speed) * a.factor, p = ct(aa(1 - h / i, a.easing) * f, 0, a.maxSpeed), y = ie.create(h === 0 ? f : u / h * p, h === 0 ? f : d / h * p);
			c.position.addTo(y)
		}
	}
	clickRepulse() {
		const e = this.container;
		if (e.repulse || (e.repulse = {
				particles: []
			}), e.repulse.finish || (e.repulse.count || (e.repulse.count = 0), e.repulse.count++, e.repulse.count === e.particles.count && (e.repulse.finish = !0)), e.repulse.clicking) {
			const i = e.retina.repulseModeDistance,
				n = Math.pow(i / 6, 3),
				s = e.interactivity.mouse.clickPosition;
			if (s === void 0) return;
			const o = new Ge(s.x, s.y, n),
				r = e.particles.quadTree.query(o);
			for (const l of r) {
				const {
					dx: a,
					dy: c,
					distance: u
				} = _e(s, l.position), d = u ** 2, h = e.actualOptions.interactivity.modes.repulse.speed, f = -n * h / d;
				if (d <= n) {
					e.repulse.particles.push(l);
					const p = ie.create(a, c);
					p.length = f, l.velocity.setTo(p)
				}
			}
		} else if (e.repulse.clicking === !1) {
			for (const i of e.repulse.particles) i.velocity.setTo(i.initialVelocity);
			e.repulse.particles = []
		}
	}
}
async function _1(t) {
	await t.addInteractor("externalRepulse", e => new P1(e))
}
const M1 = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;

function j1(t, e, i) {
	const {
		svgData: n
	} = t;
	if (!n) return "";
	const s = bi(e, i);
	if (n.includes("fill")) return n.replace(M1, () => s);
	const o = n.indexOf(">");
	return `${n.substring(0,o)} fill="${s}"${n.substring(o)}`
}
async function Ao(t) {
	return new Promise(e => {
		t.loading = !0;
		const i = new Image;
		i.addEventListener("load", () => {
			t.element = i, t.loading = !1, e()
		}), i.addEventListener("error", () => {
			t.error = !0, t.loading = !1, console.error(`Error tsParticles - loading image: ${t.source}`), e()
		}), i.src = t.source
	})
}
async function E1(t) {
	if (t.type !== "svg") {
		await Ao(t);
		return
	}
	t.loading = !0;
	const e = await fetch(t.source);
	t.loading = !1, e.ok || (console.error("Error tsParticles - Image not found"), t.error = !0), t.error || (t.svgData = await e.text())
}

function C1(t, e, i, n) {
	var s, o, r;
	const l = j1(t, i, (o = (s = n.opacity) === null || s === void 0 ? void 0 : s.value) !== null && o !== void 0 ? o : 1),
		a = new Blob([l], {
			type: "image/svg+xml"
		}),
		c = URL || window.URL || window.webkitURL || window,
		u = c.createObjectURL(a),
		d = new Image,
		h = {
			data: Object.assign(Object.assign({}, t), {
				svgData: l
			}),
			ratio: e.width / e.height,
			replaceColor: (r = e.replaceColor) !== null && r !== void 0 ? r : e.replace_color,
			source: e.src
		};
	return d.addEventListener("load", () => {
		const f = n.image;
		f && (f.loaded = !0, t.element = d), c.revokeObjectURL(u)
	}), d.addEventListener("error", () => {
		c.revokeObjectURL(u);
		const f = Object.assign(Object.assign({}, t), {
			error: !1,
			loading: !0
		});
		Ao(f).then(() => {
			const p = n.image;
			p && (t.element = f.element, p.loaded = !0)
		})
	}), d.src = u, h
}
var Dr = globalThis && globalThis.__classPrivateFieldSet || function(t, e, i, n, s) {
		if (n === "m") throw new TypeError("Private method is not writable");
		if (n === "a" && !s) throw new TypeError("Private accessor was defined without a setter");
		if (typeof e == "function" ? t !== e || !s : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
		return n === "a" ? s.call(t, i) : s ? s.value = i : e.set(t, i), i
	},
	Lr = globalThis && globalThis.__classPrivateFieldGet || function(t, e, i, n) {
		if (i === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
		if (typeof e == "function" ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
		return i === "m" ? n : i === "a" ? n.call(t) : n ? n.value : e.get(t)
	},
	di;
class O1 {
	constructor() {
		di.set(this, void 0), Dr(this, di, [], "f")
	}
	getSidesCount() {
		return 12
	}
	getImages(e) {
		const i = Lr(this, di, "f").find(n => n.id === e.id);
		return i || (Lr(this, di, "f").push({
			id: e.id,
			images: []
		}), this.getImages(e))
	}
	addImage(e, i) {
		const n = this.getImages(e);
		n == null || n.images.push(i)
	}
	destroy() {
		Dr(this, di, [], "f")
	}
	draw(e, i, n, s) {
		var o, r;
		const l = i.image,
			a = (o = l == null ? void 0 : l.data) === null || o === void 0 ? void 0 : o.element;
		if (!a) return;
		const c = (r = l == null ? void 0 : l.ratio) !== null && r !== void 0 ? r : 1,
			u = {
				x: -n,
				y: -n
			};
		(!(l != null && l.data.svgData) || !(l != null && l.replaceColor)) && (e.globalAlpha = s), e.drawImage(a, u.x, u.y, n * 2, n * 2 / c), (!(l != null && l.data.svgData) || !(l != null && l.replaceColor)) && (e.globalAlpha = 1)
	}
	loadShape(e) {
		var i, n, s;
		if (e.shape !== "image" && e.shape !== "images") return;
		const o = this.getImages(e.container).images,
			r = e.shapeData,
			l = o.find(f => f.source === r.src);
		let a;
		if (!l) {
			this.loadImageShape(e.container, r).then(() => {
				this.loadShape(e)
			});
			return
		}
		if (l.error) return;
		const c = e.getFillColor();
		l.svgData && r.replaceColor && c ? a = C1(l, r, c, e) : a = {
			data: l,
			loaded: !0,
			ratio: r.width / r.height,
			replaceColor: (i = r.replaceColor) !== null && i !== void 0 ? i : r.replace_color,
			source: r.src
		}, a.ratio || (a.ratio = 1);
		const u = (n = r.fill) !== null && n !== void 0 ? n : e.fill,
			d = (s = r.close) !== null && s !== void 0 ? s : e.close,
			h = {
				image: a,
				fill: u,
				close: d
			};
		e.image = h.image, e.fill = h.fill, e.close = h.close
	}
	async loadImageShape(e, i) {
		const n = i.src;
		if (!n) throw new Error("Error tsParticles - No image.src");
		try {
			const s = {
				source: n,
				type: n.substr(n.length - 3),
				error: !1,
				loading: !0
			};
			this.addImage(e, s), await (i.replaceColor ? E1 : Ao)(s)
		} catch {
			throw new Error(`tsParticles error - ${i.src} not found`)
		}
	}
}
di = new WeakMap;
async function S1(t) {
	const e = new O1;
	await t.addShape("image", e), await t.addShape("images", e)
}
class T1 {
	constructor(e) {
		this.container = e
	}
	init() {}
	isEnabled(e) {
		return !e.destroyed
	}
	update(e, i) {
		if (!this.isEnabled(e)) return;
		const n = e.life;
		let s = !1;
		if (e.spawning)
			if (n.delayTime += i.value, n.delayTime >= e.life.delay) s = !0, e.spawning = !1, n.delayTime = 0, n.time = 0;
			else return;
		if (n.duration === -1 || e.spawning || (s ? n.time = 0 : n.time += i.value, n.time < n.duration)) return;
		if (n.time = 0, e.life.count > 0 && e.life.count--, e.life.count === 0) {
			e.destroy();
			return
		}
		const o = this.container.canvas.size,
			r = V(0, o.width),
			l = V(0, o.width);
		e.position.x = Pe(r), e.position.y = Pe(l), e.spawning = !0, n.delayTime = 0, n.time = 0, e.reset();
		const a = e.options.life;
		n.delay = U(a.delay.value) * 1e3, n.duration = U(a.duration.value) * 1e3
	}
}
async function k1(t) {
	await t.addParticleUpdater("life", e => new T1(e))
}
class A1 {
	getSidesCount() {
		return 1
	}
	draw(e, i, n) {
		e.moveTo(-n / 2, 0), e.lineTo(n / 2, 0)
	}
}
async function z1(t) {
	await t.addShape("line", new A1)
}

function R1(t, e, i, n) {
	switch (t.options.opacity.animation.destroy) {
		case "max":
			e >= n && t.destroy();
			break;
		case "min":
			e <= i && t.destroy();
			break
	}
}

function I1(t, e) {
	var i, n, s, o, r;
	if (!t.opacity) return;
	const l = t.opacity.min,
		a = t.opacity.max;
	if (!(t.destroyed || !t.opacity.enable || ((i = t.opacity.maxLoops) !== null && i !== void 0 ? i : 0) > 0 && ((n = t.opacity.loops) !== null && n !== void 0 ? n : 0) > ((s = t.opacity.maxLoops) !== null && s !== void 0 ? s : 0))) {
		switch (t.opacity.status) {
			case 0:
				t.opacity.value >= a ? (t.opacity.status = 1, t.opacity.loops || (t.opacity.loops = 0), t.opacity.loops++) : t.opacity.value += ((o = t.opacity.velocity) !== null && o !== void 0 ? o : 0) * e.factor;
				break;
			case 1:
				t.opacity.value <= l ? (t.opacity.status = 0, t.opacity.loops || (t.opacity.loops = 0), t.opacity.loops++) : t.opacity.value -= ((r = t.opacity.velocity) !== null && r !== void 0 ? r : 0) * e.factor;
				break
		}
		R1(t, t.opacity.value, l, a), t.destroyed || (t.opacity.value = ct(t.opacity.value, l, a))
	}
}
class F1 {
	constructor(e) {
		this.container = e
	}
	init(e) {
		const i = e.options.opacity;
		e.opacity = {
			enable: i.animation.enable,
			max: lt(i.value),
			min: gi(i.value),
			value: U(i.value),
			loops: 0,
			maxLoops: U(i.animation.count)
		};
		const n = i.animation;
		if (n.enable) {
			e.opacity.status = 0;
			const s = i.value;
			switch (e.opacity.min = gi(s), e.opacity.max = lt(s), n.startValue) {
				case "min":
					e.opacity.value = e.opacity.min, e.opacity.status = 0;
					break;
				case "random":
					e.opacity.value = Pe(e.opacity), e.opacity.status = Math.random() >= .5 ? 0 : 1;
					break;
				case "max":
				default:
					e.opacity.value = e.opacity.max, e.opacity.status = 1;
					break
			}
			e.opacity.velocity = U(n.speed) / 100 * this.container.retina.reduceFactor, n.sync || (e.opacity.velocity *= Math.random())
		}
	}
	isEnabled(e) {
		var i, n, s, o;
		return !e.destroyed && !e.spawning && !!e.opacity && e.opacity.enable && (((i = e.opacity.maxLoops) !== null && i !== void 0 ? i : 0) <= 0 || ((n = e.opacity.maxLoops) !== null && n !== void 0 ? n : 0) > 0 && ((s = e.opacity.loops) !== null && s !== void 0 ? s : 0) < ((o = e.opacity.maxLoops) !== null && o !== void 0 ? o : 0))
	}
	update(e, i) {
		!this.isEnabled(e) || I1(e, i)
	}
}
async function D1(t) {
	await t.addParticleUpdater("opacity", e => new F1(e))
}

function L1(t) {
	if (!(t.outMode === "bounce" || t.outMode === "bounce-horizontal" || t.outMode === "bounceHorizontal" || t.outMode === "split")) return;
	const e = t.particle.velocity.x;
	let i = !1;
	if (t.direction === "right" && t.bounds.right >= t.canvasSize.width && e > 0 || t.direction === "left" && t.bounds.left <= 0 && e < 0) {
		const s = _t(t.particle.options.bounce.horizontal);
		t.particle.velocity.x *= -s, i = !0
	}
	if (!i) return;
	const n = t.offset.x + t.size;
	t.bounds.right >= t.canvasSize.width ? t.particle.position.x = t.canvasSize.width - n : t.bounds.left <= 0 && (t.particle.position.x = n), t.outMode === "split" && t.particle.destroy()
}

function H1(t) {
	if (t.outMode === "bounce" || t.outMode === "bounce-vertical" || t.outMode === "bounceVertical" || t.outMode === "split") {
		const e = t.particle.velocity.y;
		let i = !1;
		if (t.direction === "bottom" && t.bounds.bottom >= t.canvasSize.height && e > 0 || t.direction === "top" && t.bounds.top <= 0 && e < 0) {
			const s = _t(t.particle.options.bounce.vertical);
			t.particle.velocity.y *= -s, i = !0
		}
		if (!i) return;
		const n = t.offset.y + t.size;
		t.bounds.bottom >= t.canvasSize.height ? t.particle.position.y = t.canvasSize.height - n : t.bounds.top <= 0 && (t.particle.position.y = n), t.outMode === "split" && t.particle.destroy()
	}
}
class $1 {
	constructor(e) {
		this.container = e, this.modes = ["bounce", "bounce-vertical", "bounce-horizontal", "bounceVertical", "bounceHorizontal", "split"]
	}
	update(e, i, n, s) {
		if (!this.modes.includes(s)) return;
		const o = this.container;
		let r = !1;
		for (const [, h] of o.plugins)
			if (h.particleBounce !== void 0 && (r = h.particleBounce(e, n, i)), r) break;
		if (r) return;
		const l = e.getPosition(),
			a = e.offset,
			c = e.getRadius(),
			u = ln(l, c),
			d = o.canvas.size;
		L1({
			particle: e,
			outMode: s,
			direction: i,
			bounds: u,
			canvasSize: d,
			offset: a,
			size: c
		}), H1({
			particle: e,
			outMode: s,
			direction: i,
			bounds: u,
			canvasSize: d,
			offset: a,
			size: c
		})
	}
}
class B1 {
	constructor(e) {
		this.container = e, this.modes = ["destroy"]
	}
	update(e, i, n, s) {
		if (!this.modes.includes(s)) return;
		const o = this.container;
		switch (e.outType) {
			case "normal":
			case "outside":
				if (rn(e.position, o.canvas.size, ie.origin, e.getRadius(), i)) return;
				break;
			case "inside": {
				const {
					dx: r,
					dy: l
				} = _e(e.position, e.moveCenter), {
					x: a,
					y: c
				} = e.velocity;
				if (a < 0 && r > e.moveCenter.radius || c < 0 && l > e.moveCenter.radius || a >= 0 && r < -e.moveCenter.radius || c >= 0 && l < -e.moveCenter.radius) return;
				break
			}
		}
		o.particles.remove(e, void 0, !0)
	}
}
class V1 {
	constructor(e) {
		this.container = e, this.modes = ["none"]
	}
	update(e, i, n, s) {
		if (!this.modes.includes(s) || e.options.move.distance.horizontal && (i === "left" || i === "right") || e.options.move.distance.vertical && (i === "top" || i === "bottom")) return;
		const o = e.options.move.gravity,
			r = this.container,
			l = r.canvas.size,
			a = e.getRadius();
		if (o.enable) {
			const c = e.position;
			(!o.inverse && c.y > l.height + a && i === "bottom" || o.inverse && c.y < -a && i === "top") && r.particles.remove(e)
		} else {
			if (e.velocity.y > 0 && e.position.y <= l.height + a || e.velocity.y < 0 && e.position.y >= -a || e.velocity.x > 0 && e.position.x <= l.width + a || e.velocity.x < 0 && e.position.x >= -a) return;
			rn(e.position, r.canvas.size, ie.origin, a, i) || r.particles.remove(e)
		}
	}
}
class N1 {
	constructor(e) {
		this.container = e, this.modes = ["out"]
	}
	update(e, i, n, s) {
		if (!this.modes.includes(s)) return;
		const o = this.container;
		switch (e.outType) {
			case "inside": {
				const {
					x: r,
					y: l
				} = e.velocity, a = ie.origin;
				a.length = e.moveCenter.radius, a.angle = e.velocity.angle + Math.PI, a.addTo(ie.create(e.moveCenter));
				const {
					dx: c,
					dy: u
				} = _e(e.position, a);
				if (r <= 0 && c >= 0 || l <= 0 && u >= 0 || r >= 0 && c <= 0 || l >= 0 && u <= 0) return;
				e.position.x = Math.floor(Pe({
					min: 0,
					max: o.canvas.size.width
				})), e.position.y = Math.floor(Pe({
					min: 0,
					max: o.canvas.size.height
				}));
				const {
					dx: d,
					dy: h
				} = _e(e.position, e.moveCenter);
				e.direction = Math.atan2(-h, -d), e.velocity.angle = e.direction;
				break
			}
			default: {
				if (rn(e.position, o.canvas.size, ie.origin, e.getRadius(), i)) return;
				switch (e.outType) {
					case "outside": {
						e.position.x = Math.floor(Pe({
							min: -e.moveCenter.radius,
							max: e.moveCenter.radius
						})) + e.moveCenter.x, e.position.y = Math.floor(Pe({
							min: -e.moveCenter.radius,
							max: e.moveCenter.radius
						})) + e.moveCenter.y;
						const {
							dx: r,
							dy: l
						} = _e(e.position, e.moveCenter);
						e.moveCenter.radius && (e.direction = Math.atan2(l, r), e.velocity.angle = e.direction);
						break
					}
					case "normal": {
						const r = e.options.move.warp,
							l = o.canvas.size,
							a = {
								bottom: l.height + e.getRadius() + e.offset.y,
								left: -e.getRadius() - e.offset.x,
								right: l.width + e.getRadius() + e.offset.x,
								top: -e.getRadius() - e.offset.y
							},
							c = e.getRadius(),
							u = ln(e.position, c);
						i === "right" && u.left > l.width + e.offset.x ? (e.position.x = a.left, e.initialPosition.x = e.position.x, r || (e.position.y = Math.random() * l.height, e.initialPosition.y = e.position.y)) : i === "left" && u.right < -e.offset.x && (e.position.x = a.right, e.initialPosition.x = e.position.x, r || (e.position.y = Math.random() * l.height, e.initialPosition.y = e.position.y)), i === "bottom" && u.top > l.height + e.offset.y ? (r || (e.position.x = Math.random() * l.width, e.initialPosition.x = e.position.x), e.position.y = a.top, e.initialPosition.y = e.position.y) : i === "top" && u.bottom < -e.offset.y && (r || (e.position.x = Math.random() * l.width, e.initialPosition.x = e.position.x), e.position.y = a.bottom, e.initialPosition.y = e.position.y);
						break
					}
				}
				break
			}
		}
	}
}
class W1 {
	constructor(e) {
		this.container = e, this.updaters = [new $1(e), new B1(e), new N1(e), new V1(e)]
	}
	init() {}
	isEnabled(e) {
		return !e.destroyed && !e.spawning
	}
	update(e, i) {
		var n, s, o, r;
		const l = e.options.move.outModes;
		this.updateOutMode(e, i, (n = l.bottom) !== null && n !== void 0 ? n : l.default, "bottom"), this.updateOutMode(e, i, (s = l.left) !== null && s !== void 0 ? s : l.default, "left"), this.updateOutMode(e, i, (o = l.right) !== null && o !== void 0 ? o : l.default, "right"), this.updateOutMode(e, i, (r = l.top) !== null && r !== void 0 ? r : l.default, "top")
	}
	updateOutMode(e, i, n, s) {
		for (const o of this.updaters) o.update(e, s, i, n)
	}
}
async function U1(t) {
	await t.addParticleUpdater("outModes", e => new W1(e))
}
class G1 {
	init() {}
	isEnabled(e) {
		return !Vt() && !e.destroyed && e.container.actualOptions.interactivity.events.onHover.parallax.enable
	}
	move(e) {
		const i = e.container,
			n = i.actualOptions;
		if (Vt() || !n.interactivity.events.onHover.parallax.enable) return;
		const s = n.interactivity.events.onHover.parallax.force,
			o = i.interactivity.mouse.position;
		if (!o) return;
		const r = {
				x: i.canvas.size.width / 2,
				y: i.canvas.size.height / 2
			},
			l = n.interactivity.events.onHover.parallax.smooth,
			a = e.getRadius() / s,
			c = {
				x: (o.x - r.x) * a,
				y: (o.y - r.y) * a
			};
		e.offset.x += (c.x - e.offset.x) / l, e.offset.y += (c.y - e.offset.y) / l
	}
}
async function q1(t) {
	t.addMover("parallax", () => new G1)
}
class K1 extends ko {
	constructor(e) {
		super(e)
	}
	async interact(e) {
		var i;
		const n = this.container,
			s = (i = e.retina.attractDistance) !== null && i !== void 0 ? i : n.retina.attractDistance,
			o = e.getPosition(),
			r = n.particles.quadTree.queryCircle(o, s);
		for (const l of r) {
			if (e === l || !l.options.move.attract.enable || l.destroyed || l.spawning) continue;
			const a = l.getPosition(),
				{
					dx: c,
					dy: u
				} = _e(o, a),
				d = e.options.move.attract.rotate,
				h = c / (d.x * 1e3),
				f = u / (d.y * 1e3),
				p = l.size.value / e.size.value,
				y = 1 / p;
			e.velocity.x -= h * p, e.velocity.y -= f * p, l.velocity.x += h * y, l.velocity.y += f * y
		}
	}
	isEnabled(e) {
		return e.options.move.attract.enable
	}
	reset() {}
}
async function Y1(t) {
	await t.addInteractor("particlesAttract", e => new K1(e))
}

function X1(t, e, i, n) {
	if (t.getRadius() === void 0 && e.getRadius() !== void 0) t.destroy();
	else if (t.getRadius() !== void 0 && e.getRadius() === void 0) e.destroy();
	else if (t.getRadius() !== void 0 && e.getRadius() !== void 0)
		if (t.getRadius() >= e.getRadius()) {
			const s = ct(t.getRadius() / e.getRadius(), 0, e.getRadius()) * i;
			t.size.value += s, e.size.value -= s, e.getRadius() <= n && (e.size.value = 0, e.destroy())
		} else {
			const s = ct(e.getRadius() / t.getRadius(), 0, t.getRadius()) * i;
			t.size.value -= s, e.size.value += s, t.getRadius() <= n && (t.size.value = 0, t.destroy())
		}
}

function Oa(t, e) {
	ma(Ws(t), Ws(e))
}

function J1(t, e) {
	!t.unbreakable && !e.unbreakable && Oa(t, e), t.getRadius() === void 0 && e.getRadius() !== void 0 ? t.destroy() : t.getRadius() !== void 0 && e.getRadius() === void 0 ? e.destroy() : t.getRadius() !== void 0 && e.getRadius() !== void 0 && (t.getRadius() >= e.getRadius() ? e.destroy() : t.destroy())
}

function Q1(t, e, i, n) {
	switch (t.options.collisions.mode) {
		case "absorb": {
			X1(t, e, i, n);
			break
		}
		case "bounce": {
			Oa(t, e);
			break
		}
		case "destroy": {
			J1(t, e);
			break
		}
	}
}
class Z1 extends ko {
	constructor(e) {
		super(e)
	}
	isEnabled(e) {
		return e.options.collisions.enable
	}
	reset() {}
	async interact(e) {
		const i = this.container,
			n = e.getPosition(),
			s = e.getRadius(),
			o = i.particles.quadTree.queryCircle(n, s * 2);
		for (const r of o) {
			if (e === r || !r.options.collisions.enable || e.options.collisions.mode !== r.options.collisions.mode || r.destroyed || r.spawning) continue;
			const l = r.getPosition(),
				a = r.getRadius();
			if (Math.abs(Math.round(n.z) - Math.round(l.z)) > s + a) continue;
			const c = we(n, l),
				u = s + a;
			c > u || Q1(e, r, i.fpsLimit / 1e3, i.retina.pixelRatio)
		}
	}
}
async function ey(t) {
	await t.addInteractor("particlesCollisions", e => new Z1(e))
}

function ty(t, e, i, n, s) {
	let o = we(t, e);
	if (!s || o <= i) return o;
	const r = {
		x: e.x - n.width,
		y: e.y
	};
	if (o = we(t, r), o <= i) return o;
	const l = {
		x: e.x - n.width,
		y: e.y - n.height
	};
	if (o = we(t, l), o <= i) return o;
	const a = {
		x: e.x,
		y: e.y - n.height
	};
	return o = we(t, a), o
}
class iy extends ko {
	constructor(e) {
		super(e)
	}
	isEnabled(e) {
		return e.options.links.enable
	}
	reset() {}
	async interact(e) {
		var i;
		e.links = [];
		const n = e.getPosition(),
			s = this.container,
			o = s.canvas.size;
		if (n.x < 0 || n.y < 0 || n.x > o.width || n.y > o.height) return;
		const r = e.options.links,
			l = r.opacity,
			a = (i = e.retina.linksDistance) !== null && i !== void 0 ? i : s.retina.linksDistance,
			c = r.warp,
			u = c ? new ja(n.x, n.y, a, o) : new Ge(n.x, n.y, a),
			d = s.particles.quadTree.query(u);
		for (const h of d) {
			const f = h.options.links;
			if (e === h || !f.enable || r.id !== f.id || h.spawning || h.destroyed || e.links.map(g => g.destination).indexOf(h) !== -1 || h.links.map(g => g.destination).indexOf(e) !== -1) continue;
			const p = h.getPosition();
			if (p.x < 0 || p.y < 0 || p.x > o.width || p.y > o.height) continue;
			const y = ty(n, p, a, o, c && f.warp);
			if (y > a) return;
			const v = (1 - y / a) * l;
			this.setColor(e), e.links.push({
				destination: h,
				opacity: v
			})
		}
	}
	setColor(e) {
		const i = this.container,
			n = e.options.links;
		let s = n.id === void 0 ? i.particles.linksColor : i.particles.linksColors.get(n.id);
		if (!s) {
			const o = n.color;
			s = Pa(o, n.blink, n.consent), n.id === void 0 ? i.particles.linksColor = s : i.particles.linksColors.set(n.id, s)
		}
	}
}
async function ny(t) {
	await t.addInteractor("particlesLinks", e => new iy(e))
}

function sy(t, e, i, n, s, o, r, l, a, c, u, d) {
	let h = !1;
	if (we(i, n) <= s) Gi(t, i, n), h = !0;
	else if (r) {
		let f, p;
		const y = {
				x: n.x - o.width,
				y: n.y
			},
			v = _e(i, y);
		if (v.distance <= s) {
			const g = i.y - v.dy / v.dx * i.x;
			f = {
				x: 0,
				y: g
			}, p = {
				x: o.width,
				y: g
			}
		} else {
			const g = {
					x: n.x,
					y: n.y - o.height
				},
				x = _e(i, g);
			if (x.distance <= s) {
				const E = -(i.y - x.dy / x.dx * i.x) / (x.dy / x.dx);
				f = {
					x: E,
					y: 0
				}, p = {
					x: E,
					y: o.height
				}
			} else {
				const P = {
						x: n.x - o.width,
						y: n.y - o.height
					},
					E = _e(i, P);
				if (E.distance <= s) {
					const R = i.y - E.dy / E.dx * i.x;
					f = {
						x: -R / (E.dy / E.dx),
						y: R
					}, p = {
						x: f.x + o.width,
						y: f.y + o.height
					}
				}
			}
		}
		f && p && (Gi(t, i, f), Gi(t, n, p), h = !0)
	}
	if (!!h) {
		if (t.lineWidth = e, l && (t.globalCompositeOperation = a), t.strokeStyle = nt(c, u), d.enable) {
			const f = Be(d.color);
			f && (t.shadowBlur = d.blur, t.shadowColor = nt(f))
		}
		t.stroke()
	}
}

function oy(t, e, i, n, s, o, r, l) {
	Pf(t, e, i, n), s && (t.globalCompositeOperation = o), t.fillStyle = nt(r, l), t.fill()
}
class ry {
	constructor(e) {
		this.container = e
	}
	particleCreated(e) {
		const i = e;
		i.links = []
	}
	particleDestroyed(e) {
		const i = e;
		i.links = []
	}
	drawParticle(e, i) {
		const n = i,
			s = this.container,
			o = s.particles,
			r = i.options;
		if (n.links.length <= 0) return;
		e.save();
		const l = n.links.filter(a => s.particles.getLinkFrequency(n, a.destination) <= r.links.frequency);
		for (const a of l) {
			const c = a.destination;
			if (r.links.triangles.enable) {
				const u = l.map(h => h.destination),
					d = c.links.filter(h => s.particles.getLinkFrequency(c, h.destination) <= c.options.links.frequency && u.indexOf(h.destination) >= 0);
				if (d.length)
					for (const h of d) {
						const f = h.destination;
						o.getTriangleFrequency(n, c, f) > r.links.triangles.frequency || this.drawLinkTriangle(n, a, h)
					}
			}
			a.opacity > 0 && s.retina.linksWidth > 0 && this.drawLinkLine(n, a)
		}
		e.restore()
	}
	drawLinkTriangle(e, i, n) {
		var s;
		const o = this.container,
			r = o.actualOptions,
			l = i.destination,
			a = n.destination,
			c = e.options.links.triangles,
			u = (s = c.opacity) !== null && s !== void 0 ? s : (i.opacity + n.opacity) / 2;
		u <= 0 || o.canvas.draw(d => {
			const h = e.getPosition(),
				f = l.getPosition(),
				p = a.getPosition();
			if (we(h, f) > o.retina.linksDistance || we(p, f) > o.retina.linksDistance || we(p, h) > o.retina.linksDistance) return;
			let y = Be(c.color);
			if (!y) {
				const v = e.options.links,
					g = v.id !== void 0 ? o.particles.linksColors.get(v.id) : o.particles.linksColor;
				y = Gs(e, l, g)
			}!y || oy(d, h, f, p, r.backgroundMask.enable, r.backgroundMask.composite, y, u)
		})
	}
	drawLinkLine(e, i) {
		const n = this.container,
			s = n.actualOptions,
			o = i.destination,
			r = e.getPosition(),
			l = o.getPosition();
		let a = i.opacity;
		n.canvas.draw(c => {
			var u, d;
			let h;
			const f = e.options.twinkle.lines;
			if (f.enable) {
				const v = f.frequency,
					g = Be(f.color);
				Math.random() < v && g && (h = g, a = U(f.opacity))
			}
			if (!h) {
				const v = e.options.links,
					g = v.id !== void 0 ? n.particles.linksColors.get(v.id) : n.particles.linksColor;
				h = Gs(e, o, g)
			}
			if (!h) return;
			const p = (u = e.retina.linksWidth) !== null && u !== void 0 ? u : n.retina.linksWidth,
				y = (d = e.retina.linksDistance) !== null && d !== void 0 ? d : n.retina.linksDistance;
			sy(c, p, r, l, y, n.canvas.size, e.options.links.warp, s.backgroundMask.enable, s.backgroundMask.composite, h, a, e.options.links.shadow)
		})
	}
}
class ly {
	constructor() {
		this.id = "links"
	}
	getPlugin(e) {
		return new ry(e)
	}
	needsPlugin() {
		return !0
	}
	loadOptions() {}
}
async function ay(t) {
	const e = new ly;
	await t.addPlugin(e)
}
async function cy(t) {
	await ny(t), await ay(t)
}
class Sa {
	getSidesCount(e) {
		var i, n;
		const s = e.shapeData;
		return (n = (i = s == null ? void 0 : s.sides) !== null && i !== void 0 ? i : s == null ? void 0 : s.nb_sides) !== null && n !== void 0 ? n : 5
	}
	draw(e, i, n) {
		const s = this.getCenter(i, n),
			o = this.getSidesData(i, n),
			r = o.count.numerator * o.count.denominator,
			l = o.count.numerator / o.count.denominator,
			a = 180 * (l - 2) / l,
			c = Math.PI - Math.PI * a / 180;
		if (!!e) {
			e.beginPath(), e.translate(s.x, s.y), e.moveTo(0, 0);
			for (let u = 0; u < r; u++) e.lineTo(o.length, 0), e.translate(o.length, 0), e.rotate(c)
		}
	}
}
class uy extends Sa {
	getSidesData(e, i) {
		var n, s;
		const o = e.shapeData,
			r = (s = (n = o == null ? void 0 : o.sides) !== null && n !== void 0 ? n : o == null ? void 0 : o.nb_sides) !== null && s !== void 0 ? s : 5;
		return {
			count: {
				denominator: 1,
				numerator: r
			},
			length: i * 2.66 / (r / 3)
		}
	}
	getCenter(e, i) {
		const n = this.getSidesCount(e);
		return {
			x: -i / (n / 3.5),
			y: -i / (2.66 / 3.5)
		}
	}
}
class dy extends Sa {
	getSidesCount() {
		return 3
	}
	getSidesData(e, i) {
		return {
			count: {
				denominator: 2,
				numerator: 3
			},
			length: i * 2
		}
	}
	getCenter(e, i) {
		return {
			x: -i,
			y: i / 1.66
		}
	}
}
async function hy(t) {
	await t.addShape("polygon", new uy)
}
async function fy(t) {
	await t.addShape("triangle", new dy)
}
async function py(t) {
	await hy(t), await fy(t)
}

function yy(t, e, i, n) {
	switch (t.options.size.animation.destroy) {
		case "max":
			e >= n && t.destroy();
			break;
		case "min":
			e <= i && t.destroy();
			break
	}
}

function my(t, e) {
	var i, n, s, o;
	const r = ((i = t.size.velocity) !== null && i !== void 0 ? i : 0) * e.factor,
		l = t.size.min,
		a = t.size.max;
	if (!(t.destroyed || !t.size.enable || ((n = t.size.maxLoops) !== null && n !== void 0 ? n : 0) > 0 && ((s = t.size.loops) !== null && s !== void 0 ? s : 0) > ((o = t.size.maxLoops) !== null && o !== void 0 ? o : 0))) {
		switch (t.size.status) {
			case 0:
				t.size.value >= a ? (t.size.status = 1, t.size.loops || (t.size.loops = 0), t.size.loops++) : t.size.value += r;
				break;
			case 1:
				t.size.value <= l ? (t.size.status = 0, t.size.loops || (t.size.loops = 0), t.size.loops++) : t.size.value -= r
		}
		yy(t, t.size.value, l, a), t.destroyed || (t.size.value = ct(t.size.value, l, a))
	}
}
class vy {
	init() {}
	isEnabled(e) {
		var i, n, s, o;
		return !e.destroyed && !e.spawning && e.size.enable && (((i = e.size.maxLoops) !== null && i !== void 0 ? i : 0) <= 0 || ((n = e.size.maxLoops) !== null && n !== void 0 ? n : 0) > 0 && ((s = e.size.loops) !== null && s !== void 0 ? s : 0) < ((o = e.size.maxLoops) !== null && o !== void 0 ? o : 0))
	}
	update(e, i) {
		!this.isEnabled(e) || my(e, i)
	}
}
async function gy(t) {
	await t.addParticleUpdater("size", () => new vy)
}
const pn = Math.sqrt(2);
class by {
	getSidesCount() {
		return 4
	}
	draw(e, i, n) {
		e.rect(-n / pn, -n / pn, n * 2 / pn, n * 2 / pn)
	}
}
async function xy(t) {
	const e = new by;
	await t.addShape("edge", e), await t.addShape("square", e)
}
class wy {
	getSidesCount(e) {
		var i, n;
		const s = e.shapeData;
		return (n = (i = s == null ? void 0 : s.sides) !== null && i !== void 0 ? i : s == null ? void 0 : s.nb_sides) !== null && n !== void 0 ? n : 5
	}
	draw(e, i, n) {
		var s;
		const o = i.shapeData,
			r = this.getSidesCount(i),
			l = (s = o == null ? void 0 : o.inset) !== null && s !== void 0 ? s : 2;
		e.moveTo(0, 0 - n);
		for (let a = 0; a < r; a++) e.rotate(Math.PI / r), e.lineTo(0, 0 - n * l), e.rotate(Math.PI / r), e.lineTo(0, 0 - n)
	}
}
async function Py(t) {
	await t.addShape("star", new wy)
}

function _s(t, e, i, n, s) {
	var o;
	const r = e;
	if (!r || !r.enable) return;
	const l = Pe(i.offset),
		a = ((o = e.velocity) !== null && o !== void 0 ? o : 0) * t.factor + l * 3.6;
	!s || r.status === 0 ? (r.value += a, s && r.value > n && (r.status = 1, r.value -= r.value % n)) : (r.value -= a, r.value < 0 && (r.status = 0, r.value += r.value)), r.value > n && (r.value %= n)
}

function _y(t, e) {
	var i, n, s, o, r, l, a, c, u, d;
	if (!(!((i = t.stroke) === null || i === void 0) && i.color)) return;
	const h = t.stroke.color.animation,
		f = (s = (n = t.strokeColor) === null || n === void 0 ? void 0 : n.h) !== null && s !== void 0 ? s : (o = t.color) === null || o === void 0 ? void 0 : o.h;
	f && _s(e, f, h.h, 360, !1);
	const p = (l = (r = t.strokeColor) === null || r === void 0 ? void 0 : r.s) !== null && l !== void 0 ? l : (a = t.color) === null || a === void 0 ? void 0 : a.s;
	p && _s(e, p, h.s, 100, !0);
	const y = (u = (c = t.strokeColor) === null || c === void 0 ? void 0 : c.l) !== null && u !== void 0 ? u : (d = t.color) === null || d === void 0 ? void 0 : d.l;
	y && _s(e, y, h.l, 100, !0)
}
class My {
	constructor(e) {
		this.container = e
	}
	init(e) {
		var i, n;
		const s = this.container;
		e.stroke = e.options.stroke instanceof Array ? ze(e.options.stroke, e.id, e.options.reduceDuplicates) : e.options.stroke, e.strokeWidth = e.stroke.width * s.retina.pixelRatio;
		const o = (i = Nt(e.stroke.color)) !== null && i !== void 0 ? i : e.getFillColor();
		o && (e.strokeColor = _a(o, (n = e.stroke.color) === null || n === void 0 ? void 0 : n.animation, s.retina.reduceFactor))
	}
	isEnabled(e) {
		var i, n, s, o;
		const r = (i = e.stroke) === null || i === void 0 ? void 0 : i.color;
		return !e.destroyed && !e.spawning && !!r && (((n = e.strokeColor) === null || n === void 0 ? void 0 : n.h.value) !== void 0 && r.animation.h.enable || ((s = e.strokeColor) === null || s === void 0 ? void 0 : s.s.value) !== void 0 && r.animation.s.enable || ((o = e.strokeColor) === null || o === void 0 ? void 0 : o.l.value) !== void 0 && r.animation.l.enable)
	}
	update(e, i) {
		!this.isEnabled(e) || _y(e, i)
	}
}
async function jy(t) {
	await t.addParticleUpdater("strokeColor", e => new My(e))
}
const Ys = ["text", "character", "char"];
class Ey {
	getSidesCount() {
		return 12
	}
	async init(e) {
		const i = e.actualOptions;
		if (Ys.find(n => re(n, i.particles.shape.type))) {
			const n = Ys.map(s => i.particles.shape.options[s]).find(s => !!s);
			if (n instanceof Array) {
				const s = [];
				for (const o of n) {
					const r = o;
					s.push(Sr(r.font, r.weight))
				}
				await Promise.allSettled(s)
			} else if (n !== void 0) {
				const s = n;
				await Sr(s.font, s.weight)
			}
		}
	}
	draw(e, i, n, s) {
		var o, r, l;
		const a = i.shapeData;
		if (a === void 0) return;
		const c = a.value;
		if (c === void 0) return;
		const u = i;
		u.text === void 0 && (u.text = c instanceof Array ? ze(c, i.randomIndexData) : c);
		const d = u.text,
			h = (o = a.style) !== null && o !== void 0 ? o : "",
			f = (r = a.weight) !== null && r !== void 0 ? r : "400",
			p = Math.round(n) * 2,
			y = (l = a.font) !== null && l !== void 0 ? l : "Verdana",
			v = i.fill,
			g = d.length * n / 2;
		e.font = `${h} ${f} ${p}px "${y}"`;
		const x = {
			x: -g,
			y: n / 2
		};
		e.globalAlpha = s, v ? e.fillText(d, x.x, x.y) : e.strokeText(d, x.x, x.y), e.globalAlpha = 1
	}
}
async function Cy(t) {
	const e = new Ey;
	for (const i of Ys) await t.addShape(i, e)
}
async function Oy(t) {
	await e1(t), await q1(t), await l1(t), await c1(t), await d1(t), await f1(t), await y1(t), await v1(t), await b1(t), await w1(t), await _1(t), await Y1(t), await ey(t), await cy(t), await i1(t), await S1(t), await z1(t), await py(t), await xy(t), await Py(t), await Cy(t), await k1(t), await D1(t), await gy(t), await Kp(t), await o1(t), await jy(t), await U1(t), await Up(t)
}

function Sy(t, e) {
	var i;
	if (!t.tilt) return;
	const s = t.options.tilt.animation,
		o = ((i = t.tilt.velocity) !== null && i !== void 0 ? i : 0) * e.factor,
		r = 2 * Math.PI;
	if (!!s.enable) switch (t.tilt.status) {
		case 0:
			t.tilt.value += o, t.tilt.value > r && (t.tilt.value -= r);
			break;
		case 1:
		default:
			t.tilt.value -= o, t.tilt.value < 0 && (t.tilt.value += r);
			break
	}
}
class Ty {
	constructor(e) {
		this.container = e
	}
	init(e) {
		const i = e.options.tilt;
		e.tilt = {
			enable: i.enable,
			value: U(i.value) * Math.PI / 180,
			sinDirection: Math.random() >= .5 ? 1 : -1,
			cosDirection: Math.random() >= .5 ? 1 : -1
		};
		let n = i.direction;
		switch (n === "random" && (n = Math.floor(Math.random() * 2) > 0 ? "counter-clockwise" : "clockwise"), n) {
			case "counter-clockwise":
			case "counterClockwise":
				e.tilt.status = 1;
				break;
			case "clockwise":
				e.tilt.status = 0;
				break
		}
		const s = e.options.tilt.animation;
		s.enable && (e.tilt.velocity = U(s.speed) / 360 * this.container.retina.reduceFactor, s.sync || (e.tilt.velocity *= Math.random()))
	}
	isEnabled(e) {
		const n = e.options.tilt.animation;
		return !e.destroyed && !e.spawning && n.enable
	}
	update(e, i) {
		!this.isEnabled(e) || Sy(e, i)
	}
}
async function ky(t) {
	await t.addParticleUpdater("tilt", e => new Ty(e))
}
class Ay {
	getColorStyles(e, i, n, s) {
		const o = e.options,
			r = o.twinkle.particles,
			l = r.enable && Math.random() < r.frequency,
			a = e.options.zIndex,
			c = (1 - e.zIndexFactor) ** a.opacityRate,
			u = l ? U(r.opacity) * c : s,
			d = Nt(r.color),
			h = d ? bi(d, u) : void 0,
			f = {},
			p = l && h;
		return f.fill = p ? h : void 0, f.stroke = p ? h : void 0, f
	}
	init() {}
	isEnabled(e) {
		return e.options.twinkle.particles.enable
	}
	update() {}
}
async function zy(t) {
	await t.addParticleUpdater("twinkle", () => new Ay)
}

function Ry(t, e) {
	var i;
	if (!t.options.wobble.enable || !t.wobble) return;
	const s = t.wobble.speed * e.factor,
		o = ((i = t.retina.wobbleDistance) !== null && i !== void 0 ? i : 0) * e.factor / (1e3 / 60),
		r = 2 * Math.PI;
	t.wobble.angle += s, t.wobble.angle > r && (t.wobble.angle -= r), t.position.x += o * Math.cos(t.wobble.angle), t.position.y += o * Math.abs(Math.sin(t.wobble.angle))
}
class Iy {
	constructor(e) {
		this.container = e
	}
	init(e) {
		const i = e.options.wobble;
		i.enable ? e.wobble = {
			angle: Math.random() * Math.PI * 2,
			speed: U(i.speed) / 360
		} : e.wobble = {
			angle: 0,
			speed: 0
		}, e.retina.wobbleDistance = U(i.distance) * this.container.retina.pixelRatio
	}
	isEnabled(e) {
		return !e.destroyed && !e.spawning && e.options.wobble.enable
	}
	update(e, i) {
		!this.isEnabled(e) || Ry(e, i)
	}
}
async function Fy(t) {
	await t.addParticleUpdater("wobble", e => new Iy(e))
}
async function Dy(t) {
	await Oy(t), await Wp(t), await ky(t), await zy(t), await Fy(t), await wp(t), await op(t), await bp(t), await Bp(t)
}
const Ly = {
	number: {
		value: 100,
		density: {
			enable: !1,
			value_area: 800
		}
	},
	color: {
		value: "#ffffff"
	},
	shape: {
		type: "circle",
		polygon: {
			nb_sides: 5
		}
	},
	opacity: {
		value: .5,
		random: !1,
		anim: {
			enable: !1,
			speed: 1,
			opacity_min: .1,
			sync: !1
		}
	},
	size: {
		value: 5,
		random: !0,
		anim: {
			enable: !1,
			speed: 40,
			size_min: .1,
			sync: !1
		}
	},
	line_linked: {
		enable: !0,
		distance: 150,
		color: "#ffffff",
		opacity: .4,
		width: 1
	},
	move: {
		enable: !0,
		speed: 1,
		direction: "none",
		random: !1,
		straight: !1,
		out_mode: "out",
		attract: {
			enable: !1,
			rotateX: 600,
			rotateY: 1200
		}
	}
};
var Hr = {
	particles: Ly
};
const Hy = {
		class: "container mx-auto md:p-0 font-thai"
	},
	$y = {
		class: "flex items-center justify-center h-screen"
	},
	By = Mt({
		setup(t) {
			xo(() => {
				window.innerWidth <= 1024 && (Hr.particles.number.value = 40)
			});
			async function e(i) {
				await Dy(i)
			}
			return (i, n) => {
				const s = $s("Particles"),
					o = $s("router-view");
				return $e(), gt(He, null, [ge(s, {
					id: "tsparticles",
					particlesInit: e,
					options: Dt(Hr)
				}, null, 8, ["options"]), Ve("div", Hy, [Ve("div", $y, [ge(o)])])], 64)
			}
		}
	});
/*!
 * vue-router v4.0.15
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */
const Ta = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
	ji = t => Ta ? Symbol(t) : "_vr_" + t,
	Vy = ji("rvlm"),
	$r = ji("rvd"),
	zo = ji("r"),
	ka = ji("rl"),
	Xs = ji("rvl"),
	hi = typeof window != "undefined";

function Ny(t) {
	return t.__esModule || Ta && t[Symbol.toStringTag] === "Module"
}
const ue = Object.assign;

function Ms(t, e) {
	const i = {};
	for (const n in e) {
		const s = e[n];
		i[n] = Array.isArray(s) ? s.map(t) : t(s)
	}
	return i
}
const qi = () => {},
	Wy = /\/$/,
	Uy = t => t.replace(Wy, "");

function js(t, e, i = "/") {
	let n, s = {},
		o = "",
		r = "";
	const l = e.indexOf("?"),
		a = e.indexOf("#", l > -1 ? l : 0);
	return l > -1 && (n = e.slice(0, l), o = e.slice(l + 1, a > -1 ? a : e.length), s = t(o)), a > -1 && (n = n || e.slice(0, a), r = e.slice(a, e.length)), n = Yy(n != null ? n : e, i), {
		fullPath: n + (o && "?") + o + r,
		path: n,
		query: s,
		hash: r
	}
}

function Gy(t, e) {
	const i = e.query ? t(e.query) : "";
	return e.path + (i && "?") + i + (e.hash || "")
}

function Br(t, e) {
	return !e || !t.toLowerCase().startsWith(e.toLowerCase()) ? t : t.slice(e.length) || "/"
}

function qy(t, e, i) {
	const n = e.matched.length - 1,
		s = i.matched.length - 1;
	return n > -1 && n === s && xi(e.matched[n], i.matched[s]) && Aa(e.params, i.params) && t(e.query) === t(i.query) && e.hash === i.hash
}

function xi(t, e) {
	return (t.aliasOf || t) === (e.aliasOf || e)
}

function Aa(t, e) {
	if (Object.keys(t).length !== Object.keys(e).length) return !1;
	for (const i in t)
		if (!Ky(t[i], e[i])) return !1;
	return !0
}

function Ky(t, e) {
	return Array.isArray(t) ? Vr(t, e) : Array.isArray(e) ? Vr(e, t) : t === e
}

function Vr(t, e) {
	return Array.isArray(e) ? t.length === e.length && t.every((i, n) => i === e[n]) : t.length === 1 && t[0] === e
}

function Yy(t, e) {
	if (t.startsWith("/")) return t;
	if (!t) return e;
	const i = e.split("/"),
		n = t.split("/");
	let s = i.length - 1,
		o, r;
	for (o = 0; o < n.length; o++)
		if (r = n[o], !(s === 1 || r === "."))
			if (r === "..") s--;
			else break;
	return i.slice(0, s).join("/") + "/" + n.slice(o - (o === n.length ? 1 : 0)).join("/")
}
var nn;
(function(t) {
	t.pop = "pop", t.push = "push"
})(nn || (nn = {}));
var Ki;
(function(t) {
	t.back = "back", t.forward = "forward", t.unknown = ""
})(Ki || (Ki = {}));

function Xy(t) {
	if (!t)
		if (hi) {
			const e = document.querySelector("base");
			t = e && e.getAttribute("href") || "/", t = t.replace(/^\w+:\/\/[^\/]+/, "")
		} else t = "/";
	return t[0] !== "/" && t[0] !== "#" && (t = "/" + t), Uy(t)
}
const Jy = /^[^#]+#/;

function Qy(t, e) {
	return t.replace(Jy, "#") + e
}

function Zy(t, e) {
	const i = document.documentElement.getBoundingClientRect(),
		n = t.getBoundingClientRect();
	return {
		behavior: e.behavior,
		left: n.left - i.left - (e.left || 0),
		top: n.top - i.top - (e.top || 0)
	}
}
const is = () => ({
	left: window.pageXOffset,
	top: window.pageYOffset
});

function e0(t) {
	let e;
	if ("el" in t) {
		const i = t.el,
			n = typeof i == "string" && i.startsWith("#"),
			s = typeof i == "string" ? n ? document.getElementById(i.slice(1)) : document.querySelector(i) : i;
		if (!s) return;
		e = Zy(s, t)
	} else e = t;
	"scrollBehavior" in document.documentElement.style ? window.scrollTo(e) : window.scrollTo(e.left != null ? e.left : window.pageXOffset, e.top != null ? e.top : window.pageYOffset)
}

function Nr(t, e) {
	return (history.state ? history.state.position - e : -1) + t
}
const Js = new Map;

function t0(t, e) {
	Js.set(t, e)
}

function i0(t) {
	const e = Js.get(t);
	return Js.delete(t), e
}
let n0 = () => location.protocol + "//" + location.host;

function za(t, e) {
	const {
		pathname: i,
		search: n,
		hash: s
	} = e, o = t.indexOf("#");
	if (o > -1) {
		let l = s.includes(t.slice(o)) ? t.slice(o).length : 1,
			a = s.slice(l);
		return a[0] !== "/" && (a = "/" + a), Br(a, "")
	}
	return Br(i, t) + n + s
}

function s0(t, e, i, n) {
	let s = [],
		o = [],
		r = null;
	const l = ({
		state: h
	}) => {
		const f = za(t, location),
			p = i.value,
			y = e.value;
		let v = 0;
		if (h) {
			if (i.value = f, e.value = h, r && r === p) {
				r = null;
				return
			}
			v = y ? h.position - y.position : 0
		} else n(f);
		s.forEach(g => {
			g(i.value, p, {
				delta: v,
				type: nn.pop,
				direction: v ? v > 0 ? Ki.forward : Ki.back : Ki.unknown
			})
		})
	};

	function a() {
		r = i.value
	}

	function c(h) {
		s.push(h);
		const f = () => {
			const p = s.indexOf(h);
			p > -1 && s.splice(p, 1)
		};
		return o.push(f), f
	}

	function u() {
		const {
			history: h
		} = window;
		!h.state || h.replaceState(ue({}, h.state, {
			scroll: is()
		}), "")
	}

	function d() {
		for (const h of o) h();
		o = [], window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", u)
	}
	return window.addEventListener("popstate", l), window.addEventListener("beforeunload", u), {
		pauseListeners: a,
		listen: c,
		destroy: d
	}
}

function Wr(t, e, i, n = !1, s = !1) {
	return {
		back: t,
		current: e,
		forward: i,
		replaced: n,
		position: window.history.length,
		scroll: s ? is() : null
	}
}

function o0(t) {
	const {
		history: e,
		location: i
	} = window, n = {
		value: za(t, i)
	}, s = {
		value: e.state
	};
	s.value || o(n.value, {
		back: null,
		current: n.value,
		forward: null,
		position: e.length - 1,
		replaced: !0,
		scroll: null
	}, !0);

	function o(a, c, u) {
		const d = t.indexOf("#"),
			h = d > -1 ? (i.host && document.querySelector("base") ? t : t.slice(d)) + a : n0() + t + a;
		try {
			e[u ? "replaceState" : "pushState"](c, "", h), s.value = c
		} catch (f) {
			console.error(f), i[u ? "replace" : "assign"](h)
		}
	}

	function r(a, c) {
		const u = ue({}, e.state, Wr(s.value.back, a, s.value.forward, !0), c, {
			position: s.value.position
		});
		o(a, u, !0), n.value = a
	}

	function l(a, c) {
		const u = ue({}, s.value, e.state, {
			forward: a,
			scroll: is()
		});
		o(u.current, u, !0);
		const d = ue({}, Wr(n.value, a, null), {
			position: u.position + 1
		}, c);
		o(a, d, !1), n.value = a
	}
	return {
		location: n,
		state: s,
		push: l,
		replace: r
	}
}

function r0(t) {
	t = Xy(t);
	const e = o0(t),
		i = s0(t, e.state, e.location, e.replace);

	function n(o, r = !0) {
		r || i.pauseListeners(), history.go(o)
	}
	const s = ue({
		location: "",
		base: t,
		go: n,
		createHref: Qy.bind(null, t)
	}, e, i);
	return Object.defineProperty(s, "location", {
		enumerable: !0,
		get: () => e.location.value
	}), Object.defineProperty(s, "state", {
		enumerable: !0,
		get: () => e.state.value
	}), s
}

function l0(t) {
	return t = location.host ? t || location.pathname + location.search : "", t.includes("#") || (t += "#"), r0(t)
}

function a0(t) {
	return typeof t == "string" || t && typeof t == "object"
}

function Ra(t) {
	return typeof t == "string" || typeof t == "symbol"
}
const Tt = {
		path: "/",
		name: void 0,
		params: {},
		query: {},
		hash: "",
		fullPath: "/",
		matched: [],
		meta: {},
		redirectedFrom: void 0
	},
	Ia = ji("nf");
var Ur;
(function(t) {
	t[t.aborted = 4] = "aborted", t[t.cancelled = 8] = "cancelled", t[t.duplicated = 16] = "duplicated"
})(Ur || (Ur = {}));

function wi(t, e) {
	return ue(new Error, {
		type: t,
		[Ia]: !0
	}, e)
}

function kt(t, e) {
	return t instanceof Error && Ia in t && (e == null || !!(t.type & e))
}
const Gr = "[^/]+?",
	c0 = {
		sensitive: !1,
		strict: !1,
		start: !0,
		end: !0
	},
	u0 = /[.+*?^${}()[\]/\\]/g;

function d0(t, e) {
	const i = ue({}, c0, e),
		n = [];
	let s = i.start ? "^" : "";
	const o = [];
	for (const c of t) {
		const u = c.length ? [] : [90];
		i.strict && !c.length && (s += "/");
		for (let d = 0; d < c.length; d++) {
			const h = c[d];
			let f = 40 + (i.sensitive ? .25 : 0);
			if (h.type === 0) d || (s += "/"), s += h.value.replace(u0, "\\$&"), f += 40;
			else if (h.type === 1) {
				const {
					value: p,
					repeatable: y,
					optional: v,
					regexp: g
				} = h;
				o.push({
					name: p,
					repeatable: y,
					optional: v
				});
				const x = g || Gr;
				if (x !== Gr) {
					f += 10;
					try {
						new RegExp(`(${x})`)
					} catch (E) {
						throw new Error(`Invalid custom RegExp for param "${p}" (${x}): ` + E.message)
					}
				}
				let P = y ? `((?:${x})(?:/(?:${x}))*)` : `(${x})`;
				d || (P = v && c.length < 2 ? `(?:/${P})` : "/" + P), v && (P += "?"), s += P, f += 20, v && (f += -8), y && (f += -20), x === ".*" && (f += -50)
			}
			u.push(f)
		}
		n.push(u)
	}
	if (i.strict && i.end) {
		const c = n.length - 1;
		n[c][n[c].length - 1] += .7000000000000001
	}
	i.strict || (s += "/?"), i.end ? s += "$" : i.strict && (s += "(?:/|$)");
	const r = new RegExp(s, i.sensitive ? "" : "i");

	function l(c) {
		const u = c.match(r),
			d = {};
		if (!u) return null;
		for (let h = 1; h < u.length; h++) {
			const f = u[h] || "",
				p = o[h - 1];
			d[p.name] = f && p.repeatable ? f.split("/") : f
		}
		return d
	}

	function a(c) {
		let u = "",
			d = !1;
		for (const h of t) {
			(!d || !u.endsWith("/")) && (u += "/"), d = !1;
			for (const f of h)
				if (f.type === 0) u += f.value;
				else if (f.type === 1) {
				const {
					value: p,
					repeatable: y,
					optional: v
				} = f, g = p in c ? c[p] : "";
				if (Array.isArray(g) && !y) throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);
				const x = Array.isArray(g) ? g.join("/") : g;
				if (!x)
					if (v) h.length < 2 && t.length > 1 && (u.endsWith("/") ? u = u.slice(0, -1) : d = !0);
					else throw new Error(`Missing required param "${p}"`);
				u += x
			}
		}
		return u
	}
	return {
		re: r,
		score: n,
		keys: o,
		parse: l,
		stringify: a
	}
}

function h0(t, e) {
	let i = 0;
	for (; i < t.length && i < e.length;) {
		const n = e[i] - t[i];
		if (n) return n;
		i++
	}
	return t.length < e.length ? t.length === 1 && t[0] === 40 + 40 ? -1 : 1 : t.length > e.length ? e.length === 1 && e[0] === 40 + 40 ? 1 : -1 : 0
}

function f0(t, e) {
	let i = 0;
	const n = t.score,
		s = e.score;
	for (; i < n.length && i < s.length;) {
		const o = h0(n[i], s[i]);
		if (o) return o;
		i++
	}
	return s.length - n.length
}
const p0 = {
		type: 0,
		value: ""
	},
	y0 = /[a-zA-Z0-9_]/;

function m0(t) {
	if (!t) return [
		[]
	];
	if (t === "/") return [
		[p0]
	];
	if (!t.startsWith("/")) throw new Error(`Invalid path "${t}"`);

	function e(f) {
		throw new Error(`ERR (${i})/"${c}": ${f}`)
	}
	let i = 0,
		n = i;
	const s = [];
	let o;

	function r() {
		o && s.push(o), o = []
	}
	let l = 0,
		a, c = "",
		u = "";

	function d() {
		!c || (i === 0 ? o.push({
			type: 0,
			value: c
		}) : i === 1 || i === 2 || i === 3 ? (o.length > 1 && (a === "*" || a === "+") && e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), o.push({
			type: 1,
			value: c,
			regexp: u,
			repeatable: a === "*" || a === "+",
			optional: a === "*" || a === "?"
		})) : e("Invalid state to consume buffer"), c = "")
	}

	function h() {
		c += a
	}
	for (; l < t.length;) {
		if (a = t[l++], a === "\\" && i !== 2) {
			n = i, i = 4;
			continue
		}
		switch (i) {
			case 0:
				a === "/" ? (c && d(), r()) : a === ":" ? (d(), i = 1) : h();
				break;
			case 4:
				h(), i = n;
				break;
			case 1:
				a === "(" ? i = 2 : y0.test(a) ? h() : (d(), i = 0, a !== "*" && a !== "?" && a !== "+" && l--);
				break;
			case 2:
				a === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + a : i = 3 : u += a;
				break;
			case 3:
				d(), i = 0, a !== "*" && a !== "?" && a !== "+" && l--, u = "";
				break;
			default:
				e("Unknown state");
				break
		}
	}
	return i === 2 && e(`Unfinished custom RegExp for param "${c}"`), d(), r(), s
}

function v0(t, e, i) {
	const n = d0(m0(t.path), i),
		s = ue(n, {
			record: t,
			parent: e,
			children: [],
			alias: []
		});
	return e && !s.record.aliasOf == !e.record.aliasOf && e.children.push(s), s
}

function g0(t, e) {
	const i = [],
		n = new Map;
	e = Kr({
		strict: !1,
		end: !0,
		sensitive: !1
	}, e);

	function s(u) {
		return n.get(u)
	}

	function o(u, d, h) {
		const f = !h,
			p = x0(u);
		p.aliasOf = h && h.record;
		const y = Kr(e, u),
			v = [p];
		if ("alias" in u) {
			const P = typeof u.alias == "string" ? [u.alias] : u.alias;
			for (const E of P) v.push(ue({}, p, {
				components: h ? h.record.components : p.components,
				path: E,
				aliasOf: h ? h.record : p
			}))
		}
		let g, x;
		for (const P of v) {
			const {
				path: E
			} = P;
			if (d && E[0] !== "/") {
				const R = d.record.path,
					I = R[R.length - 1] === "/" ? "" : "/";
				P.path = d.record.path + (E && I + E)
			}
			if (g = v0(P, d, y), h ? h.alias.push(g) : (x = x || g, x !== g && x.alias.push(g), f && u.name && !qr(g) && r(u.name)), "children" in p) {
				const R = p.children;
				for (let I = 0; I < R.length; I++) o(R[I], g, h && h.children[I])
			}
			h = h || g, a(g)
		}
		return x ? () => {
			r(x)
		} : qi
	}

	function r(u) {
		if (Ra(u)) {
			const d = n.get(u);
			d && (n.delete(u), i.splice(i.indexOf(d), 1), d.children.forEach(r), d.alias.forEach(r))
		} else {
			const d = i.indexOf(u);
			d > -1 && (i.splice(d, 1), u.record.name && n.delete(u.record.name), u.children.forEach(r), u.alias.forEach(r))
		}
	}

	function l() {
		return i
	}

	function a(u) {
		let d = 0;
		for (; d < i.length && f0(u, i[d]) >= 0 && (u.record.path !== i[d].record.path || !Fa(u, i[d]));) d++;
		i.splice(d, 0, u), u.record.name && !qr(u) && n.set(u.record.name, u)
	}

	function c(u, d) {
		let h, f = {},
			p, y;
		if ("name" in u && u.name) {
			if (h = n.get(u.name), !h) throw wi(1, {
				location: u
			});
			y = h.record.name, f = ue(b0(d.params, h.keys.filter(x => !x.optional).map(x => x.name)), u.params), p = h.stringify(f)
		} else if ("path" in u) p = u.path, h = i.find(x => x.re.test(p)), h && (f = h.parse(p), y = h.record.name);
		else {
			if (h = d.name ? n.get(d.name) : i.find(x => x.re.test(d.path)), !h) throw wi(1, {
				location: u,
				currentLocation: d
			});
			y = h.record.name, f = ue({}, d.params, u.params), p = h.stringify(f)
		}
		const v = [];
		let g = h;
		for (; g;) v.unshift(g.record), g = g.parent;
		return {
			name: y,
			path: p,
			params: f,
			matched: v,
			meta: P0(v)
		}
	}
	return t.forEach(u => o(u)), {
		addRoute: o,
		resolve: c,
		removeRoute: r,
		getRoutes: l,
		getRecordMatcher: s
	}
}

function b0(t, e) {
	const i = {};
	for (const n of e) n in t && (i[n] = t[n]);
	return i
}

function x0(t) {
	return {
		path: t.path,
		redirect: t.redirect,
		name: t.name,
		meta: t.meta || {},
		aliasOf: void 0,
		beforeEnter: t.beforeEnter,
		props: w0(t),
		children: t.children || [],
		instances: {},
		leaveGuards: new Set,
		updateGuards: new Set,
		enterCallbacks: {},
		components: "components" in t ? t.components || {} : {
			default: t.component
		}
	}
}

function w0(t) {
	const e = {},
		i = t.props || !1;
	if ("component" in t) e.default = i;
	else
		for (const n in t.components) e[n] = typeof i == "boolean" ? i : i[n];
	return e
}

function qr(t) {
	for (; t;) {
		if (t.record.aliasOf) return !0;
		t = t.parent
	}
	return !1
}

function P0(t) {
	return t.reduce((e, i) => ue(e, i.meta), {})
}

function Kr(t, e) {
	const i = {};
	for (const n in t) i[n] = n in e ? e[n] : t[n];
	return i
}

function Fa(t, e) {
	return e.children.some(i => i === t || Fa(t, i))
}
const Da = /#/g,
	_0 = /&/g,
	M0 = /\//g,
	j0 = /=/g,
	E0 = /\?/g,
	La = /\+/g,
	C0 = /%5B/g,
	O0 = /%5D/g,
	Ha = /%5E/g,
	S0 = /%60/g,
	$a = /%7B/g,
	T0 = /%7C/g,
	Ba = /%7D/g,
	k0 = /%20/g;

function Ro(t) {
	return encodeURI("" + t).replace(T0, "|").replace(C0, "[").replace(O0, "]")
}

function A0(t) {
	return Ro(t).replace($a, "{").replace(Ba, "}").replace(Ha, "^")
}

function Qs(t) {
	return Ro(t).replace(La, "%2B").replace(k0, "+").replace(Da, "%23").replace(_0, "%26").replace(S0, "`").replace($a, "{").replace(Ba, "}").replace(Ha, "^")
}

function z0(t) {
	return Qs(t).replace(j0, "%3D")
}

function R0(t) {
	return Ro(t).replace(Da, "%23").replace(E0, "%3F")
}

function I0(t) {
	return t == null ? "" : R0(t).replace(M0, "%2F")
}

function $n(t) {
	try {
		return decodeURIComponent("" + t)
	} catch {}
	return "" + t
}

function F0(t) {
	const e = {};
	if (t === "" || t === "?") return e;
	const n = (t[0] === "?" ? t.slice(1) : t).split("&");
	for (let s = 0; s < n.length; ++s) {
		const o = n[s].replace(La, " "),
			r = o.indexOf("="),
			l = $n(r < 0 ? o : o.slice(0, r)),
			a = r < 0 ? null : $n(o.slice(r + 1));
		if (l in e) {
			let c = e[l];
			Array.isArray(c) || (c = e[l] = [c]), c.push(a)
		} else e[l] = a
	}
	return e
}

function Yr(t) {
	let e = "";
	for (let i in t) {
		const n = t[i];
		if (i = z0(i), n == null) {
			n !== void 0 && (e += (e.length ? "&" : "") + i);
			continue
		}(Array.isArray(n) ? n.map(o => o && Qs(o)) : [n && Qs(n)]).forEach(o => {
			o !== void 0 && (e += (e.length ? "&" : "") + i, o != null && (e += "=" + o))
		})
	}
	return e
}

function D0(t) {
	const e = {};
	for (const i in t) {
		const n = t[i];
		n !== void 0 && (e[i] = Array.isArray(n) ? n.map(s => s == null ? null : "" + s) : n == null ? n : "" + n)
	}
	return e
}

function zi() {
	let t = [];

	function e(n) {
		return t.push(n), () => {
			const s = t.indexOf(n);
			s > -1 && t.splice(s, 1)
		}
	}

	function i() {
		t = []
	}
	return {
		add: e,
		list: () => t,
		reset: i
	}
}

function It(t, e, i, n, s) {
	const o = n && (n.enterCallbacks[s] = n.enterCallbacks[s] || []);
	return () => new Promise((r, l) => {
		const a = d => {
				d === !1 ? l(wi(4, {
					from: i,
					to: e
				})) : d instanceof Error ? l(d) : a0(d) ? l(wi(2, {
					from: e,
					to: d
				})) : (o && n.enterCallbacks[s] === o && typeof d == "function" && o.push(d), r())
			},
			c = t.call(n && n.instances[s], e, i, a);
		let u = Promise.resolve(c);
		t.length < 3 && (u = u.then(a)), u.catch(d => l(d))
	})
}

function Es(t, e, i, n) {
	const s = [];
	for (const o of t)
		for (const r in o.components) {
			let l = o.components[r];
			if (!(e !== "beforeRouteEnter" && !o.instances[r]))
				if (L0(l)) {
					const c = (l.__vccOpts || l)[e];
					c && s.push(It(c, i, n, o, r))
				} else {
					let a = l();
					s.push(() => a.then(c => {
						if (!c) return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${o.path}"`));
						const u = Ny(c) ? c.default : c;
						o.components[r] = u;
						const h = (u.__vccOpts || u)[e];
						return h && It(h, i, n, o, r)()
					}))
				}
		}
	return s
}

function L0(t) {
	return typeof t == "object" || "displayName" in t || "props" in t || "__vccOpts" in t
}

function Xr(t) {
	const e = Ht(zo),
		i = Ht(ka),
		n = yt(() => e.resolve(Dt(t.to))),
		s = yt(() => {
			const {
				matched: a
			} = n.value, {
				length: c
			} = a, u = a[c - 1], d = i.matched;
			if (!u || !d.length) return -1;
			const h = d.findIndex(xi.bind(null, u));
			if (h > -1) return h;
			const f = Jr(a[c - 2]);
			return c > 1 && Jr(u) === f && d[d.length - 1].path !== f ? d.findIndex(xi.bind(null, a[c - 2])) : h
		}),
		o = yt(() => s.value > -1 && V0(i.params, n.value.params)),
		r = yt(() => s.value > -1 && s.value === i.matched.length - 1 && Aa(i.params, n.value.params));

	function l(a = {}) {
		return B0(a) ? e[Dt(t.replace) ? "replace" : "push"](Dt(t.to)).catch(qi) : Promise.resolve()
	}
	return {
		route: n,
		href: yt(() => n.value.href),
		isActive: o,
		isExactActive: r,
		navigate: l
	}
}
const H0 = Mt({
		name: "RouterLink",
		props: {
			to: {
				type: [String, Object],
				required: !0
			},
			replace: Boolean,
			activeClass: String,
			exactActiveClass: String,
			custom: Boolean,
			ariaCurrentValue: {
				type: String,
				default: "page"
			}
		},
		useLink: Xr,
		setup(t, {
			slots: e
		}) {
			const i = on(Xr(t)),
				{
					options: n
				} = Ht(zo),
				s = yt(() => ({
					[Qr(t.activeClass, n.linkActiveClass, "router-link-active")]: i.isActive,
					[Qr(t.exactActiveClass, n.linkExactActiveClass, "router-link-exact-active")]: i.isExactActive
				}));
			return () => {
				const o = e.default && e.default(i);
				return t.custom ? o : en("a", {
					"aria-current": i.isExactActive ? t.ariaCurrentValue : null,
					href: i.href,
					onClick: i.navigate,
					class: s.value
				}, o)
			}
		}
	}),
	$0 = H0;

function B0(t) {
	if (!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) && !t.defaultPrevented && !(t.button !== void 0 && t.button !== 0)) {
		if (t.currentTarget && t.currentTarget.getAttribute) {
			const e = t.currentTarget.getAttribute("target");
			if (/\b_blank\b/i.test(e)) return
		}
		return t.preventDefault && t.preventDefault(), !0
	}
}

function V0(t, e) {
	for (const i in e) {
		const n = e[i],
			s = t[i];
		if (typeof n == "string") {
			if (n !== s) return !1
		} else if (!Array.isArray(s) || s.length !== n.length || n.some((o, r) => o !== s[r])) return !1
	}
	return !0
}

function Jr(t) {
	return t ? t.aliasOf ? t.aliasOf.path : t.path : ""
}
const Qr = (t, e, i) => t != null ? t : e != null ? e : i,
	N0 = Mt({
		name: "RouterView",
		inheritAttrs: !1,
		props: {
			name: {
				type: String,
				default: "default"
			},
			route: Object
		},
		compatConfig: {
			MODE: 3
		},
		setup(t, {
			attrs: e,
			slots: i
		}) {
			const n = Ht(Xs),
				s = yt(() => t.route || n.value),
				o = Ht($r, 0),
				r = yt(() => s.value.matched[o]);
			gn($r, o + 1), gn(Vy, r), gn(Xs, s);
			const l = Sn();
			return bn(() => [l.value, r.value, t.name], ([a, c, u], [d, h, f]) => {
				c && (c.instances[u] = a, h && h !== c && a && a === d && (c.leaveGuards.size || (c.leaveGuards = h.leaveGuards), c.updateGuards.size || (c.updateGuards = h.updateGuards))), a && c && (!h || !xi(c, h) || !d) && (c.enterCallbacks[u] || []).forEach(p => p(a))
			}, {
				flush: "post"
			}), () => {
				const a = s.value,
					c = r.value,
					u = c && c.components[t.name],
					d = t.name;
				if (!u) return Zr(i.default, {
					Component: u,
					route: a
				});
				const h = c.props[t.name],
					f = h ? h === !0 ? a.params : typeof h == "function" ? h(a) : h : null,
					y = en(u, ue({}, f, e, {
						onVnodeUnmounted: v => {
							v.component.isUnmounted && (c.instances[d] = null)
						},
						ref: l
					}));
				return Zr(i.default, {
					Component: y,
					route: a
				}) || y
			}
		}
	});

function Zr(t, e) {
	if (!t) return null;
	const i = t(e);
	return i.length === 1 ? i[0] : i
}
const W0 = N0;

function U0(t) {
	const e = g0(t.routes, t),
		i = t.parseQuery || F0,
		n = t.stringifyQuery || Yr,
		s = t.history,
		o = zi(),
		r = zi(),
		l = zi(),
		a = Lc(Tt);
	let c = Tt;
	hi && t.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	const u = Ms.bind(null, _ => "" + _),
		d = Ms.bind(null, I0),
		h = Ms.bind(null, $n);

	function f(_, L) {
		let k, H;
		return Ra(_) ? (k = e.getRecordMatcher(_), H = L) : H = _, e.addRoute(H, k)
	}

	function p(_) {
		const L = e.getRecordMatcher(_);
		L && e.removeRoute(L)
	}

	function y() {
		return e.getRoutes().map(_ => _.record)
	}

	function v(_) {
		return !!e.getRecordMatcher(_)
	}

	function g(_, L) {
		if (L = ue({}, L || a.value), typeof _ == "string") {
			const Y = js(i, _, L.path),
				m = e.resolve({
					path: Y.path
				}, L),
				b = s.createHref(Y.fullPath);
			return ue(Y, m, {
				params: h(m.params),
				hash: $n(Y.hash),
				redirectedFrom: void 0,
				href: b
			})
		}
		let k;
		if ("path" in _) k = ue({}, _, {
			path: js(i, _.path, L.path).path
		});
		else {
			const Y = ue({}, _.params);
			for (const m in Y) Y[m] == null && delete Y[m];
			k = ue({}, _, {
				params: d(_.params)
			}), L.params = d(L.params)
		}
		const H = e.resolve(k, L),
			ae = _.hash || "";
		H.params = u(h(H.params));
		const fe = Gy(n, ue({}, _, {
				hash: A0(ae),
				path: H.path
			})),
			Z = s.createHref(fe);
		return ue({
			fullPath: fe,
			hash: ae,
			query: n === Yr ? D0(_.query) : _.query || {}
		}, H, {
			redirectedFrom: void 0,
			href: Z
		})
	}

	function x(_) {
		return typeof _ == "string" ? js(i, _, a.value.path) : ue({}, _)
	}

	function P(_, L) {
		if (c !== _) return wi(8, {
			from: L,
			to: _
		})
	}

	function E(_) {
		return A(_)
	}

	function R(_) {
		return E(ue(x(_), {
			replace: !0
		}))
	}

	function I(_) {
		const L = _.matched[_.matched.length - 1];
		if (L && L.redirect) {
			const {
				redirect: k
			} = L;
			let H = typeof k == "function" ? k(_) : k;
			return typeof H == "string" && (H = H.includes("?") || H.includes("#") ? H = x(H) : {
				path: H
			}, H.params = {}), ue({
				query: _.query,
				hash: _.hash,
				params: _.params
			}, H)
		}
	}

	function A(_, L) {
		const k = c = g(_),
			H = a.value,
			ae = _.state,
			fe = _.force,
			Z = _.replace === !0,
			Y = I(k);
		if (Y) return A(ue(x(Y), {
			state: ae,
			force: fe,
			replace: Z
		}), L || k);
		const m = k;
		m.redirectedFrom = L;
		let b;
		return !fe && qy(n, H, k) && (b = wi(16, {
			to: m,
			from: H
		}), xt(H, H, !0, !1)), (b ? Promise.resolve(b) : N(m, H)).catch(w => kt(w) ? kt(w, 2) ? w : be(w) : Q(w, m, H)).then(w => {
			if (w) {
				if (kt(w, 2)) return A(ue(x(w.to), {
					state: ae,
					force: fe,
					replace: Z
				}), L || m)
			} else w = G(m, H, !0, Z, ae);
			return le(m, H, w), w
		})
	}

	function W(_, L) {
		const k = P(_, L);
		return k ? Promise.reject(k) : Promise.resolve()
	}

	function N(_, L) {
		let k;
		const [H, ae, fe] = G0(_, L);
		k = Es(H.reverse(), "beforeRouteLeave", _, L);
		for (const Y of H) Y.leaveGuards.forEach(m => {
			k.push(It(m, _, L))
		});
		const Z = W.bind(null, _, L);
		return k.push(Z), li(k).then(() => {
			k = [];
			for (const Y of o.list()) k.push(It(Y, _, L));
			return k.push(Z), li(k)
		}).then(() => {
			k = Es(ae, "beforeRouteUpdate", _, L);
			for (const Y of ae) Y.updateGuards.forEach(m => {
				k.push(It(m, _, L))
			});
			return k.push(Z), li(k)
		}).then(() => {
			k = [];
			for (const Y of _.matched)
				if (Y.beforeEnter && !L.matched.includes(Y))
					if (Array.isArray(Y.beforeEnter))
						for (const m of Y.beforeEnter) k.push(It(m, _, L));
					else k.push(It(Y.beforeEnter, _, L));
			return k.push(Z), li(k)
		}).then(() => (_.matched.forEach(Y => Y.enterCallbacks = {}), k = Es(fe, "beforeRouteEnter", _, L), k.push(Z), li(k))).then(() => {
			k = [];
			for (const Y of r.list()) k.push(It(Y, _, L));
			return k.push(Z), li(k)
		}).catch(Y => kt(Y, 8) ? Y : Promise.reject(Y))
	}

	function le(_, L, k) {
		for (const H of l.list()) H(_, L, k)
	}

	function G(_, L, k, H, ae) {
		const fe = P(_, L);
		if (fe) return fe;
		const Z = L === Tt,
			Y = hi ? history.state : {};
		k && (H || Z ? s.replace(_.fullPath, ue({
			scroll: Z && Y && Y.scroll
		}, ae)) : s.push(_.fullPath, ae)), a.value = _, xt(_, L, k, Z), be()
	}
	let F;

	function J() {
		F || (F = s.listen((_, L, k) => {
			const H = g(_),
				ae = I(H);
			if (ae) {
				A(ue(ae, {
					replace: !0
				}), H).catch(qi);
				return
			}
			c = H;
			const fe = a.value;
			hi && t0(Nr(fe.fullPath, k.delta), is()), N(H, fe).catch(Z => kt(Z, 12) ? Z : kt(Z, 2) ? (A(Z.to, H).then(Y => {
				kt(Y, 20) && !k.delta && k.type === nn.pop && s.go(-1, !1)
			}).catch(qi), Promise.reject()) : (k.delta && s.go(-k.delta, !1), Q(Z, H, fe))).then(Z => {
				Z = Z || G(H, fe, !1), Z && (k.delta ? s.go(-k.delta, !1) : k.type === nn.pop && kt(Z, 20) && s.go(-1, !1)), le(H, fe, Z)
			}).catch(qi)
		}))
	}
	let ve = zi(),
		Ke = zi(),
		he;

	function Q(_, L, k) {
		be(_);
		const H = Ke.list();
		return H.length ? H.forEach(ae => ae(_, L, k)) : console.error(_), Promise.reject(_)
	}

	function ee() {
		return he && a.value !== Tt ? Promise.resolve() : new Promise((_, L) => {
			ve.add([_, L])
		})
	}

	function be(_) {
		return he || (he = !_, J(), ve.list().forEach(([L, k]) => _ ? k(_) : L()), ve.reset()), _
	}

	function xt(_, L, k, H) {
		const {
			scrollBehavior: ae
		} = t;
		if (!hi || !ae) return Promise.resolve();
		const fe = !k && i0(Nr(_.fullPath, 0)) || (H || !k) && history.state && history.state.scroll || null;
		return go().then(() => ae(_, L, fe)).then(Z => Z && e0(Z)).catch(Z => Q(Z, _, L))
	}
	const Ce = _ => s.go(_);
	let Ae;
	const Oe = new Set;
	return {
		currentRoute: a,
		addRoute: f,
		removeRoute: p,
		hasRoute: v,
		getRoutes: y,
		resolve: g,
		options: t,
		push: E,
		replace: R,
		go: Ce,
		back: () => Ce(-1),
		forward: () => Ce(1),
		beforeEach: o.add,
		beforeResolve: r.add,
		afterEach: l.add,
		onError: Ke.add,
		isReady: ee,
		install(_) {
			const L = this;
			_.component("RouterLink", $0), _.component("RouterView", W0), _.config.globalProperties.$router = L, Object.defineProperty(_.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => Dt(a)
			}), hi && !Ae && a.value === Tt && (Ae = !0, E(s.location).catch(ae => {}));
			const k = {};
			for (const ae in Tt) k[ae] = yt(() => a.value[ae]);
			_.provide(zo, L), _.provide(ka, on(k)), _.provide(Xs, a);
			const H = _.unmount;
			Oe.add(_), _.unmount = function() {
				Oe.delete(_), Oe.size < 1 && (c = Tt, F && F(), F = null, a.value = Tt, Ae = !1, he = !1), H()
			}
		}
	}
}

function li(t) {
	return t.reduce((e, i) => e.then(() => i()), Promise.resolve())
}

function G0(t, e) {
	const i = [],
		n = [],
		s = [],
		o = Math.max(e.matched.length, t.matched.length);
	for (let r = 0; r < o; r++) {
		const l = e.matched[r];
		l && (t.matched.find(c => xi(c, l)) ? n.push(l) : i.push(l));
		const a = t.matched[r];
		a && (e.matched.find(c => xi(c, a)) || s.push(a))
	}
	return [i, n, s]
}
var Ei = (t, e) => {
	const i = t.__vccOpts || t;
	for (const [n, s] of e) i[n] = s;
	return i
};
const q0 = Mt({
		props: {
			title: {
				type: String,
				required: !0
			}
		}
	}),
	K0 = ["textContent"],
	Y0 = Ve("div", {
		class: "flex justify-center"
	}, [Ve("div", {
		class: "divide-y border-b-2 border-white mt-3 mb-3 w-40"
	})], -1);

function X0(t, e, i, n, s, o) {
	return $e(), gt("div", null, [Ve("h1", {
		class: "text-6xl text-center text-white",
		textContent: so(t.title)
	}, null, 8, K0), Y0])
}
var J0 = Ei(q0, [
	["render", X0]
]);
const Q0 = Mt({
		props: {
			subtitle: {
				type: String,
				required: !0
			}
		}
	}),
	Z0 = ["textContent"];

function e2(t, e, i, n, s, o) {
	return $e(), gt("h4", {
		class: "text-1 font-light",
		textContent: so(t.subtitle)
	}, null, 8, Z0)
}
var t2 = Ei(Q0, [
	["render", e2]
]);
const i2 = {},
	n2 = {
		class: "flex items-center justify-center"
	},
	s2 = {
		class: "grid grid-cols-2 md:grid-cols-2 place-content-center gap-4 auto-rows-max",
		role: "group"
	};

function o2(t, e) {
	return $e(), gt("div", n2, [Ve("div", s2, [Mo(t.$slots, "default")])])
}
var r2 = Ei(i2, [
	["render", o2]
]);
const l2 = Mt({
		props: {
			text: {
				type: String,
				required: !0
			},
			to: {
				type: String,
				default: "#",
				required: !1
			},
			icon: {
				type: String,
				default: "",
				required: !1
			}
		},
		data() {
			return {
				btn: "flex bg-transparent hover:bg-white items-center font-light hover:text-black py-2 px-4 border border-white hover:border-transparent drop-shadow-lg transition",
				is_url: !1
			}
		},
		mounted() {
			(this.to.indexOf("http") > -1 || this.to.indexOf("mailto") > -1) && (this.is_url = !0)
		}
	}),
	a2 = ["href"];

function c2(t, e, i, n, s, o) {
	const r = $s("vue-feather");
	return $e(), gt("div", null, [Ve("a", {
		href: t.to
	}, [Ve("button", {
		class: Vn(t.btn)
	}, [t.icon !== "" ? ($e(), Zn(r, {
		key: 0,
		type: t.icon,
		class: "mr-3"
	}, null, 8, ["type"])) : Dn("", !0), Mo(t.$slots, "icon", {
		class: "mr-3"
	}), ia(" " + so(t.text), 1)], 2)], 8, a2)])
}
var el = Ei(l2, [
	["render", c2]
]);
const u2 = Mt({
		props: {
			reverse: {
				type: Boolean,
				default: !1
			}
		},
		data() {
			return {
				show: !1
			}
		},
		mounted() {
			setTimeout(() => {
				this.show = !0
			}, 50)
		},
		methods: {
			nextSilde(t) {
				this.show = !1;
				try {
					setTimeout(() => {
						t()
					}, 250)
				} catch (e) {
					console.error(`[Error in nextSilde] ${e}`)
				}
			}
		}
	}),
	d2 = {
		key: 0
	};

function h2(t, e, i, n, s, o) {
	return $e(), gt("div", null, [ge(ts, {
		name: "slide-fade"
	}, {
		default: Ni(() => [t.show ? ($e(), gt("div", d2, [Mo(t.$slots, "default")])) : Dn("", !0)]),
		_: 3
	})])
}
var f2 = Ei(u2, [
	["render", h2]
]);
const Va = t => (Yc("data-v-204477e3"), t = t(), Xc(), t),
	p2 = {
		key: 0,
		class: "center"
	},
	y2 = Va(() => Ve("img", {
		src: "https://media.discordapp.net/attachments/952958641630224434/1088702115901358112/nana.png"
	}, null, -1)),
	m2 = [y2],
	v2 = {
		class: "text-center text-white"
	},
	g2 = Va(() => Ve("div", {
		class: "pt-3"
	}, -1)),
	b2 = Mt({
		setup(t) {
			let e = Sn(!1),
				i = Sn(!1);
			return setTimeout(() => {
				e.value = !0, setTimeout(() => {
					e.value = !1, setTimeout(() => {
						i.value = !0
					}, 450)
				}, 1e3)
			}), (n, s) => ($e(), gt(He, null, [ge(ts, {
				name: "slide-up"
			}, {
				default: Ni(() => [Dt(e) ? ($e(), gt("div", p2, m2)) : Dn("", !0)]),
				_: 1
			}), Dt(i) ? ($e(), Zn(f2, {
				key: 0
			}, {
				default: Ni(() => [Ve("div", v2,[ge(J0, {
					title: "Kirana Linuhara"
				}), ge(t2, {
					subtitle: "Hi, I'm Kirana Linuhara nice to meet you."
				}), ge(r2, {
					class: "mt-3"
				}, {
					default: Ni(() => [ge(el, {
						text: "Discord",
						to: "https://www.discord.gg/zFnX3uWFXs/",
					}), ge(el, {
						text: "Tiktok",
						to: "https://www.tiktok.com/@reiryouri",
					})]),
					_: 1
				}), g2])]),
				_: 1
			})) : Dn("", !0)], 64))
		}
	});
var x2 = Ei(b2, [
	["__scopeId", "data-v-204477e3"]
]);
const w2 = [{
	path: "/",
	name: "Home",
	component: x2
}];
var P2 = U0({
		history: l0(),
		routes: w2
	}),
	_2 = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};

function M2(t) {
	return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var sn = {
	exports: {}
};
(function(t, e) {
	(function(n, s) {
		t.exports = s()
	})(typeof self != "undefined" ? self : _2, function() {
		return function(i) {
			var n = {};

			function s(o) {
				if (n[o]) return n[o].exports;
				var r = n[o] = {
					i: o,
					l: !1,
					exports: {}
				};
				return i[o].call(r.exports, r, r.exports, s), r.l = !0, r.exports
			}
			return s.m = i, s.c = n, s.d = function(o, r, l) {
				s.o(o, r) || Object.defineProperty(o, r, {
					configurable: !1,
					enumerable: !0,
					get: l
				})
			}, s.r = function(o) {
				Object.defineProperty(o, "__esModule", {
					value: !0
				})
			}, s.n = function(o) {
				var r = o && o.__esModule ? function() {
					return o.default
				} : function() {
					return o
				};
				return s.d(r, "a", r), r
			}, s.o = function(o, r) {
				return Object.prototype.hasOwnProperty.call(o, r)
			}, s.p = "", s(s.s = 0)
		}({
			"./dist/icons.json": function(i) {
				i.exports = {
					activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
					airplay: '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',
					"alert-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
					"alert-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
					"alert-triangle": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',
					"align-center": '<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',
					"align-justify": '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',
					"align-left": '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',
					"align-right": '<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',
					anchor: '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',
					aperture: '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',
					archive: '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',
					"arrow-down-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',
					"arrow-down-left": '<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',
					"arrow-down-right": '<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',
					"arrow-down": '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',
					"arrow-left-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',
					"arrow-left": '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',
					"arrow-right-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',
					"arrow-right": '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',
					"arrow-up-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',
					"arrow-up-left": '<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',
					"arrow-up-right": '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',
					"arrow-up": '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',
					"at-sign": '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',
					award: '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',
					"bar-chart-2": '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
					"bar-chart": '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',
					"battery-charging": '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',
					battery: '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',
					"bell-off": '<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
					bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',
					bluetooth: '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',
					bold: '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',
					"book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
					book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
					bookmark: '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',
					box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
					briefcase: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
					calendar: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
					"camera-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',
					camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',
					cast: '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>',
					"check-circle": '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',
					"check-square": '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',
					check: '<polyline points="20 6 9 17 4 12"></polyline>',
					"chevron-down": '<polyline points="6 9 12 15 18 9"></polyline>',
					"chevron-left": '<polyline points="15 18 9 12 15 6"></polyline>',
					"chevron-right": '<polyline points="9 18 15 12 9 6"></polyline>',
					"chevron-up": '<polyline points="18 15 12 9 6 15"></polyline>',
					"chevrons-down": '<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',
					"chevrons-left": '<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',
					"chevrons-right": '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',
					"chevrons-up": '<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',
					chrome: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',
					circle: '<circle cx="12" cy="12" r="10"></circle>',
					clipboard: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',
					clock: '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
					"cloud-drizzle": '<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
					"cloud-lightning": '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',
					"cloud-off": '<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
					"cloud-rain": '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
					"cloud-snow": '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>',
					cloud: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',
					code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
					codepen: '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',
					codesandbox: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
					coffee: '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',
					columns: '<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',
					command: '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',
					compass: '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',
					copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',
					"corner-down-left": '<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',
					"corner-down-right": '<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',
					"corner-left-down": '<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',
					"corner-left-up": '<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',
					"corner-right-down": '<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',
					"corner-right-up": '<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',
					"corner-up-left": '<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',
					"corner-up-right": '<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',
					cpu: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',
					"credit-card": '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',
					crop: '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',
					crosshair: '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',
					database: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
					delete: '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',
					disc: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',
					"divide-circle": '<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>',
					"divide-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>',
					divide: '<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>',
					"dollar-sign": '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',
					"download-cloud": '<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',
					download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',
					dribbble: '<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>',
					droplet: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',
					"edit-2": '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',
					"edit-3": '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',
					edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',
					"external-link": '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',
					"eye-off": '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
					eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',
					facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',
					"fast-forward": '<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',
					feather: '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',
					figma: '<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',
					"file-minus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',
					"file-plus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',
					"file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
					file: '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',
					film: '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',
					filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',
					flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',
					"folder-minus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',
					"folder-plus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',
					folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',
					framer: '<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',
					frown: '<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
					gift: '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',
					"git-branch": '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',
					"git-commit": '<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',
					"git-merge": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',
					"git-pull-request": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',
					github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
					gitlab: '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',
					globe: '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
					grid: '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',
					"hard-drive": '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',
					hash: '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',
					headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',
					heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
					"help-circle": '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',
					hexagon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',
					home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
					image: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',
					inbox: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',
					info: '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',
					instagram: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',
					italic: '<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',
					key: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',
					layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
					layout: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',
					"life-buoy": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',
					"link-2": '<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',
					link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
					linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
					list: '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',
					loader: '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',
					lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
					"log-in": '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',
					"log-out": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',
					mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
					"map-pin": '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
					map: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',
					"maximize-2": '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
					maximize: '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',
					meh: '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
					menu: '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',
					"message-circle": '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
					"message-square": '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
					"mic-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
					mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
					"minimize-2": '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
					minimize: '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',
					"minus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',
					"minus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',
					minus: '<line x1="5" y1="12" x2="19" y2="12"></line>',
					monitor: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
					moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',
					"more-horizontal": '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',
					"more-vertical": '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',
					"mouse-pointer": '<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',
					move: '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',
					music: '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',
					"navigation-2": '<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',
					navigation: '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',
					octagon: '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',
					package: '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
					paperclip: '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',
					"pause-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',
					pause: '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',
					"pen-tool": '<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',
					percent: '<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',
					"phone-call": '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
					"phone-forwarded": '<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
					"phone-incoming": '<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
					"phone-missed": '<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
					"phone-off": '<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',
					"phone-outgoing": '<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
					phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
					"pie-chart": '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',
					"play-circle": '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',
					play: '<polygon points="5 3 19 12 5 21 5 3"></polygon>',
					"plus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
					"plus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
					plus: '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',
					pocket: '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',
					power: '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',
					printer: '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',
					radio: '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',
					"refresh-ccw": '<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',
					"refresh-cw": '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',
					repeat: '<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',
					rewind: '<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',
					"rotate-ccw": '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',
					"rotate-cw": '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',
					rss: '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',
					save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',
					scissors: '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',
					search: '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',
					send: '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',
					server: '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',
					settings: '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
					"share-2": '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',
					share: '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',
					"shield-off": '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
					shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
					"shopping-bag": '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',
					"shopping-cart": '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',
					shuffle: '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',
					sidebar: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',
					"skip-back": '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',
					"skip-forward": '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',
					slack: '<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',
					slash: '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',
					sliders: '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',
					smartphone: '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
					smile: '<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
					speaker: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>',
					square: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',
					star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
					"stop-circle": '<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',
					sun: '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',
					sunrise: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',
					sunset: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',
					table: '<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>',
					tablet: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
					tag: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>',
					target: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',
					terminal: '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
					thermometer: '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',
					"thumbs-down": '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',
					"thumbs-up": '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',
					"toggle-left": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',
					"toggle-right": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',
					tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',
					"trash-2": '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',
					trash: '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',
					trello: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',
					"trending-down": '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',
					"trending-up": '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
					triangle: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',
					truck: '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',
					tv: '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',
					twitch: '<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>',
					twitter: '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',
					type: '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',
					umbrella: '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',
					underline: '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',
					unlock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',
					"upload-cloud": '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',
					upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',
					"user-check": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',
					"user-minus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',
					"user-plus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',
					"user-x": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',
					user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
					users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
					"video-off": '<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
					video: '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',
					voicemail: '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',
					"volume-1": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
					"volume-2": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
					"volume-x": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',
					volume: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',
					watch: '<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',
					"wifi-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
					wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
					wind: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',
					"x-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
					"x-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
					"x-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',
					x: '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',
					youtube: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',
					"zap-off": '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',
					zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
					"zoom-in": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
					"zoom-out": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>'
				}
			},
			"./node_modules/classnames/dedupe.js": function(i, n, s) {
				var o, r;
				/*!
				  Copyright (c) 2016 Jed Watson.
				  Licensed under the MIT License (MIT), see
				  http://jedwatson.github.io/classnames
				*/
				(function() {
					var l = function() {
						function a() {}
						a.prototype = Object.create(null);

						function c(g, x) {
							for (var P = x.length, E = 0; E < P; ++E) y(g, x[E])
						}
						var u = {}.hasOwnProperty;

						function d(g, x) {
							g[x] = !0
						}

						function h(g, x) {
							for (var P in x) u.call(x, P) && (g[P] = !!x[P])
						}
						var f = /\s+/;

						function p(g, x) {
							for (var P = x.split(f), E = P.length, R = 0; R < E; ++R) g[P[R]] = !0
						}

						function y(g, x) {
							if (!!x) {
								var P = typeof x;
								P === "string" ? p(g, x) : Array.isArray(x) ? c(g, x) : P === "object" ? h(g, x) : P === "number" && d(g, x)
							}
						}

						function v() {
							for (var g = arguments.length, x = Array(g), P = 0; P < g; P++) x[P] = arguments[P];
							var E = new a;
							c(E, x);
							var R = [];
							for (var I in E) E[I] && R.push(I);
							return R.join(" ")
						}
						return v
					}();
					typeof i != "undefined" && i.exports ? i.exports = l : (o = [], r = function() {
						return l
					}.apply(n, o), r !== void 0 && (i.exports = r))
				})()
			},
			"./node_modules/core-js/es/array/from.js": function(i, n, s) {
				s("./node_modules/core-js/modules/es.string.iterator.js"), s("./node_modules/core-js/modules/es.array.from.js");
				var o = s("./node_modules/core-js/internals/path.js");
				i.exports = o.Array.from
			},
			"./node_modules/core-js/internals/a-function.js": function(i, n) {
				i.exports = function(s) {
					if (typeof s != "function") throw TypeError(String(s) + " is not a function");
					return s
				}
			},
			"./node_modules/core-js/internals/an-object.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/is-object.js");
				i.exports = function(r) {
					if (!o(r)) throw TypeError(String(r) + " is not an object");
					return r
				}
			},
			"./node_modules/core-js/internals/array-from.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/bind-context.js"),
					r = s("./node_modules/core-js/internals/to-object.js"),
					l = s("./node_modules/core-js/internals/call-with-safe-iteration-closing.js"),
					a = s("./node_modules/core-js/internals/is-array-iterator-method.js"),
					c = s("./node_modules/core-js/internals/to-length.js"),
					u = s("./node_modules/core-js/internals/create-property.js"),
					d = s("./node_modules/core-js/internals/get-iterator-method.js");
				i.exports = function(f) {
					var p = r(f),
						y = typeof this == "function" ? this : Array,
						v = arguments.length,
						g = v > 1 ? arguments[1] : void 0,
						x = g !== void 0,
						P = 0,
						E = d(p),
						R, I, A, W;
					if (x && (g = o(g, v > 2 ? arguments[2] : void 0, 2)), E != null && !(y == Array && a(E)))
						for (W = E.call(p), I = new y; !(A = W.next()).done; P++) u(I, P, x ? l(W, g, [A.value, P], !0) : A.value);
					else
						for (R = c(p.length), I = new y(R); R > P; P++) u(I, P, x ? g(p[P], P) : p[P]);
					return I.length = P, I
				}
			},
			"./node_modules/core-js/internals/array-includes.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/to-indexed-object.js"),
					r = s("./node_modules/core-js/internals/to-length.js"),
					l = s("./node_modules/core-js/internals/to-absolute-index.js");
				i.exports = function(a) {
					return function(c, u, d) {
						var h = o(c),
							f = r(h.length),
							p = l(d, f),
							y;
						if (a && u != u) {
							for (; f > p;)
								if (y = h[p++], y != y) return !0
						} else
							for (; f > p; p++)
								if ((a || p in h) && h[p] === u) return a || p || 0;
						return !a && -1
					}
				}
			},
			"./node_modules/core-js/internals/bind-context.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/a-function.js");
				i.exports = function(r, l, a) {
					if (o(r), l === void 0) return r;
					switch (a) {
						case 0:
							return function() {
								return r.call(l)
							};
						case 1:
							return function(c) {
								return r.call(l, c)
							};
						case 2:
							return function(c, u) {
								return r.call(l, c, u)
							};
						case 3:
							return function(c, u, d) {
								return r.call(l, c, u, d)
							}
					}
					return function() {
						return r.apply(l, arguments)
					}
				}
			},
			"./node_modules/core-js/internals/call-with-safe-iteration-closing.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/an-object.js");
				i.exports = function(r, l, a, c) {
					try {
						return c ? l(o(a)[0], a[1]) : l(a)
					} catch (d) {
						var u = r.return;
						throw u !== void 0 && o(u.call(r)), d
					}
				}
			},
			"./node_modules/core-js/internals/check-correctness-of-iteration.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/well-known-symbol.js"),
					r = o("iterator"),
					l = !1;
				try {
					var a = 0,
						c = {
							next: function() {
								return {
									done: !!a++
								}
							},
							return: function() {
								l = !0
							}
						};
					c[r] = function() {
						return this
					}, Array.from(c, function() {
						throw 2
					})
				} catch {}
				i.exports = function(u, d) {
					if (!d && !l) return !1;
					var h = !1;
					try {
						var f = {};
						f[r] = function() {
							return {
								next: function() {
									return {
										done: h = !0
									}
								}
							}
						}, u(f)
					} catch {}
					return h
				}
			},
			"./node_modules/core-js/internals/classof-raw.js": function(i, n) {
				var s = {}.toString;
				i.exports = function(o) {
					return s.call(o).slice(8, -1)
				}
			},
			"./node_modules/core-js/internals/classof.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/classof-raw.js"),
					r = s("./node_modules/core-js/internals/well-known-symbol.js"),
					l = r("toStringTag"),
					a = o(function() {
						return arguments
					}()) == "Arguments",
					c = function(u, d) {
						try {
							return u[d]
						} catch {}
					};
				i.exports = function(u) {
					var d, h, f;
					return u === void 0 ? "Undefined" : u === null ? "Null" : typeof(h = c(d = Object(u), l)) == "string" ? h : a ? o(d) : (f = o(d)) == "Object" && typeof d.callee == "function" ? "Arguments" : f
				}
			},
			"./node_modules/core-js/internals/copy-constructor-properties.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/has.js"),
					r = s("./node_modules/core-js/internals/own-keys.js"),
					l = s("./node_modules/core-js/internals/object-get-own-property-descriptor.js"),
					a = s("./node_modules/core-js/internals/object-define-property.js");
				i.exports = function(c, u) {
					for (var d = r(u), h = a.f, f = l.f, p = 0; p < d.length; p++) {
						var y = d[p];
						o(c, y) || h(c, y, f(u, y))
					}
				}
			},
			"./node_modules/core-js/internals/correct-prototype-getter.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/fails.js");
				i.exports = !o(function() {
					function r() {}
					return r.prototype.constructor = null, Object.getPrototypeOf(new r) !== r.prototype
				})
			},
			"./node_modules/core-js/internals/create-iterator-constructor.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/iterators-core.js").IteratorPrototype,
					r = s("./node_modules/core-js/internals/object-create.js"),
					l = s("./node_modules/core-js/internals/create-property-descriptor.js"),
					a = s("./node_modules/core-js/internals/set-to-string-tag.js"),
					c = s("./node_modules/core-js/internals/iterators.js"),
					u = function() {
						return this
					};
				i.exports = function(d, h, f) {
					var p = h + " Iterator";
					return d.prototype = r(o, {
						next: l(1, f)
					}), a(d, p, !1, !0), c[p] = u, d
				}
			},
			"./node_modules/core-js/internals/create-property-descriptor.js": function(i, n) {
				i.exports = function(s, o) {
					return {
						enumerable: !(s & 1),
						configurable: !(s & 2),
						writable: !(s & 4),
						value: o
					}
				}
			},
			"./node_modules/core-js/internals/create-property.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/to-primitive.js"),
					r = s("./node_modules/core-js/internals/object-define-property.js"),
					l = s("./node_modules/core-js/internals/create-property-descriptor.js");
				i.exports = function(a, c, u) {
					var d = o(c);
					d in a ? r.f(a, d, l(0, u)) : a[d] = u
				}
			},
			"./node_modules/core-js/internals/define-iterator.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/export.js"),
					r = s("./node_modules/core-js/internals/create-iterator-constructor.js"),
					l = s("./node_modules/core-js/internals/object-get-prototype-of.js"),
					a = s("./node_modules/core-js/internals/object-set-prototype-of.js"),
					c = s("./node_modules/core-js/internals/set-to-string-tag.js"),
					u = s("./node_modules/core-js/internals/hide.js"),
					d = s("./node_modules/core-js/internals/redefine.js"),
					h = s("./node_modules/core-js/internals/well-known-symbol.js"),
					f = s("./node_modules/core-js/internals/is-pure.js"),
					p = s("./node_modules/core-js/internals/iterators.js"),
					y = s("./node_modules/core-js/internals/iterators-core.js"),
					v = y.IteratorPrototype,
					g = y.BUGGY_SAFARI_ITERATORS,
					x = h("iterator"),
					P = "keys",
					E = "values",
					R = "entries",
					I = function() {
						return this
					};
				i.exports = function(A, W, N, le, G, F, J) {
					r(N, W, le);
					var ve = function(Ye) {
							if (Ye === G && be) return be;
							if (!g && Ye in Q) return Q[Ye];
							switch (Ye) {
								case P:
									return function() {
										return new N(this, Ye)
									};
								case E:
									return function() {
										return new N(this, Ye)
									};
								case R:
									return function() {
										return new N(this, Ye)
									}
							}
							return function() {
								return new N(this)
							}
						},
						Ke = W + " Iterator",
						he = !1,
						Q = A.prototype,
						ee = Q[x] || Q["@@iterator"] || G && Q[G],
						be = !g && ee || ve(G),
						xt = W == "Array" && Q.entries || ee,
						Ce, Ae, Oe;
					if (xt && (Ce = l(xt.call(new A)), v !== Object.prototype && Ce.next && (!f && l(Ce) !== v && (a ? a(Ce, v) : typeof Ce[x] != "function" && u(Ce, x, I)), c(Ce, Ke, !0, !0), f && (p[Ke] = I))), G == E && ee && ee.name !== E && (he = !0, be = function() {
							return ee.call(this)
						}), (!f || J) && Q[x] !== be && u(Q, x, be), p[W] = be, G)
						if (Ae = {
								values: ve(E),
								keys: F ? be : ve(P),
								entries: ve(R)
							}, J)
							for (Oe in Ae)(g || he || !(Oe in Q)) && d(Q, Oe, Ae[Oe]);
						else o({
							target: W,
							proto: !0,
							forced: g || he
						}, Ae);
					return Ae
				}
			},
			"./node_modules/core-js/internals/descriptors.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/fails.js");
				i.exports = !o(function() {
					return Object.defineProperty({}, "a", {
						get: function() {
							return 7
						}
					}).a != 7
				})
			},
			"./node_modules/core-js/internals/document-create-element.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/global.js"),
					r = s("./node_modules/core-js/internals/is-object.js"),
					l = o.document,
					a = r(l) && r(l.createElement);
				i.exports = function(c) {
					return a ? l.createElement(c) : {}
				}
			},
			"./node_modules/core-js/internals/enum-bug-keys.js": function(i, n) {
				i.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
			},
			"./node_modules/core-js/internals/export.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/global.js"),
					r = s("./node_modules/core-js/internals/object-get-own-property-descriptor.js").f,
					l = s("./node_modules/core-js/internals/hide.js"),
					a = s("./node_modules/core-js/internals/redefine.js"),
					c = s("./node_modules/core-js/internals/set-global.js"),
					u = s("./node_modules/core-js/internals/copy-constructor-properties.js"),
					d = s("./node_modules/core-js/internals/is-forced.js");
				i.exports = function(h, f) {
					var p = h.target,
						y = h.global,
						v = h.stat,
						g, x, P, E, R, I;
					if (y ? x = o : v ? x = o[p] || c(p, {}) : x = (o[p] || {}).prototype, x)
						for (P in f) {
							if (R = f[P], h.noTargetGet ? (I = r(x, P), E = I && I.value) : E = x[P], g = d(y ? P : p + (v ? "." : "#") + P, h.forced), !g && E !== void 0) {
								if (typeof R == typeof E) continue;
								u(R, E)
							}(h.sham || E && E.sham) && l(R, "sham", !0), a(x, P, R, h)
						}
				}
			},
			"./node_modules/core-js/internals/fails.js": function(i, n) {
				i.exports = function(s) {
					try {
						return !!s()
					} catch {
						return !0
					}
				}
			},
			"./node_modules/core-js/internals/function-to-string.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/shared.js");
				i.exports = o("native-function-to-string", Function.toString)
			},
			"./node_modules/core-js/internals/get-iterator-method.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/classof.js"),
					r = s("./node_modules/core-js/internals/iterators.js"),
					l = s("./node_modules/core-js/internals/well-known-symbol.js"),
					a = l("iterator");
				i.exports = function(c) {
					if (c != null) return c[a] || c["@@iterator"] || r[o(c)]
				}
			},
			"./node_modules/core-js/internals/global.js": function(i, n, s) {
				(function(o) {
					var r = "object",
						l = function(a) {
							return a && a.Math == Math && a
						};
					i.exports = l(typeof globalThis == r && globalThis) || l(typeof window == r && window) || l(typeof self == r && self) || l(typeof o == r && o) || Function("return this")()
				}).call(this, s("./node_modules/webpack/buildin/global.js"))
			},
			"./node_modules/core-js/internals/has.js": function(i, n) {
				var s = {}.hasOwnProperty;
				i.exports = function(o, r) {
					return s.call(o, r)
				}
			},
			"./node_modules/core-js/internals/hidden-keys.js": function(i, n) {
				i.exports = {}
			},
			"./node_modules/core-js/internals/hide.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/descriptors.js"),
					r = s("./node_modules/core-js/internals/object-define-property.js"),
					l = s("./node_modules/core-js/internals/create-property-descriptor.js");
				i.exports = o ? function(a, c, u) {
					return r.f(a, c, l(1, u))
				} : function(a, c, u) {
					return a[c] = u, a
				}
			},
			"./node_modules/core-js/internals/html.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/global.js"),
					r = o.document;
				i.exports = r && r.documentElement
			},
			"./node_modules/core-js/internals/ie8-dom-define.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/descriptors.js"),
					r = s("./node_modules/core-js/internals/fails.js"),
					l = s("./node_modules/core-js/internals/document-create-element.js");
				i.exports = !o && !r(function() {
					return Object.defineProperty(l("div"), "a", {
						get: function() {
							return 7
						}
					}).a != 7
				})
			},
			"./node_modules/core-js/internals/indexed-object.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/fails.js"),
					r = s("./node_modules/core-js/internals/classof-raw.js"),
					l = "".split;
				i.exports = o(function() {
					return !Object("z").propertyIsEnumerable(0)
				}) ? function(a) {
					return r(a) == "String" ? l.call(a, "") : Object(a)
				} : Object
			},
			"./node_modules/core-js/internals/internal-state.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/native-weak-map.js"),
					r = s("./node_modules/core-js/internals/global.js"),
					l = s("./node_modules/core-js/internals/is-object.js"),
					a = s("./node_modules/core-js/internals/hide.js"),
					c = s("./node_modules/core-js/internals/has.js"),
					u = s("./node_modules/core-js/internals/shared-key.js"),
					d = s("./node_modules/core-js/internals/hidden-keys.js"),
					h = r.WeakMap,
					f, p, y, v = function(A) {
						return y(A) ? p(A) : f(A, {})
					},
					g = function(A) {
						return function(W) {
							var N;
							if (!l(W) || (N = p(W)).type !== A) throw TypeError("Incompatible receiver, " + A + " required");
							return N
						}
					};
				if (o) {
					var x = new h,
						P = x.get,
						E = x.has,
						R = x.set;
					f = function(A, W) {
						return R.call(x, A, W), W
					}, p = function(A) {
						return P.call(x, A) || {}
					}, y = function(A) {
						return E.call(x, A)
					}
				} else {
					var I = u("state");
					d[I] = !0, f = function(A, W) {
						return a(A, I, W), W
					}, p = function(A) {
						return c(A, I) ? A[I] : {}
					}, y = function(A) {
						return c(A, I)
					}
				}
				i.exports = {
					set: f,
					get: p,
					has: y,
					enforce: v,
					getterFor: g
				}
			},
			"./node_modules/core-js/internals/is-array-iterator-method.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/well-known-symbol.js"),
					r = s("./node_modules/core-js/internals/iterators.js"),
					l = o("iterator"),
					a = Array.prototype;
				i.exports = function(c) {
					return c !== void 0 && (r.Array === c || a[l] === c)
				}
			},
			"./node_modules/core-js/internals/is-forced.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/fails.js"),
					r = /#|\.prototype\./,
					l = function(h, f) {
						var p = c[a(h)];
						return p == d ? !0 : p == u ? !1 : typeof f == "function" ? o(f) : !!f
					},
					a = l.normalize = function(h) {
						return String(h).replace(r, ".").toLowerCase()
					},
					c = l.data = {},
					u = l.NATIVE = "N",
					d = l.POLYFILL = "P";
				i.exports = l
			},
			"./node_modules/core-js/internals/is-object.js": function(i, n) {
				i.exports = function(s) {
					return typeof s == "object" ? s !== null : typeof s == "function"
				}
			},
			"./node_modules/core-js/internals/is-pure.js": function(i, n) {
				i.exports = !1
			},
			"./node_modules/core-js/internals/iterators-core.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/object-get-prototype-of.js"),
					r = s("./node_modules/core-js/internals/hide.js"),
					l = s("./node_modules/core-js/internals/has.js"),
					a = s("./node_modules/core-js/internals/well-known-symbol.js"),
					c = s("./node_modules/core-js/internals/is-pure.js"),
					u = a("iterator"),
					d = !1,
					h = function() {
						return this
					},
					f, p, y;
				[].keys && (y = [].keys(), "next" in y ? (p = o(o(y)), p !== Object.prototype && (f = p)) : d = !0), f == null && (f = {}), !c && !l(f, u) && r(f, u, h), i.exports = {
					IteratorPrototype: f,
					BUGGY_SAFARI_ITERATORS: d
				}
			},
			"./node_modules/core-js/internals/iterators.js": function(i, n) {
				i.exports = {}
			},
			"./node_modules/core-js/internals/native-symbol.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/fails.js");
				i.exports = !!Object.getOwnPropertySymbols && !o(function() {
					return !String(Symbol())
				})
			},
			"./node_modules/core-js/internals/native-weak-map.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/global.js"),
					r = s("./node_modules/core-js/internals/function-to-string.js"),
					l = o.WeakMap;
				i.exports = typeof l == "function" && /native code/.test(r.call(l))
			},
			"./node_modules/core-js/internals/object-create.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/an-object.js"),
					r = s("./node_modules/core-js/internals/object-define-properties.js"),
					l = s("./node_modules/core-js/internals/enum-bug-keys.js"),
					a = s("./node_modules/core-js/internals/hidden-keys.js"),
					c = s("./node_modules/core-js/internals/html.js"),
					u = s("./node_modules/core-js/internals/document-create-element.js"),
					d = s("./node_modules/core-js/internals/shared-key.js"),
					h = d("IE_PROTO"),
					f = "prototype",
					p = function() {},
					y = function() {
						var v = u("iframe"),
							g = l.length,
							x = "<",
							P = "script",
							E = ">",
							R = "java" + P + ":",
							I;
						for (v.style.display = "none", c.appendChild(v), v.src = String(R), I = v.contentWindow.document, I.open(), I.write(x + P + E + "document.F=Object" + x + "/" + P + E), I.close(), y = I.F; g--;) delete y[f][l[g]];
						return y()
					};
				i.exports = Object.create || function(g, x) {
					var P;
					return g !== null ? (p[f] = o(g), P = new p, p[f] = null, P[h] = g) : P = y(), x === void 0 ? P : r(P, x)
				}, a[h] = !0
			},
			"./node_modules/core-js/internals/object-define-properties.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/descriptors.js"),
					r = s("./node_modules/core-js/internals/object-define-property.js"),
					l = s("./node_modules/core-js/internals/an-object.js"),
					a = s("./node_modules/core-js/internals/object-keys.js");
				i.exports = o ? Object.defineProperties : function(u, d) {
					l(u);
					for (var h = a(d), f = h.length, p = 0, y; f > p;) r.f(u, y = h[p++], d[y]);
					return u
				}
			},
			"./node_modules/core-js/internals/object-define-property.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/descriptors.js"),
					r = s("./node_modules/core-js/internals/ie8-dom-define.js"),
					l = s("./node_modules/core-js/internals/an-object.js"),
					a = s("./node_modules/core-js/internals/to-primitive.js"),
					c = Object.defineProperty;
				n.f = o ? c : function(d, h, f) {
					if (l(d), h = a(h, !0), l(f), r) try {
						return c(d, h, f)
					} catch {}
					if ("get" in f || "set" in f) throw TypeError("Accessors not supported");
					return "value" in f && (d[h] = f.value), d
				}
			},
			"./node_modules/core-js/internals/object-get-own-property-descriptor.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/descriptors.js"),
					r = s("./node_modules/core-js/internals/object-property-is-enumerable.js"),
					l = s("./node_modules/core-js/internals/create-property-descriptor.js"),
					a = s("./node_modules/core-js/internals/to-indexed-object.js"),
					c = s("./node_modules/core-js/internals/to-primitive.js"),
					u = s("./node_modules/core-js/internals/has.js"),
					d = s("./node_modules/core-js/internals/ie8-dom-define.js"),
					h = Object.getOwnPropertyDescriptor;
				n.f = o ? h : function(p, y) {
					if (p = a(p), y = c(y, !0), d) try {
						return h(p, y)
					} catch {}
					if (u(p, y)) return l(!r.f.call(p, y), p[y])
				}
			},
			"./node_modules/core-js/internals/object-get-own-property-names.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/object-keys-internal.js"),
					r = s("./node_modules/core-js/internals/enum-bug-keys.js"),
					l = r.concat("length", "prototype");
				n.f = Object.getOwnPropertyNames || function(c) {
					return o(c, l)
				}
			},
			"./node_modules/core-js/internals/object-get-own-property-symbols.js": function(i, n) {
				n.f = Object.getOwnPropertySymbols
			},
			"./node_modules/core-js/internals/object-get-prototype-of.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/has.js"),
					r = s("./node_modules/core-js/internals/to-object.js"),
					l = s("./node_modules/core-js/internals/shared-key.js"),
					a = s("./node_modules/core-js/internals/correct-prototype-getter.js"),
					c = l("IE_PROTO"),
					u = Object.prototype;
				i.exports = a ? Object.getPrototypeOf : function(d) {
					return d = r(d), o(d, c) ? d[c] : typeof d.constructor == "function" && d instanceof d.constructor ? d.constructor.prototype : d instanceof Object ? u : null
				}
			},
			"./node_modules/core-js/internals/object-keys-internal.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/has.js"),
					r = s("./node_modules/core-js/internals/to-indexed-object.js"),
					l = s("./node_modules/core-js/internals/array-includes.js"),
					a = s("./node_modules/core-js/internals/hidden-keys.js"),
					c = l(!1);
				i.exports = function(u, d) {
					var h = r(u),
						f = 0,
						p = [],
						y;
					for (y in h) !o(a, y) && o(h, y) && p.push(y);
					for (; d.length > f;) o(h, y = d[f++]) && (~c(p, y) || p.push(y));
					return p
				}
			},
			"./node_modules/core-js/internals/object-keys.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/object-keys-internal.js"),
					r = s("./node_modules/core-js/internals/enum-bug-keys.js");
				i.exports = Object.keys || function(a) {
					return o(a, r)
				}
			},
			"./node_modules/core-js/internals/object-property-is-enumerable.js": function(i, n, s) {
				var o = {}.propertyIsEnumerable,
					r = Object.getOwnPropertyDescriptor,
					l = r && !o.call({
						1: 2
					}, 1);
				n.f = l ? function(c) {
					var u = r(this, c);
					return !!u && u.enumerable
				} : o
			},
			"./node_modules/core-js/internals/object-set-prototype-of.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/validate-set-prototype-of-arguments.js");
				i.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
					var r = !1,
						l = {},
						a;
					try {
						a = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, a.call(l, []), r = l instanceof Array
					} catch {}
					return function(u, d) {
						return o(u, d), r ? a.call(u, d) : u.__proto__ = d, u
					}
				}() : void 0)
			},
			"./node_modules/core-js/internals/own-keys.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/global.js"),
					r = s("./node_modules/core-js/internals/object-get-own-property-names.js"),
					l = s("./node_modules/core-js/internals/object-get-own-property-symbols.js"),
					a = s("./node_modules/core-js/internals/an-object.js"),
					c = o.Reflect;
				i.exports = c && c.ownKeys || function(d) {
					var h = r.f(a(d)),
						f = l.f;
					return f ? h.concat(f(d)) : h
				}
			},
			"./node_modules/core-js/internals/path.js": function(i, n, s) {
				i.exports = s("./node_modules/core-js/internals/global.js")
			},
			"./node_modules/core-js/internals/redefine.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/global.js"),
					r = s("./node_modules/core-js/internals/shared.js"),
					l = s("./node_modules/core-js/internals/hide.js"),
					a = s("./node_modules/core-js/internals/has.js"),
					c = s("./node_modules/core-js/internals/set-global.js"),
					u = s("./node_modules/core-js/internals/function-to-string.js"),
					d = s("./node_modules/core-js/internals/internal-state.js"),
					h = d.get,
					f = d.enforce,
					p = String(u).split("toString");
				r("inspectSource", function(y) {
					return u.call(y)
				}), (i.exports = function(y, v, g, x) {
					var P = x ? !!x.unsafe : !1,
						E = x ? !!x.enumerable : !1,
						R = x ? !!x.noTargetGet : !1;
					if (typeof g == "function" && (typeof v == "string" && !a(g, "name") && l(g, "name", v), f(g).source = p.join(typeof v == "string" ? v : "")), y === o) {
						E ? y[v] = g : c(v, g);
						return
					} else P ? !R && y[v] && (E = !0) : delete y[v];
					E ? y[v] = g : l(y, v, g)
				})(Function.prototype, "toString", function() {
					return typeof this == "function" && h(this).source || u.call(this)
				})
			},
			"./node_modules/core-js/internals/require-object-coercible.js": function(i, n) {
				i.exports = function(s) {
					if (s == null) throw TypeError("Can't call method on " + s);
					return s
				}
			},
			"./node_modules/core-js/internals/set-global.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/global.js"),
					r = s("./node_modules/core-js/internals/hide.js");
				i.exports = function(l, a) {
					try {
						r(o, l, a)
					} catch {
						o[l] = a
					}
					return a
				}
			},
			"./node_modules/core-js/internals/set-to-string-tag.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/object-define-property.js").f,
					r = s("./node_modules/core-js/internals/has.js"),
					l = s("./node_modules/core-js/internals/well-known-symbol.js"),
					a = l("toStringTag");
				i.exports = function(c, u, d) {
					c && !r(c = d ? c : c.prototype, a) && o(c, a, {
						configurable: !0,
						value: u
					})
				}
			},
			"./node_modules/core-js/internals/shared-key.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/shared.js"),
					r = s("./node_modules/core-js/internals/uid.js"),
					l = o("keys");
				i.exports = function(a) {
					return l[a] || (l[a] = r(a))
				}
			},
			"./node_modules/core-js/internals/shared.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/global.js"),
					r = s("./node_modules/core-js/internals/set-global.js"),
					l = s("./node_modules/core-js/internals/is-pure.js"),
					a = "__core-js_shared__",
					c = o[a] || r(a, {});
				(i.exports = function(u, d) {
					return c[u] || (c[u] = d !== void 0 ? d : {})
				})("versions", []).push({
					version: "3.1.3",
					mode: l ? "pure" : "global",
					copyright: "\xA9 2019 Denis Pushkarev (zloirock.ru)"
				})
			},
			"./node_modules/core-js/internals/string-at.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/to-integer.js"),
					r = s("./node_modules/core-js/internals/require-object-coercible.js");
				i.exports = function(l, a, c) {
					var u = String(r(l)),
						d = o(a),
						h = u.length,
						f, p;
					return d < 0 || d >= h ? c ? "" : void 0 : (f = u.charCodeAt(d), f < 55296 || f > 56319 || d + 1 === h || (p = u.charCodeAt(d + 1)) < 56320 || p > 57343 ? c ? u.charAt(d) : f : c ? u.slice(d, d + 2) : (f - 55296 << 10) + (p - 56320) + 65536)
				}
			},
			"./node_modules/core-js/internals/to-absolute-index.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/to-integer.js"),
					r = Math.max,
					l = Math.min;
				i.exports = function(a, c) {
					var u = o(a);
					return u < 0 ? r(u + c, 0) : l(u, c)
				}
			},
			"./node_modules/core-js/internals/to-indexed-object.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/indexed-object.js"),
					r = s("./node_modules/core-js/internals/require-object-coercible.js");
				i.exports = function(l) {
					return o(r(l))
				}
			},
			"./node_modules/core-js/internals/to-integer.js": function(i, n) {
				var s = Math.ceil,
					o = Math.floor;
				i.exports = function(r) {
					return isNaN(r = +r) ? 0 : (r > 0 ? o : s)(r)
				}
			},
			"./node_modules/core-js/internals/to-length.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/to-integer.js"),
					r = Math.min;
				i.exports = function(l) {
					return l > 0 ? r(o(l), 9007199254740991) : 0
				}
			},
			"./node_modules/core-js/internals/to-object.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/require-object-coercible.js");
				i.exports = function(r) {
					return Object(o(r))
				}
			},
			"./node_modules/core-js/internals/to-primitive.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/is-object.js");
				i.exports = function(r, l) {
					if (!o(r)) return r;
					var a, c;
					if (l && typeof(a = r.toString) == "function" && !o(c = a.call(r)) || typeof(a = r.valueOf) == "function" && !o(c = a.call(r)) || !l && typeof(a = r.toString) == "function" && !o(c = a.call(r))) return c;
					throw TypeError("Can't convert object to primitive value")
				}
			},
			"./node_modules/core-js/internals/uid.js": function(i, n) {
				var s = 0,
					o = Math.random();
				i.exports = function(r) {
					return "Symbol(".concat(r === void 0 ? "" : r, ")_", (++s + o).toString(36))
				}
			},
			"./node_modules/core-js/internals/validate-set-prototype-of-arguments.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/is-object.js"),
					r = s("./node_modules/core-js/internals/an-object.js");
				i.exports = function(l, a) {
					if (r(l), !o(a) && a !== null) throw TypeError("Can't set " + String(a) + " as a prototype")
				}
			},
			"./node_modules/core-js/internals/well-known-symbol.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/global.js"),
					r = s("./node_modules/core-js/internals/shared.js"),
					l = s("./node_modules/core-js/internals/uid.js"),
					a = s("./node_modules/core-js/internals/native-symbol.js"),
					c = o.Symbol,
					u = r("wks");
				i.exports = function(d) {
					return u[d] || (u[d] = a && c[d] || (a ? c : l)("Symbol." + d))
				}
			},
			"./node_modules/core-js/modules/es.array.from.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/export.js"),
					r = s("./node_modules/core-js/internals/array-from.js"),
					l = s("./node_modules/core-js/internals/check-correctness-of-iteration.js"),
					a = !l(function(c) {
						Array.from(c)
					});
				o({
					target: "Array",
					stat: !0,
					forced: a
				}, {
					from: r
				})
			},
			"./node_modules/core-js/modules/es.string.iterator.js": function(i, n, s) {
				var o = s("./node_modules/core-js/internals/string-at.js"),
					r = s("./node_modules/core-js/internals/internal-state.js"),
					l = s("./node_modules/core-js/internals/define-iterator.js"),
					a = "String Iterator",
					c = r.set,
					u = r.getterFor(a);
				l(String, "String", function(d) {
					c(this, {
						type: a,
						string: String(d),
						index: 0
					})
				}, function() {
					var h = u(this),
						f = h.string,
						p = h.index,
						y;
					return p >= f.length ? {
						value: void 0,
						done: !0
					} : (y = o(f, p, !0), h.index += y.length, {
						value: y,
						done: !1
					})
				})
			},
			"./node_modules/webpack/buildin/global.js": function(i, n) {
				var s;
				s = function() {
					return this
				}();
				try {
					s = s || Function("return this")() || (0, eval)("this")
				} catch {
					typeof window == "object" && (s = window)
				}
				i.exports = s
			},
			"./src/default-attrs.json": function(i) {
				i.exports = {
					xmlns: "http://www.w3.org/2000/svg",
					width: 24,
					height: 24,
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": 2,
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				}
			},
			"./src/icon.js": function(i, n, s) {
				Object.defineProperty(n, "__esModule", {
					value: !0
				});
				var o = Object.assign || function(y) {
						for (var v = 1; v < arguments.length; v++) {
							var g = arguments[v];
							for (var x in g) Object.prototype.hasOwnProperty.call(g, x) && (y[x] = g[x])
						}
						return y
					},
					r = function() {
						function y(v, g) {
							for (var x = 0; x < g.length; x++) {
								var P = g[x];
								P.enumerable = P.enumerable || !1, P.configurable = !0, "value" in P && (P.writable = !0), Object.defineProperty(v, P.key, P)
							}
						}
						return function(v, g, x) {
							return g && y(v.prototype, g), x && y(v, x), v
						}
					}(),
					l = s("./node_modules/classnames/dedupe.js"),
					a = d(l),
					c = s("./src/default-attrs.json"),
					u = d(c);

				function d(y) {
					return y && y.__esModule ? y : {
						default: y
					}
				}

				function h(y, v) {
					if (!(y instanceof v)) throw new TypeError("Cannot call a class as a function")
				}
				var f = function() {
					function y(v, g) {
						var x = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
						h(this, y), this.name = v, this.contents = g, this.tags = x, this.attrs = o({}, u.default, {
							class: "feather feather-" + v
						})
					}
					return r(y, [{
						key: "toSvg",
						value: function() {
							var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
								x = o({}, this.attrs, g, {
									class: (0, a.default)(this.attrs.class, g.class)
								});
							return "<svg " + p(x) + ">" + this.contents + "</svg>"
						}
					}, {
						key: "toString",
						value: function() {
							return this.contents
						}
					}]), y
				}();

				function p(y) {
					return Object.keys(y).map(function(v) {
						return v + '="' + y[v] + '"'
					}).join(" ")
				}
				n.default = f
			},
			"./src/icons.js": function(i, n, s) {
				Object.defineProperty(n, "__esModule", {
					value: !0
				});
				var o = s("./src/icon.js"),
					r = d(o),
					l = s("./dist/icons.json"),
					a = d(l),
					c = s("./src/tags.json"),
					u = d(c);

				function d(h) {
					return h && h.__esModule ? h : {
						default: h
					}
				}
				n.default = Object.keys(a.default).map(function(h) {
					return new r.default(h, a.default[h], u.default[h])
				}).reduce(function(h, f) {
					return h[f.name] = f, h
				}, {})
			},
			"./src/index.js": function(i, n, s) {
				var o = s("./src/icons.js"),
					r = d(o),
					l = s("./src/to-svg.js"),
					a = d(l),
					c = s("./src/replace.js"),
					u = d(c);

				function d(h) {
					return h && h.__esModule ? h : {
						default: h
					}
				}
				i.exports = {
					icons: r.default,
					toSvg: a.default,
					replace: u.default
				}
			},
			"./src/replace.js": function(i, n, s) {
				Object.defineProperty(n, "__esModule", {
					value: !0
				});
				var o = Object.assign || function(p) {
						for (var y = 1; y < arguments.length; y++) {
							var v = arguments[y];
							for (var g in v) Object.prototype.hasOwnProperty.call(v, g) && (p[g] = v[g])
						}
						return p
					},
					r = s("./node_modules/classnames/dedupe.js"),
					l = u(r),
					a = s("./src/icons.js"),
					c = u(a);

				function u(p) {
					return p && p.__esModule ? p : {
						default: p
					}
				}

				function d() {
					var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
					if (typeof document == "undefined") throw new Error("`feather.replace()` only works in a browser environment.");
					var y = document.querySelectorAll("[data-feather]");
					Array.from(y).forEach(function(v) {
						return h(v, p)
					})
				}

				function h(p) {
					var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
						v = f(p),
						g = v["data-feather"];
					delete v["data-feather"];
					var x = c.default[g].toSvg(o({}, y, v, {
							class: (0, l.default)(y.class, v.class)
						})),
						P = new DOMParser().parseFromString(x, "image/svg+xml"),
						E = P.querySelector("svg");
					p.parentNode.replaceChild(E, p)
				}

				function f(p) {
					return Array.from(p.attributes).reduce(function(y, v) {
						return y[v.name] = v.value, y
					}, {})
				}
				n.default = d
			},
			"./src/tags.json": function(i) {
				i.exports = {
					activity: ["pulse", "health", "action", "motion"],
					airplay: ["stream", "cast", "mirroring"],
					"alert-circle": ["warning", "alert", "danger"],
					"alert-octagon": ["warning", "alert", "danger"],
					"alert-triangle": ["warning", "alert", "danger"],
					"align-center": ["text alignment", "center"],
					"align-justify": ["text alignment", "justified"],
					"align-left": ["text alignment", "left"],
					"align-right": ["text alignment", "right"],
					anchor: [],
					archive: ["index", "box"],
					"at-sign": ["mention", "at", "email", "message"],
					award: ["achievement", "badge"],
					aperture: ["camera", "photo"],
					"bar-chart": ["statistics", "diagram", "graph"],
					"bar-chart-2": ["statistics", "diagram", "graph"],
					battery: ["power", "electricity"],
					"battery-charging": ["power", "electricity"],
					bell: ["alarm", "notification", "sound"],
					"bell-off": ["alarm", "notification", "silent"],
					bluetooth: ["wireless"],
					"book-open": ["read", "library"],
					book: ["read", "dictionary", "booklet", "magazine", "library"],
					bookmark: ["read", "clip", "marker", "tag"],
					box: ["cube"],
					briefcase: ["work", "bag", "baggage", "folder"],
					calendar: ["date"],
					camera: ["photo"],
					cast: ["chromecast", "airplay"],
					"chevron-down": ["expand"],
					"chevron-up": ["collapse"],
					circle: ["off", "zero", "record"],
					clipboard: ["copy"],
					clock: ["time", "watch", "alarm"],
					"cloud-drizzle": ["weather", "shower"],
					"cloud-lightning": ["weather", "bolt"],
					"cloud-rain": ["weather"],
					"cloud-snow": ["weather", "blizzard"],
					cloud: ["weather"],
					codepen: ["logo"],
					codesandbox: ["logo"],
					code: ["source", "programming"],
					coffee: ["drink", "cup", "mug", "tea", "cafe", "hot", "beverage"],
					columns: ["layout"],
					command: ["keyboard", "cmd", "terminal", "prompt"],
					compass: ["navigation", "safari", "travel", "direction"],
					copy: ["clone", "duplicate"],
					"corner-down-left": ["arrow", "return"],
					"corner-down-right": ["arrow"],
					"corner-left-down": ["arrow"],
					"corner-left-up": ["arrow"],
					"corner-right-down": ["arrow"],
					"corner-right-up": ["arrow"],
					"corner-up-left": ["arrow"],
					"corner-up-right": ["arrow"],
					cpu: ["processor", "technology"],
					"credit-card": ["purchase", "payment", "cc"],
					crop: ["photo", "image"],
					crosshair: ["aim", "target"],
					database: ["storage", "memory"],
					delete: ["remove"],
					disc: ["album", "cd", "dvd", "music"],
					"dollar-sign": ["currency", "money", "payment"],
					droplet: ["water"],
					edit: ["pencil", "change"],
					"edit-2": ["pencil", "change"],
					"edit-3": ["pencil", "change"],
					eye: ["view", "watch"],
					"eye-off": ["view", "watch", "hide", "hidden"],
					"external-link": ["outbound"],
					facebook: ["logo", "social"],
					"fast-forward": ["music"],
					figma: ["logo", "design", "tool"],
					"file-minus": ["delete", "remove", "erase"],
					"file-plus": ["add", "create", "new"],
					"file-text": ["data", "txt", "pdf"],
					film: ["movie", "video"],
					filter: ["funnel", "hopper"],
					flag: ["report"],
					"folder-minus": ["directory"],
					"folder-plus": ["directory"],
					folder: ["directory"],
					framer: ["logo", "design", "tool"],
					frown: ["emoji", "face", "bad", "sad", "emotion"],
					gift: ["present", "box", "birthday", "party"],
					"git-branch": ["code", "version control"],
					"git-commit": ["code", "version control"],
					"git-merge": ["code", "version control"],
					"git-pull-request": ["code", "version control"],
					github: ["logo", "version control"],
					gitlab: ["logo", "version control"],
					globe: ["world", "browser", "language", "translate"],
					"hard-drive": ["computer", "server", "memory", "data"],
					hash: ["hashtag", "number", "pound"],
					headphones: ["music", "audio", "sound"],
					heart: ["like", "love", "emotion"],
					"help-circle": ["question mark"],
					hexagon: ["shape", "node.js", "logo"],
					home: ["house", "living"],
					image: ["picture"],
					inbox: ["email"],
					instagram: ["logo", "camera"],
					key: ["password", "login", "authentication", "secure"],
					layers: ["stack"],
					layout: ["window", "webpage"],
					"life-bouy": ["help", "life ring", "support"],
					link: ["chain", "url"],
					"link-2": ["chain", "url"],
					linkedin: ["logo", "social media"],
					list: ["options"],
					lock: ["security", "password", "secure"],
					"log-in": ["sign in", "arrow", "enter"],
					"log-out": ["sign out", "arrow", "exit"],
					mail: ["email", "message"],
					"map-pin": ["location", "navigation", "travel", "marker"],
					map: ["location", "navigation", "travel"],
					maximize: ["fullscreen"],
					"maximize-2": ["fullscreen", "arrows", "expand"],
					meh: ["emoji", "face", "neutral", "emotion"],
					menu: ["bars", "navigation", "hamburger"],
					"message-circle": ["comment", "chat"],
					"message-square": ["comment", "chat"],
					"mic-off": ["record", "sound", "mute"],
					mic: ["record", "sound", "listen"],
					minimize: ["exit fullscreen", "close"],
					"minimize-2": ["exit fullscreen", "arrows", "close"],
					minus: ["subtract"],
					monitor: ["tv", "screen", "display"],
					moon: ["dark", "night"],
					"more-horizontal": ["ellipsis"],
					"more-vertical": ["ellipsis"],
					"mouse-pointer": ["arrow", "cursor"],
					move: ["arrows"],
					music: ["note"],
					navigation: ["location", "travel"],
					"navigation-2": ["location", "travel"],
					octagon: ["stop"],
					package: ["box", "container"],
					paperclip: ["attachment"],
					pause: ["music", "stop"],
					"pause-circle": ["music", "audio", "stop"],
					"pen-tool": ["vector", "drawing"],
					percent: ["discount"],
					"phone-call": ["ring"],
					"phone-forwarded": ["call"],
					"phone-incoming": ["call"],
					"phone-missed": ["call"],
					"phone-off": ["call", "mute"],
					"phone-outgoing": ["call"],
					phone: ["call"],
					play: ["music", "start"],
					"pie-chart": ["statistics", "diagram"],
					"play-circle": ["music", "start"],
					plus: ["add", "new"],
					"plus-circle": ["add", "new"],
					"plus-square": ["add", "new"],
					pocket: ["logo", "save"],
					power: ["on", "off"],
					printer: ["fax", "office", "device"],
					radio: ["signal"],
					"refresh-cw": ["synchronise", "arrows"],
					"refresh-ccw": ["arrows"],
					repeat: ["loop", "arrows"],
					rewind: ["music"],
					"rotate-ccw": ["arrow"],
					"rotate-cw": ["arrow"],
					rss: ["feed", "subscribe"],
					save: ["floppy disk"],
					scissors: ["cut"],
					search: ["find", "magnifier", "magnifying glass"],
					send: ["message", "mail", "email", "paper airplane", "paper aeroplane"],
					settings: ["cog", "edit", "gear", "preferences"],
					"share-2": ["network", "connections"],
					shield: ["security", "secure"],
					"shield-off": ["security", "insecure"],
					"shopping-bag": ["ecommerce", "cart", "purchase", "store"],
					"shopping-cart": ["ecommerce", "cart", "purchase", "store"],
					shuffle: ["music"],
					"skip-back": ["music"],
					"skip-forward": ["music"],
					slack: ["logo"],
					slash: ["ban", "no"],
					sliders: ["settings", "controls"],
					smartphone: ["cellphone", "device"],
					smile: ["emoji", "face", "happy", "good", "emotion"],
					speaker: ["audio", "music"],
					star: ["bookmark", "favorite", "like"],
					"stop-circle": ["media", "music"],
					sun: ["brightness", "weather", "light"],
					sunrise: ["weather", "time", "morning", "day"],
					sunset: ["weather", "time", "evening", "night"],
					tablet: ["device"],
					tag: ["label"],
					target: ["logo", "bullseye"],
					terminal: ["code", "command line", "prompt"],
					thermometer: ["temperature", "celsius", "fahrenheit", "weather"],
					"thumbs-down": ["dislike", "bad", "emotion"],
					"thumbs-up": ["like", "good", "emotion"],
					"toggle-left": ["on", "off", "switch"],
					"toggle-right": ["on", "off", "switch"],
					tool: ["settings", "spanner"],
					trash: ["garbage", "delete", "remove", "bin"],
					"trash-2": ["garbage", "delete", "remove", "bin"],
					triangle: ["delta"],
					truck: ["delivery", "van", "shipping", "transport", "lorry"],
					tv: ["television", "stream"],
					twitch: ["logo"],
					twitter: ["logo", "social"],
					type: ["text"],
					umbrella: ["rain", "weather"],
					unlock: ["security"],
					"user-check": ["followed", "subscribed"],
					"user-minus": ["delete", "remove", "unfollow", "unsubscribe"],
					"user-plus": ["new", "add", "create", "follow", "subscribe"],
					"user-x": ["delete", "remove", "unfollow", "unsubscribe", "unavailable"],
					user: ["person", "account"],
					users: ["group"],
					"video-off": ["camera", "movie", "film"],
					video: ["camera", "movie", "film"],
					voicemail: ["phone"],
					volume: ["music", "sound", "mute"],
					"volume-1": ["music", "sound"],
					"volume-2": ["music", "sound"],
					"volume-x": ["music", "sound", "mute"],
					watch: ["clock", "time"],
					"wifi-off": ["disabled"],
					wifi: ["connection", "signal", "wireless"],
					wind: ["weather", "air"],
					"x-circle": ["cancel", "close", "delete", "remove", "times", "clear"],
					"x-octagon": ["delete", "stop", "alert", "warning", "times", "clear"],
					"x-square": ["cancel", "close", "delete", "remove", "times", "clear"],
					x: ["cancel", "close", "delete", "remove", "times", "clear"],
					youtube: ["logo", "video", "play"],
					"zap-off": ["flash", "camera", "lightning"],
					zap: ["flash", "camera", "lightning"],
					"zoom-in": ["magnifying glass"],
					"zoom-out": ["magnifying glass"]
				}
			},
			"./src/to-svg.js": function(i, n, s) {
				Object.defineProperty(n, "__esModule", {
					value: !0
				});
				var o = s("./src/icons.js"),
					r = l(o);

				function l(c) {
					return c && c.__esModule ? c : {
						default: c
					}
				}

				function a(c) {
					var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
					if (console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."), !c) throw new Error("The required `key` (icon name) parameter is missing.");
					if (!r.default[c]) throw new Error("No icon matching '" + c + "'. See the complete list of icons at https://feathericons.com");
					return r.default[c].toSvg(u)
				}
				n.default = a
			},
			0: function(i, n, s) {
				s("./node_modules/core-js/es/array/from.js"), i.exports = s("./src/index.js")
			}
		})
	})
})(sn);
var j2 = M2(sn.exports),
	E2 = Xa({
		__proto__: null,
		default: j2
	}, [sn.exports]); /*! vue-feather v2.0.0 | (c) 2018-present Chen Fengyuan | MIT */
var tl = Mt({
	name: "VueFeather",
	props: {
		animation: {
			type: String,
			default: void 0
		},
		animationSpeed: {
			type: String,
			default: void 0
		},
		fill: {
			type: String,
			default: "none"
		},
		size: {
			type: [Number, String],
			default: 24
		},
		stroke: {
			type: String,
			default: "currentColor"
		},
		strokeLinecap: {
			type: String,
			default: "round"
		},
		strokeLinejoin: {
			type: String,
			default: "round"
		},
		strokeWidth: {
			type: [Number, String],
			default: 2
		},
		tag: {
			type: String,
			default: "i"
		},
		type: {
			type: String,
			default: "feather",
			validator(t) {
				if (!E2) throw new Error("The Feather icons is required.");
				if (!sn.exports.icons[t]) throw new Error(`"${t}" is not an available icon type.`);
				return !0
			}
		}
	},
	computed: {
		isRemSize() {
			return typeof this.size == "string" && this.size.endsWith("rem")
		}
	},
	render() {
		const {
			animation: t,
			animationSpeed: e,
			isRemSize: i,
			size: n,
			type: s
		} = this, o = sn.exports.icons[s];
		return en(this.tag, os(ss({}, this.$attrs), {
			"data-name": s,
			"data-tags": o.tags,
			"data-type": s,
			class: {
				"vue-feather": !0, [`vue-feather--${s}`]: s, [`vue-feather--${t}`]: t, [`vue-feather--${e}`]: e
			},
			style: i ? {
				height: n,
				width: n
			} : void 0
		}), [en("svg", os(ss({}, o.attrs), {
			fill: this.fill,
			height: i ? void 0 : n,
			stroke: this.stroke,
			"stroke-linecap": this.strokeLinecap,
			"stroke-linejoin": this.strokeLinejoin,
			"stroke-width": this.strokeWidth,
			width: i ? void 0 : n,
			class: [o.attrs.class, "vue-feather__content"],
			innerHTML: o.contents
		}))])
	}
});

function C2(t, e) {
	e === void 0 && (e = {});
	var i = e.insertAt;
	if (!(!t || typeof document == "undefined")) {
		var n = document.head || document.getElementsByTagName("head")[0],
			s = document.createElement("style");
		s.type = "text/css", i === "top" && n.firstChild ? n.insertBefore(s, n.firstChild) : n.appendChild(s), s.styleSheet ? s.styleSheet.cssText = t : s.appendChild(document.createTextNode(t))
	}
}
var O2 = "@keyframes vue-feather--spin{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.vue-feather{display:inline-block;overflow:hidden}.vue-feather--spin{animation:vue-feather--spin 2s linear infinite}.vue-feather--pulse{animation:vue-feather--spin 2s steps(8) infinite}.vue-feather--slow{animation-duration:3s}.vue-feather--fast{animation-duration:1s}.vue-feather__content{display:block;height:inherit;width:inherit}";
C2(O2);
/**
 * vue-class-component v8.0.0-rc.1
 * (c) 2015-present Evan You
 * @license MIT
 */
function il(t, e) {
	if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function nl(t, e) {
	for (var i = 0; i < e.length; i++) {
		var n = e[i];
		n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
	}
}

function S2(t, e, i) {
	return e && nl(t.prototype, e), i && nl(t, i), t
}

function T2(t, e, i) {
	return e in t ? Object.defineProperty(t, e, {
		value: i,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : t[e] = i, t
}

function sl(t, e) {
	var i = Object.keys(t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(t);
		e && (n = n.filter(function(s) {
			return Object.getOwnPropertyDescriptor(t, s).enumerable
		})), i.push.apply(i, n)
	}
	return i
}

function Cs(t) {
	for (var e = 1; e < arguments.length; e++) {
		var i = arguments[e] != null ? arguments[e] : {};
		e % 2 ? sl(Object(i), !0).forEach(function(n) {
			T2(t, n, i[n])
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : sl(Object(i)).forEach(function(n) {
			Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(i, n))
		})
	}
	return t
}

function k2(t, e) {
	if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
	t.prototype = Object.create(e && e.prototype, {
		constructor: {
			value: t,
			writable: !0,
			configurable: !0
		}
	}), e && Zs(t, e)
}

function Bn(t) {
	return Bn = Object.setPrototypeOf ? Object.getPrototypeOf : function(i) {
		return i.__proto__ || Object.getPrototypeOf(i)
	}, Bn(t)
}

function Zs(t, e) {
	return Zs = Object.setPrototypeOf || function(n, s) {
		return n.__proto__ = s, n
	}, Zs(t, e)
}

function A2() {
	if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
	if (typeof Proxy == "function") return !0;
	try {
		return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
	} catch {
		return !1
	}
}

function z2(t) {
	if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	return t
}

function R2(t, e) {
	return e && (typeof e == "object" || typeof e == "function") ? e : z2(t)
}

function I2(t) {
	var e = A2();
	return function() {
		var n = Bn(t),
			s;
		if (e) {
			var o = Bn(this).constructor;
			s = Reflect.construct(n, arguments, o)
		} else s = n.apply(this, arguments);
		return R2(this, s)
	}
}

function F2(t) {
	return D2(t) || L2(t) || H2(t) || $2()
}

function D2(t) {
	if (Array.isArray(t)) return eo(t)
}

function L2(t) {
	if (typeof Symbol != "undefined" && Symbol.iterator in Object(t)) return Array.from(t)
}

function H2(t, e) {
	if (!!t) {
		if (typeof t == "string") return eo(t, e);
		var i = Object.prototype.toString.call(t).slice(8, -1);
		if (i === "Object" && t.constructor && (i = t.constructor.name), i === "Map" || i === "Set") return Array.from(t);
		if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return eo(t, e)
	}
}

function eo(t, e) {
	(e == null || e > t.length) && (e = t.length);
	for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
	return n
}

function $2() {
	throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function yn(t, e, i) {
	Object.defineProperty(t, e, {
		get: i,
		enumerable: !1,
		configurable: !0
	})
}

function B2(t, e, i) {
	Object.defineProperty(t, e, {
		get: function() {
			return i[e].value
		},
		set: function(s) {
			i[e].value = s
		},
		enumerable: !0,
		configurable: !0
	})
}

function V2(t) {
	var e = Object.getPrototypeOf(t.prototype);
	if (!!e) return e.constructor
}

function mn(t, e) {
	return t.hasOwnProperty(e) ? t[e] : void 0
}
var Na = function() {
	function t(e, i) {
		var n = this;
		il(this, t), yn(this, "$props", function() {
			return e
		}), yn(this, "$attrs", function() {
			return i.attrs
		}), yn(this, "$slots", function() {
			return i.slots
		}), yn(this, "$emit", function() {
			return i.emit
		}), Object.keys(e).forEach(function(s) {
			Object.defineProperty(n, s, {
				enumerable: !1,
				configurable: !0,
				writable: !0,
				value: e[s]
			})
		})
	}
	return S2(t, null, [{
		key: "registerHooks",
		value: function(i) {
			var n;
			(n = this.__h).push.apply(n, F2(i))
		}
	}, {
		key: "with",
		value: function(i) {
			var n = new i,
				s = {};
			Object.keys(n).forEach(function(r) {
				var l = n[r];
				s[r] = l != null ? l : null
			});
			var o = function(r) {
				k2(a, r);
				var l = I2(a);

				function a() {
					return il(this, a), l.apply(this, arguments)
				}
				return a
			}(this);
			return o.__b = {
				props: s
			}, o
		}
	}, {
		key: "__vccOpts",
		get: function() {
			if (this === Wa) return {};
			var i = this,
				n = mn(i, "__c");
			if (n) return n;
			var s = Cs({}, mn(i, "__o"));
			i.__c = s;
			var o = V2(i);
			o && (s.extends = o.__vccOpts);
			var r = mn(i, "__b");
			r && (s.mixins = s.mixins || [], s.mixins.unshift(r)), s.methods = Cs({}, s.methods), s.computed = Cs({}, s.computed);
			var l = i.prototype;
			Object.getOwnPropertyNames(l).forEach(function(u) {
				if (u !== "constructor") {
					if (i.__h.indexOf(u) > -1) {
						s[u] = l[u];
						return
					}
					var d = Object.getOwnPropertyDescriptor(l, u);
					if (typeof d.value == "function") {
						s.methods[u] = d.value;
						return
					}
					if (d.get || d.set) {
						s.computed[u] = {
							get: d.get,
							set: d.set
						};
						return
					}
				}
			}), s.setup = function(u, d) {
				var h, f = new i(u, d),
					p = Object.keys(f),
					y = {},
					v = null;
				return p.forEach(function(g) {
					f[g] === void 0 || f[g] && f[g].__s || (y[g] = Sn(f[g]), B2(f, g, y))
				}), p.forEach(function(g) {
					if (f[g] && f[g].__s) {
						var x = f[g].__s();
						x instanceof Promise ? (v || (v = Promise.resolve(y)), v = v.then(function() {
							return x.then(function(P) {
								return y[g] = Tn(P), y
							})
						})) : y[g] = Tn(x)
					}
				}), (h = v) !== null && h !== void 0 ? h : y
			};
			var a = mn(i, "__d");
			a && a.forEach(function(u) {
				return u(s)
			});
			var c = ["render", "ssrRender", "__file", "__cssModules", "__scopeId", "__hmrId"];
			return c.forEach(function(u) {
				i[u] && (s[u] = i[u])
			}), s
		}
	}]), t
}();
Na.__h = ["data", "beforeCreate", "created", "beforeMount", "mounted", "beforeUnmount", "unmounted", "beforeUpdate", "updated", "activated", "deactivated", "render", "errorCaptured", "serverPrefetch"];
var Wa = Na;

function N2(t) {
	return function(e) {
		return e.__o = t, e
	}
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function W2(t, e, i, n) {
	var s = arguments.length,
		o = s < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, i) : n,
		r;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(t, e, i, n);
	else
		for (var l = t.length - 1; l >= 0; l--)(r = t[l]) && (o = (s < 3 ? r(o) : s > 3 ? r(e, i, o) : r(e, i)) || o);
	return s > 3 && o && Object.defineProperty(e, i, o), o
}

function U2(t, e, i, n) {
	function s(o) {
		return o instanceof i ? o : new i(function(r) {
			r(o)
		})
	}
	return new(i || (i = Promise))(function(o, r) {
		function l(u) {
			try {
				c(n.next(u))
			} catch (d) {
				r(d)
			}
		}

		function a(u) {
			try {
				c(n.throw(u))
			} catch (d) {
				r(d)
			}
		}

		function c(u) {
			u.done ? o(u.value) : s(u.value).then(l, a)
		}
		c((n = n.apply(t, e || [])).next())
	})
}
let to = class extends Wa {
	mounted() {
		go(() => U2(this, void 0, void 0, function*() {
			var e;
			if (!this.id) throw new Error("Prop 'id' is required!");
			Hi.init(), this.particlesInit && (yield this.particlesInit(Hi));
			const i = s => {
					this.container = s, this.particlesLoaded && s && this.particlesLoaded(s)
				},
				n = yield this.url ? Hi.loadJSON(this.id, this.url) : Hi.load(this.id, (e = this.options) !== null && e !== void 0 ? e : {});
			i(n)
		}))
	}
	beforeDestroy() {
		this.container && this.container.destroy()
	}
};
to = W2([N2({
	props: {
		id: {
			type: String,
			required: !0
		},
		options: {
			type: Object
		},
		url: {
			type: String
		},
		particlesLoaded: {
			type: Function
		},
		particlesInit: {
			type: Function
		}
	}
})], to);
var Io = to;
const G2 = ["id"];

function q2(t, e, i, n, s, o) {
	return $e(), gt("div", {
		id: t.id
	}, null, 8, G2)
}
Io.render = q2;
Io.__file = "src/Particles/Particles.vue";
const K2 = (t, e) => {
		t.component("Particles", Io)
	},
	ns = Pd(By);
ns.use(P2);
ns.use(K2);
ns.component(tl.name, tl);
ns.mount("#app");

function sendMessage() {
	// Get the message input element and its value
	var messageInput = document.getElementById("message-input");
	var messageText = messageInput.value;
  
	// Create a new message element with the message text
	var messageElement = document.createElement("div");
	messageElement.innerHTML = messageText;
  
	// Append the message element to the chat box section
	var chatBox = document.getElementById("chat-box");
	chatBox.appendChild(messageElement);
  
	// Clear the message input field
	messageInput.value = "";
  }