webpackJsonp(
  [1],
  {
    "1B3o": function(t, e) {},
    "6nYa": function(t, e, n) {
      "use strict";
      var r = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", [
            n("h1", [t._v("Home")]),
            t._v("\n  Hello\n  "),
            t.$root.user
              ? n("p", [t._v("Hi " + t._s(t.$root.user.name))])
              : t._e()
          ]);
        },
        a = [],
        s = { render: r, staticRenderFns: a };
      e.a = s;
    },
    "Arp+": function(t, e, n) {
      "use strict";
      var r = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            [
              t.error
                ? n(
                    "b-notification",
                    { attrs: { type: "is-danger", "has-icon": "" } },
                    [t._v("\n    " + t._s(t.error.message) + "\n  ")]
                  )
                : t._e(),
              t._v(" "),
              n(
                "form",
                {
                  on: {
                    submit: function(e) {
                      e.preventDefault(), t.signup(e);
                    }
                  }
                },
                [
                  n(
                    "b-field",
                    { attrs: { label: "Username" } },
                    [
                      n("b-input", {
                        attrs: { required: "", maxlength: "30" },
                        model: {
                          value: t.username,
                          callback: function(e) {
                            t.username = e;
                          },
                          expression: "username"
                        }
                      })
                    ],
                    1
                  ),
                  t._v(" "),
                  n(
                    "b-field",
                    { attrs: { label: "Name" } },
                    [
                      n("b-input", {
                        attrs: { required: "", maxlength: "30" },
                        model: {
                          value: t.name,
                          callback: function(e) {
                            t.name = e;
                          },
                          expression: "name"
                        }
                      })
                    ],
                    1
                  ),
                  t._v(" "),
                  n(
                    "b-field",
                    { attrs: { label: "Email" } },
                    [
                      n("b-input", {
                        attrs: { required: "", maxlength: "30" },
                        model: {
                          value: t.email,
                          callback: function(e) {
                            t.email = e;
                          },
                          expression: "email"
                        }
                      })
                    ],
                    1
                  ),
                  t._v(" "),
                  n(
                    "b-field",
                    { attrs: { label: "Password" } },
                    [
                      n("b-input", {
                        attrs: {
                          type: "password",
                          required: "",
                          "password-reveal": ""
                        },
                        model: {
                          value: t.password,
                          callback: function(e) {
                            t.password = e;
                          },
                          expression: "password"
                        }
                      })
                    ],
                    1
                  ),
                  t._v(" "),
                  n(
                    "button",
                    {
                      staticClass: "button is-primary",
                      on: {
                        click: function(e) {
                          e.preventDefault(), t.signup(e);
                        }
                      }
                    },
                    [t._v("Signup")]
                  )
                ],
                1
              )
            ],
            1
          );
        },
        a = [],
        s = { render: r, staticRenderFns: a };
      e.a = s;
    },
    Eaaq: function(t, e, n) {
      t.exports = n.p + "static/img/img1.8a0c184.jpg";
    },
    Hb6Q: function(t, e, n) {
      "use strict";
      var r = n("ufRF"),
        a = n("VU/8"),
        s = a(null, r.a, !1, null, null, null);
      e.a = s.exports;
    },
    M93x: function(t, e, n) {
      "use strict";
      var r = n("xJD8"),
        a = n("MTSB"),
        s = n("VU/8"),
        o = s(r.a, a.a, !1, null, null, null);
      e.a = o.exports;
    },
    MTSB: function(t, e, n) {
      "use strict";
      var r = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { attrs: { id: "app" } }, [
            n("nav", { staticClass: "navbar is-transparent" }, [
              n("div", { staticClass: "navbar-brand" }, [
                t._m(0),
                t._v(" "),
                n("div", { staticClass: "navbar-menu" }, [
                  n(
                    "div",
                    { staticClass: "navbar-start" },
                    [
                      t.$root.user
                        ? t._e()
                        : n(
                            "router-link",
                            { staticClass: "navbar-item ", attrs: { to: "/" } },
                            [t._v("\n            Home\n          ")]
                          )
                    ],
                    1
                  )
                ]),
                t._v(" "),
                t._m(1)
              ]),
              t._v(" "),
              n(
                "div",
                {
                  staticClass: "navbar-menu",
                  attrs: { id: "navMenuTransparentExample" }
                },
                [
                  n(
                    "div",
                    { staticClass: "navbar-end" },
                    [
                      n(
                        "div",
                        {
                          staticClass: "navbar-item has-dropdown is-hoverable"
                        },
                        [
                          n("div", { staticClass: "navbar-link" }, [
                            t._v("\n\n            Explore\n\n          ")
                          ]),
                          t._v(" "),
                          n(
                            "div",
                            {
                              staticClass: "navbar-dropdown is-boxed",
                              attrs: { id: "exploreDropdown" }
                            },
                            [
                              n(
                                "p",
                                [
                                  t.$root.user
                                    ? t._e()
                                    : n(
                                        "router-link",
                                        {
                                          staticClass: "navbar-item",
                                          attrs: { to: "/bd" }
                                        },
                                        [n("strong", [t._v("BD")])]
                                      ),
                                  t._v(" "),
                                  t.$root.user
                                    ? t._e()
                                    : n(
                                        "router-link",
                                        {
                                          staticClass: "navbar-item",
                                          attrs: { to: "/Artist" }
                                        },
                                        [n("strong", [t._v("Author")])]
                                      ),
                                  t._v(" "),
                                  t.$root.user
                                    ? t._e()
                                    : n(
                                        "router-link",
                                        {
                                          staticClass: "navbar-item",
                                          attrs: { to: "/Editors" }
                                        },
                                        [n("strong", [t._v("Editors")])]
                                      )
                                ],
                                1
                              )
                            ]
                          )
                        ]
                      ),
                      t._v(" "),
                      t.$root.user
                        ? t._e()
                        : n(
                            "router-link",
                            {
                              staticClass: "navbar-item ",
                              attrs: { to: "/login" }
                            },
                            [t._v("\n          Login\n        ")]
                          ),
                      t._v(" "),
                      t.$root.user
                        ? t._e()
                        : n(
                            "router-link",
                            {
                              staticClass: "navbar-item ",
                              attrs: { to: "/signup" }
                            },
                            [t._v("\n          Signup\n        ")]
                          ),
                      t._v(" "),
                      t.$root.user
                        ? n(
                            "a",
                            {
                              staticClass: "navbar-item",
                              attrs: { href: "#" },
                              on: {
                                click: function(e) {
                                  e.preventDefault(), t.logout(e);
                                }
                              }
                            },
                            [t._v("\n          Logout\n        ")]
                          )
                        : t._e()
                    ],
                    1
                  )
                ]
              )
            ]),
            t._v(" "),
            n("section", { staticClass: "section" }, [
              n("div", { staticClass: "container" }, [n("router-view")], 1)
            ])
          ]);
        },
        a = [
          function() {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r(
              "a",
              { staticClass: "navbar-item", attrs: { href: "/" } },
              [r("img", { attrs: { src: n("Eaaq") } })]
            );
          },
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "div",
              {
                staticClass: "navbar-burger burger",
                attrs: { "data-target": "navMenuTransparentExample" }
              },
              [n("span"), t._v(" "), n("span"), t._v(" "), n("span")]
            );
          }
        ],
        s = { render: r, staticRenderFns: a };
      e.a = s;
    },
    NHnr: function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n("/5sW"),
        a = n("M93x"),
        s = n("YaEn"),
        o = n("Pfph"),
        i = n("MMSg"),
        u = n.n(i),
        c = n("doPI");
      n.n(c);
      r.a.use(u.a),
        (r.a.config.productionTip = !1),
        new r.a({
          el: "#app",
          router: s.a,
          render: function(t) {
            return t(a.a);
          },
          data: { user: null },
          created: function() {
            Object(o.a)(this.$root);
          }
        });
    },
    Pfph: function(t, e, n) {
      "use strict";
      function r(t) {
        var e = t.token,
          n = t.user;
        (v.a.defaults.headers.common.Authorization = "Bearer " + e),
          localStorage.setItem("token", e),
          localStorage.setItem("user", c()(n));
      }
      function a(t) {
        var e = localStorage.getItem("token"),
          n = localStorage.getItem("user");
        if (e && n) {
          var a = JSON.parse(n);
          r({ token: e, user: a }), (t.user = a);
        }
      }
      function s(t, e, n) {
        return p.post("/login", { username: t, password: e }).then(function(t) {
          return r(t.data), (n.user = t.data.user), t.data;
        });
      }
      function o(t) {
        localStorage.removeItem("token"),
          (t.user = null),
          delete v.a.defaults.headers.common.Authorization;
      }
      function i(t) {
        return p.post("/signup", t).then(function(t) {
          return t.data;
        });
      }
      (e.a = a), (e.b = s), (e.c = o), (e.d = i);
      var u = n("mvHQ"),
        c = n.n(u),
        l = n("mtWM"),
        v = n.n(l),
        p = v.a.create({ baseURL: "/api" });
    },
    QRL1: function(t, e, n) {
      "use strict";
      var r = n("Pfph");
      e.a = {
        data: function() {
          return {
            username: "",
            password: "",
            name: "",
            email: "",
            error: null
          };
        },
        methods: {
          signup: function() {
            var t = this;
            (this.error = null),
              Object(r.d)({
                username: this.username,
                name: this.name,
                email: this.email,
                password: this.password
              })
                .then(function() {
                  t.$router.push("/login");
                })
                .catch(function(e) {
                  (t.error = e.response.data.error),
                    console.error("Signup err", e);
                });
          }
        }
      };
    },
    Skm6: function(t, e, n) {
      "use strict";
      var r = function() {
          var t = this,
            e = t.$createElement;
          return (t._self._c || e)("h1", [t._v("this is testing of BD page")]);
        },
        a = [],
        s = { render: r, staticRenderFns: a };
      e.a = s;
    },
    YaEn: function(t, e, n) {
      "use strict";
      var r = n("/5sW"),
        a = n("/ocq"),
        s = n("wD/n"),
        o = n("fpQY"),
        i = n("tYer"),
        u = n("yCzM"),
        c = n("Hb6Q"),
        l = n("nEr+"),
        v = n("Pfph");
      r.a.use(a.a);
      var p = new a.a({
        mode: "history",
        routes: [
          { path: "/", component: s.a },
          { path: "/login", component: o.a, meta: { requiresNonAuth: !0 } },
          { path: "/signup", component: i.a, meta: { requiresNonAuth: !0 } },
          { path: "/BD", component: u.a, meta: { requiresNonAuth: !0 } },
          { path: "/Artist", component: c.a, meta: { requiresNonAuth: !0 } },
          { path: "/Editors", component: l.a, meta: { requiresNonAuth: !0 } }
        ]
      });
      p.beforeEach(function(t, e, n) {
        if (
          t.meta.requiresAuth &&
          (Object(v.a)(p.app.$root), !p.app.$root.user)
        )
          return n({
            path: "/login",
            query: { redirect: encodeURIComponent(t.fullPath) }
          });
        n();
      }),
        p.beforeEach(function(t, e, n) {
          if (
            t.meta.requiresNonAuth &&
            (Object(v.a)(p.app.$root), p.app.$root.user)
          )
            return n("/");
          n();
        }),
        (e.a = p);
    },
    ZAy7: function(t, e, n) {
      "use strict";
      var r = function() {
          var t = this,
            e = t.$createElement;
          return (t._self._c || e)("h1", [
            t._v("This editors page is under construction")
          ]);
        },
        a = [],
        s = { render: r, staticRenderFns: a };
      e.a = s;
    },
    doPI: function(t, e) {},
    fpQY: function(t, e, n) {
      "use strict";
      function r(t) {
        n("jv9g");
      }
      var a = n("nlR8"),
        s = n("xGOk"),
        o = n("VU/8"),
        i = r,
        u = o(a.a, s.a, !1, i, "data-v-403c28f4", null);
      e.a = u.exports;
    },
    jv9g: function(t, e) {},
    "nEr+": function(t, e, n) {
      "use strict";
      var r = n("ZAy7"),
        a = n("VU/8"),
        s = a(null, r.a, !1, null, null, null);
      e.a = s.exports;
    },
    nlR8: function(t, e, n) {
      "use strict";
      var r = n("Pfph");
      e.a = {
        data: function() {
          return { username: "", password: "" };
        },
        methods: {
          login: function() {
            var t = this;
            Object(r.b)(this.username, this.password, this.$root).then(function(
              e
            ) {
              var n = decodeURIComponent(t.$route.query.redirect || "");
              t.$router.push(n || "/");
            });
          }
        }
      };
    },
    tYer: function(t, e, n) {
      "use strict";
      function r(t) {
        n("1B3o");
      }
      var a = n("QRL1"),
        s = n("Arp+"),
        o = n("VU/8"),
        i = r,
        u = o(a.a, s.a, !1, i, "data-v-13a2e29d", null);
      e.a = u.exports;
    },
    ufRF: function(t, e, n) {
      "use strict";
      var r = function() {
          var t = this,
            e = t.$createElement;
          return (t._self._c || e)("h1", [
            t._v("This page is under construction")
          ]);
        },
        a = [],
        s = { render: r, staticRenderFns: a };
      e.a = s;
    },
    "wD/n": function(t, e, n) {
      "use strict";
      var r = n("6nYa"),
        a = n("VU/8"),
        s = a(null, r.a, !1, null, null, null);
      e.a = s.exports;
    },
    xGOk: function(t, e, n) {
      "use strict";
      var r = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", [
            n(
              "form",
              {
                on: {
                  submit: function(e) {
                    e.preventDefault(), t.login(e);
                  }
                }
              },
              [
                n(
                  "b-field",
                  { attrs: { label: "Username" } },
                  [
                    n("b-input", {
                      attrs: { maxlength: "30" },
                      model: {
                        value: t.username,
                        callback: function(e) {
                          t.username = e;
                        },
                        expression: "username"
                      }
                    })
                  ],
                  1
                ),
                t._v(" "),
                n(
                  "b-field",
                  { attrs: { label: "Password" } },
                  [
                    n("b-input", {
                      attrs: { type: "password", "password-reveal": "" },
                      model: {
                        value: t.password,
                        callback: function(e) {
                          t.password = e;
                        },
                        expression: "password"
                      }
                    })
                  ],
                  1
                ),
                t._v(" "),
                n(
                  "button",
                  {
                    staticClass: "button is-primary",
                    on: {
                      click: function(e) {
                        e.preventDefault(), t.login(e);
                      }
                    }
                  },
                  [t._v("Login")]
                )
              ],
              1
            )
          ]);
        },
        a = [],
        s = { render: r, staticRenderFns: a };
      e.a = s;
    },
    xJD8: function(t, e, n) {
      "use strict";
      var r = n("Pfph");
      e.a = {
        name: "app",
        methods: {
          logout: function() {
            Object(r.c)(this.$root), this.$router.push("/");
          }
        }
      };
    },
    yCzM: function(t, e, n) {
      "use strict";
      var r = n("Skm6"),
        a = n("VU/8"),
        s = a(null, r.a, !1, null, null, null);
      e.a = s.exports;
    }
  },
  ["NHnr"]
);
//# sourceMappingURL=app.0e0e88470b946c1bb272.js.map
