(this.webpackJsonpapp = this.webpackJsonpapp || []).push([
  [0],
  {
    468: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        r = n(13),
        o = n.n(r),
        i = n(17),
        c = n(506),
        s = n(237),
        l = "#3DB2FF",
        m = "#FFB830",
        u = Object(s.a)({
          palette: {
            common: { blue: l, white: "#FFEDDA", yellow: m, red: "#FF2442" },
            primary: { main: l },
            secondary: { main: m },
          },
        }),
        d = n(53),
        h = n.n(d),
        j = n(84),
        b = n(14),
        p = n(496),
        g = n(51),
        f = n(498),
        x = n(512),
        O = n(500),
        w = n(507),
        y = n(502),
        v = n(82),
        C = n(28),
        N = n.n(C),
        k = n(85),
        S = n.n(k),
        F = n(4),
        I = Object(p.a)(function (e) {
          var t, n;
          return {
            chatContainer:
              ((t = {
                width: "35em",
                height: "35em",
                backgroundColor: e.palette.common.white,
                boxShadow: e.shadows[2],
                padding: "0 8em",
              }),
              Object(b.a)(t, e.breakpoints.down("xs"), {
                width: "100%",
                height: "100%",
              }),
              Object(b.a)(t, e.breakpoints.down("415"), {}),
              t),
            contentContainer: Object(b.a)({}, e.breakpoints.down("555"), {
              width: "300px",
            }),
            greeting:
              ((n = {
                fontWeight: "bold",
                marginBottom: "15px",
                color: e.palette.secondary.main,
              }),
              Object(b.a)(n, e.breakpoints.down("510"), { fontSize: "1.5rem" }),
              Object(b.a)(n, e.breakpoints.down("375"), {
                fontSize: "1rem",
                marginBottom: "10px",
              }),
              n),
            startButton: {
              marginTop: "15px",
              backgroundColor: e.palette.common.red,
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1.1rem",
              "&:hover": { backgroundColor: e.palette.common.red },
            },
            avatarContainer: { width: "100%" },
            userAvatar: {
              width: "2em",
              height: "2em",
              fontSize: "5rem",
              boxShadow: e.shadows[3],
              marginBottom: "20px",
            },
          };
        });
      function E(e) {
        var t = e.inputName,
          n = e.setInputName,
          r = e.validate,
          o = e.setValidate,
          i = e.invalidName,
          c = e.setInValidName,
          s = e.existingName,
          l = e.setExistingName,
          m = e.existingUser,
          u = e.setExistingUser,
          d = e.socket,
          b = I(),
          p = Object(g.a)();
        function C() {
          return (C = Object(j.a)(
            h.a.mark(function e() {
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        S.a.connect("http://localhost:3001/message"),
                        (e.next = 3),
                        d.emit("new_user", { socketid: d.id, username: t })
                      );
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        return (
          Object(a.useEffect)(
            function () {
              var e = !1;
              return (
                d.on("existing_user", function (t) {
                  e || u(t);
                }),
                function () {
                  e = !0;
                }
              );
            },
            [d, u]
          ),
          Object(a.useEffect)(
            function () {
              var e = setTimeout(function () {
                if ("" !== t)
                  for (var e = 0; e < m.length; e++) {
                    if (N.a.toLower(m[e].username) === N.a.toLower(t)) {
                      l(!0), o(!0);
                      break;
                    }
                    i || (l(!1), o(!1));
                  }
              }, 1);
              return function () {
                return clearTimeout(e);
              };
            },
            [t, m, o, l, i]
          ),
          Object(F.jsx)(f.a, {
            container: !0,
            direction: "row",
            justifyContent: "center",
            alignContent: "center",
            style: { width: "100vw", height: "100vh" },
            children: Object(F.jsx)(f.a, {
              item: !0,
              container: !0,
              direction: "column",
              alignContent: "center",
              justifyContent: "center",
              className: b.chatContainer,
              children: Object(F.jsxs)(f.a, {
                item: !0,
                container: !0,
                direction: "column",
                className: b.contentContainer,
                children: [
                  Object(F.jsx)(f.a, {
                    item: !0,
                    container: !0,
                    justifyContent: "center",
                    className: b.avatarContainer,
                    children: Object(F.jsx)(x.a, {
                      style: {
                        backgroundColor: r ? "" : p.palette.primary.main,
                      },
                      className: b.userAvatar,
                      children: N.a.trim(N.a.upperCase(t)).slice(0, 1),
                    }),
                  }),
                  Object(F.jsx)(f.a, {
                    item: !0,
                    children: Object(F.jsx)(O.a, {
                      variant: "h4",
                      align: "center",
                      color: "initial",
                      className: b.greeting,
                      children: r
                        ? "Enter your name"
                        : "Welcome " + t.slice(0, 7),
                    }),
                  }),
                  Object(F.jsx)(f.a, {
                    item: !0,
                    container: !0,
                    justifyContent: "center",
                    style: { width: "100%" },
                    children: Object(F.jsx)(w.a, {
                      error: i || s,
                      helperText: i
                        ? "Please choose different name"
                        : s
                        ? "Name already exist"
                        : "",
                      autoComplete: "off",
                      variant: "outlined",
                      color: "secondary",
                      autoFocus: !0,
                      inputProps: { min: 0, style: { textAlign: "center" } },
                      style: { width: 300 },
                      value: t,
                      onChange: function (e) {
                        var t = e.target.value;
                        n(N.a.upperFirst(N.a.trim(t).slice(0, 9))),
                          "" !== N.a.trim(t)
                            ? "server" === N.a.toLower(t) ||
                              N.a.toLower(t).includes("server")
                              ? (c(!0), o(!0))
                              : (c(!1), o(!1))
                            : o(!0);
                      },
                      fullWidth: !0,
                    }),
                  }),
                  Object(F.jsx)(f.a, {
                    children: Object(F.jsx)(v.b, {
                      to: "/message",
                      style: {
                        textDecoration: "none",
                        pointerEvents: r ? "none" : "auto",
                      },
                      children: Object(F.jsx)(y.a, {
                        variant: "contained",
                        fullWidth: !0,
                        className: b.startButton,
                        disabled: r,
                        onClick: function () {
                          return C.apply(this, arguments);
                        },
                        children: "Start Chatting!",
                      }),
                    }),
                  }),
                ],
              }),
            }),
          })
        );
      }
      var B = n(21),
        W = n(6),
        U = n(511),
        T = n(510),
        _ = n(513),
        L = n(504),
        A = n(505),
        D = n(508),
        M = Object(p.a)(function (e) {
          return {
            chat: {
              width: "auto",
              height: "auto",
              maxWidth: "263px",
              color: "#fff",
              fontWeight: 500,
              fontSize: "1rem",
              borderRadius: "50px",
              padding: "10px 15px",
              overflowWrap: "break-word",
              wordBreak: "break-word",
            },
            messageContent: { lineHeight: "1px" },
            you: {
              backgroundColor: e.palette.secondary.main,
              color: e.palette.common.black,
              marginRight: "1em",
            },
            other: { backgroundColor: e.palette.primary.main },
            server: {
              backgroundColor: e.palette.common.white,
              color: e.palette.grey[700],
            },
            youChatInfo: { marginRight: "2em" },
            otherChatInfo: { marginLeft: "1em" },
            authorName: { color: e.palette.grey[600] },
            newUser: { color: e.palette.primary.light },
            leftUser: { color: e.palette.common.red },
          };
        });
      function z(e) {
        var t = e.author,
          n = e.message,
          a = e.username,
          r = e.newUser,
          o = e.id,
          i = e.time,
          c = M();
        return Object(F.jsxs)(f.a, {
          container: !0,
          direction: "column",
          children: [
            Object(F.jsx)(f.a, {
              item: !0,
              container: !0,
              direction: "row",
              justifyContent: a === t ? "flex-end" : "flex-start",
              children:
                "Server" === t
                  ? Object(F.jsx)(f.a, {
                      item: !0,
                      children: Object(F.jsx)(U.a, {
                        title: i,
                        placement: "right",
                        arrow: !0,
                        children: Object(F.jsx)(D.a, {
                          className: "".concat(c.chat, " ").concat(c.server),
                          children: Object(F.jsxs)(O.a, {
                            align: "left",
                            variant: "subtitle1",
                            className: c.messageContent,
                            display: "inline",
                            children: [
                              Object(F.jsxs)("i", {
                                className:
                                  "left" === o ? c.leftUser : c.newUser,
                                children: [r, " "],
                              }),
                              n,
                            ],
                          }),
                        }),
                      }),
                    })
                  : Object(F.jsx)(f.a, {
                      item: !0,
                      children: Object(F.jsx)(U.a, {
                        title: i,
                        placement: a === t ? "left" : "right",
                        arrow: !0,
                        children: Object(F.jsx)(D.a, {
                          className:
                            a === t
                              ? "".concat(c.chat, " ").concat(c.you)
                              : "".concat(c.chat, " ").concat(c.other),
                          children: Object(F.jsx)(O.a, {
                            align: "left",
                            variant: "subtitle1",
                            className: c.messageContent,
                            display: "inline",
                            children: n,
                          }),
                        }),
                      }),
                    }),
            }),
            Object(F.jsx)(f.a, {
              item: !0,
              container: !0,
              direction: "row",
              justifyContent: a === t ? "flex-end" : "flex-start",
              children: Object(F.jsx)(O.a, {
                variant: "caption",
                noWrap: !0,
                className:
                  a === t
                    ? "".concat(c.authorName, " ").concat(c.youChatInfo)
                    : "".concat(c.authorName, " ").concat(c.otherChatInfo),
                children: "Server" === t ? "\ud83d\udca0 Server" : t,
              }),
            }),
          ],
        });
      }
      var R = n(236),
        V = n(503),
        H = Object(p.a)(function (e) {
          return {
            noMessagesText: { color: e.palette.grey[400] },
            noMessageIcon: { color: e.palette.grey[400], fontSize: "5em" },
          };
        });
      var J = function () {
          var e = H();
          return Object(F.jsxs)(f.a, {
            container: !0,
            direction: "column",
            alignContent: "center",
            children: [
              Object(F.jsx)(f.a, {
                container: !0,
                direction: "row",
                justifyContent: "center",
                children: Object(F.jsx)(V.a, { className: e.noMessageIcon }),
              }),
              Object(F.jsx)(f.a, {
                item: !0,
                children: Object(F.jsx)(O.a, {
                  align: "center",
                  variant: "body1",
                  className: e.noMessagesText,
                  children: "No Messages",
                }),
              }),
            ],
          });
        },
        P = n(509),
        q = (n(449), n(235)),
        G = n.n(q),
        K = n(16),
        Q = Object(p.a)(function (e) {
          return {
            chatContainer: Object(b.a)(
              {
                width: "35em",
                backgroundColor: e.palette.common.white,
                boxShadow: e.shadows[2],
                padding: "1em 2em",
              },
              e.breakpoints.down("xs"),
              { width: "100%", height: "100%" }
            ),
            chatContent: { width: "100%", height: "616px" },
            messageInputContainer: { width: "10em" },
            messageInput: {
              backgroundColor: "#fff",
              maxWidth: "26em",
              "&:hover": { borderColor: "red" },
            },
            sendButton: {
              backgroundColor: u.palette.secondary.main,
              transition: "0.5s ease",
              marginLeft: "10px",
              height: "100%",
              "&:hover": { backgroundColor: u.palette.secondary.light },
            },
            messages: {
              width: "100%",
              height: "80%",
              borderRadius: "5px",
              marginBottom: "1em",
              backgroundColor: "#fff",
              padding: "1em 0.5em ",
            },
            autoScroll: {
              width: "100%",
              height: "100%",
              overflow: "hidden",
              marginLeft: "0.5em",
            },
            inputContainer: { width: "26ch" },
            userCount: {
              fontWeight: 600,
              marginLeft: "0.2em",
              marginTop: "1.5px",
              color: e.palette.grey[600],
            },
            typingContainer: { position: "absolute", bottom: "0.5em" },
            typingAvatar: {
              width: "30px",
              height: "30px",
              backgroundColor: e.palette.primary.light,
              boxShadow: e.shadows[3],
            },
            typingAnimation: { marginLeft: "0.5em", boxShadow: e.shadows[3] },
          };
        }),
        X = Object(W.a)({
          root: {
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: u.palette.secondary.light },
              "&:hover fieldset": { borderColor: u.palette.secondary.main },
              "&.Mui-focused fieldset": {
                borderColor: u.palette.secondary.main,
              },
            },
          },
        })(w.a);
      function Y(e) {
        var t = e.inputName,
          n = e.socket,
          r = Q(),
          o = Object(a.useState)(!0),
          c = Object(i.a)(o, 2),
          s = c[0],
          l = c[1],
          m = Object(a.useState)(""),
          u = Object(i.a)(m, 2),
          d = u[0],
          b = u[1],
          p = Object(a.useState)([]),
          g = Object(i.a)(p, 2),
          w = g[0],
          v = g[1],
          C = Object(a.useState)(0),
          k = Object(i.a)(C, 2),
          S = k[0],
          I = k[1],
          E = Object(a.useState)(!1),
          W = Object(i.a)(E, 2),
          D = W[0],
          M = W[1],
          V = Object(a.useState)({ name: "", typing: !1 }),
          H = Object(i.a)(V, 2),
          q = H[0],
          Y = H[1],
          Z = q.name,
          $ = q.typing;
        function ee() {
          return (ee = Object(j.a)(
            h.a.mark(function e(a) {
              var r;
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((r = a.target.value), b(r), M(!0), !D)) {
                        e.next = 6;
                        break;
                      }
                      return (
                        (e.next = 6),
                        n.emit("someone_typing", { name: t, typing: !0 })
                      );
                    case 6:
                      "" !== N.a.trim(r) ? l(!1) : l(!0);
                    case 8:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        var te = (function () {
          var e = Object(j.a)(
            h.a.mark(function e(a) {
              var r, o;
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        (a.preventDefault(),
                        (r =
                          new Date().getHours() +
                          ":" +
                          new Date().getMinutes()),
                        "" === N.a.trim(d))
                      ) {
                        e.next = 11;
                        break;
                      }
                      return (
                        (o = {
                          id: Object(P.a)(),
                          author: t,
                          message: d,
                          time: r,
                        }),
                        (e.next = 6),
                        n.emit("someone_typing", { name: "", typing: !1 })
                      );
                    case 6:
                      return (e.next = 8), n.emit("send_message", o);
                    case 8:
                      v(function (e) {
                        return [].concat(Object(B.a)(e), [o]);
                      }),
                        b(""),
                        l(!0);
                    case 11:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
        return (
          Object(a.useEffect)(
            function () {
              var e = !1;
              return (
                n.on("recieve_message", function (t) {
                  e ||
                    v(function (e) {
                      return [].concat(Object(B.a)(e), [t]);
                    });
                }),
                n.on("user_counter", function (t) {
                  e || I(t);
                }),
                n.on("new_user", function (t) {
                  e ||
                    v(function (e) {
                      return [].concat(Object(B.a)(e), [t]);
                    });
                }),
                n.on("someone_typing", function (t) {
                  e || Y(t);
                }),
                function () {
                  e = !0;
                }
              );
            },
            [n]
          ),
          Object(a.useEffect)(
            function () {
              var e = setTimeout(function () {
                M(!1), n.emit("someone_typing", { name: "", typing: !1 });
              }, 1e3);
              return function () {
                return clearTimeout(e);
              };
            },
            [d, n]
          ),
          Object(F.jsx)(F.Fragment, {
            children:
              "" === t
                ? Object(F.jsx)(K.a, { to: "/" })
                : Object(F.jsx)(f.a, {
                    container: !0,
                    direction: "row",
                    justifyContent: "center",
                    alignContent: "center",
                    style: { width: "100%", height: "100vh" },
                    children: Object(F.jsx)(f.a, {
                      item: !0,
                      container: !0,
                      direction: "column",
                      alignContent: "center",
                      className: r.chatContainer,
                      children: Object(F.jsxs)(f.a, {
                        item: !0,
                        container: !0,
                        direction: "column",
                        className: r.chatContent,
                        wrap: "nowrap",
                        children: [
                          Object(F.jsx)(U.a, {
                            title: "online",
                            placement: "bottom",
                            arrow: !0,
                            children: Object(F.jsxs)(f.a, {
                              item: !0,
                              container: !0,
                              direction: "row",
                              justifyContent: "center",
                              alignContent: "center",
                              children: [
                                Object(F.jsx)(L.a, { color: "secondary" }),
                                Object(F.jsx)(O.a, {
                                  variant: "body1",
                                  className: r.userCount,
                                  children: S,
                                }),
                              ],
                            }),
                          }),
                          Object(F.jsxs)(f.a, {
                            item: !0,
                            className: r.messages,
                            container: !0,
                            direction: "row",
                            alignContent: "center",
                            style: { position: "relative" },
                            children: [
                              0 === w.length
                                ? Object(F.jsx)(J, {})
                                : Object(F.jsx)(R.a, {
                                    className: r.autoScroll,
                                    children: w.map(function (e) {
                                      return Object(F.jsx)(
                                        z,
                                        {
                                          author: e.author,
                                          message: e.message,
                                          username: t,
                                          newUser: e.newUser,
                                          id: e.id,
                                          time: e.time,
                                        },
                                        e.id
                                      );
                                    }),
                                  }),
                              $ &&
                                Object(F.jsx)(T.a, {
                                  in: $,
                                  children: Object(F.jsxs)(f.a, {
                                    container: !0,
                                    direction: "row",
                                    className: r.typingContainer,
                                    children: [
                                      Object(F.jsx)(f.a, {
                                        item: !0,
                                        children: Object(F.jsx)(x.a, {
                                          className: r.typingAvatar,
                                          children: Z.slice(0, 1),
                                        }),
                                      }),
                                      Object(F.jsx)(_.a, {
                                        label: Object(F.jsx)(G.a, {
                                          type: "ThreeDots",
                                          color: "#00BFFF",
                                          height: 30,
                                          width: 30,
                                          timeout: 0,
                                        }),
                                        className: r.typingAnimation,
                                      }),
                                    ],
                                  }),
                                }),
                            ],
                          }),
                          Object(F.jsx)("form", {
                            id: "form",
                            action: "",
                            autoComplete: "off",
                            onSubmit: te,
                            children: Object(F.jsxs)(f.a, {
                              container: !0,
                              direction: "row",
                              justifyContent: "flex-end",
                              style: { width: "100%", height: "56px" },
                              wrap: "nowrap",
                              children: [
                                Object(F.jsx)(X, {
                                  variant: "outlined",
                                  className: r.messageInput,
                                  color: "secondary",
                                  placeholder: "Enter your message",
                                  value: d,
                                  onChange: function (e) {
                                    return ee.apply(this, arguments);
                                  },
                                  autoFocus: !0,
                                  fullWidth: !0,
                                }),
                                Object(F.jsx)(U.a, {
                                  title: "send",
                                  placement: "top",
                                  arrow: !0,
                                  children: Object(F.jsx)(f.a, {
                                    item: !0,
                                    className: r.buttonContainer,
                                    children: Object(F.jsx)(y.a, {
                                      variant: "contained",
                                      className: r.sendButton,
                                      disableElevation: !0,
                                      disabled: s,
                                      onClick: te,
                                      children: Object(F.jsx)(A.a, {
                                        fontSize: "large",
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
          })
        );
      }
      var Z = S.a.connect("http://localhost:3001");
      var $ = function () {
        var e = Object(a.useState)(""),
          t = Object(i.a)(e, 2),
          n = t[0],
          r = t[1],
          o = Object(a.useState)(!0),
          s = Object(i.a)(o, 2),
          l = s[0],
          m = s[1],
          d = Object(a.useState)(!1),
          h = Object(i.a)(d, 2),
          j = h[0],
          b = h[1],
          p = Object(a.useState)(!1),
          g = Object(i.a)(p, 2),
          f = g[0],
          x = g[1],
          O = Object(a.useState)([]),
          w = Object(i.a)(O, 2),
          y = w[0],
          C = w[1];
        return Object(F.jsx)(c.a, {
          theme: u,
          children: Object(F.jsx)(v.a, {
            children: Object(F.jsxs)(K.d, {
              children: [
                Object(F.jsx)(K.b, {
                  exact: !0,
                  path: "/",
                  component: function () {
                    return Object(F.jsx)(E, {
                      inputName: n,
                      setInputName: r,
                      validate: l,
                      setValidate: m,
                      invalidName: j,
                      setInValidName: b,
                      existingName: f,
                      existingUser: y,
                      setExistingUser: C,
                      setExistingName: x,
                      socket: Z,
                    });
                  },
                }),
                Object(F.jsx)(K.b, {
                  exact: !0,
                  path: "/message",
                  component: function () {
                    return Object(F.jsx)(Y, {
                      socket: Z,
                      inputName: n,
                      io: S.a,
                      username: n,
                    });
                  },
                }),
              ],
            }),
          }),
        });
      };
      o.a.render(Object(F.jsx)($, {}), document.getElementById("root"));
    },
  },
  [[468, 1, 2]],
]);
//# sourceMappingURL=main.cd128cad.chunk.js.map
