(this.webpackJsonpapp = this.webpackJsonpapp || []).push([
  [0],
  {
    441: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        r = n(11),
        o = n.n(r),
        c = n(18),
        i = n(477),
        s = n(232),
        l = "#3DB2FF",
        u = "#FFB830",
        d = Object(s.a)({
          palette: {
            common: { blue: l, white: "#FFEDDA", yellow: u, red: "#FF2442" },
            primary: { main: l },
            secondary: { main: u },
          },
        }),
        m = n(66),
        h = n.n(m),
        j = n(107),
        b = n(17),
        p = n(471),
        f = n(482),
        g = n(473),
        x = n(478),
        O = n(480),
        w = n(469),
        v = n(63),
        C = n(81),
        y = n(40),
        N = n.n(y),
        k = n(83),
        S = n.n(k),
        I = n(4),
        E = Object(w.a)(function (e) {
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
      function B(e) {
        var t = e.inputName,
          n = e.setInputName,
          r = e.validate,
          o = e.setValidate,
          c = e.invalidName,
          i = e.setInValidName,
          s = e.existingName,
          l = e.setExistingName,
          u = e.existingUser,
          d = e.setExistingUser,
          m = e.socket,
          b = E(),
          w = Object(v.a)();
        function y() {
          return (y = Object(j.a)(
            h.a.mark(function e() {
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        S.a.connect(
                          "https://jsph-chat-app-server.herokuapp.com/message"
                        ),
                        (e.next = 3),
                        m.emit("new_user", {
                          socketid: m.id,
                          username: N.a.trim(t),
                        })
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
                m.on("existing_user", function (t) {
                  e || d(t);
                }),
                function () {
                  e = !0;
                }
              );
            },
            [m, d]
          ),
          Object(a.useEffect)(
            function () {
              var e = setTimeout(function () {
                if ("" !== t)
                  for (var e = 0; e < u.length; e++) {
                    if (N.a.toLower(u[e].username) === N.a.toLower(t)) {
                      l(!0), o(!0);
                      break;
                    }
                    c || (l(!1), o(!1));
                  }
              }, 1);
              return function () {
                return clearTimeout(e);
              };
            },
            [t, u, o, l, c]
          ),
          Object(I.jsx)(p.a, {
            container: !0,
            direction: "row",
            justifyContent: "center",
            alignContent: "center",
            style: { width: "100vw", height: "100vh" },
            children: Object(I.jsx)(p.a, {
              item: !0,
              container: !0,
              direction: "column",
              alignContent: "center",
              justifyContent: "center",
              className: b.chatContainer,
              children: Object(I.jsxs)(p.a, {
                item: !0,
                container: !0,
                direction: "column",
                className: b.contentContainer,
                children: [
                  Object(I.jsx)(p.a, {
                    item: !0,
                    container: !0,
                    justifyContent: "center",
                    className: b.avatarContainer,
                    children: Object(I.jsx)(f.a, {
                      style: {
                        backgroundColor: r ? "" : w.palette.primary.main,
                      },
                      className: b.userAvatar,
                      children: N.a.trim(N.a.upperCase(t)).slice(0, 1),
                    }),
                  }),
                  Object(I.jsx)(p.a, {
                    item: !0,
                    children: Object(I.jsx)(g.a, {
                      variant: "h4",
                      align: "center",
                      color: "initial",
                      className: b.greeting,
                      children: r
                        ? "Enter your name"
                        : "Welcome " + t.slice(0, 7),
                    }),
                  }),
                  Object(I.jsx)(p.a, {
                    item: !0,
                    container: !0,
                    justifyContent: "center",
                    style: { width: "100%" },
                    children: Object(I.jsx)(x.a, {
                      error: c || s,
                      helperText: c
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
                        n(N.a.trim(t)),
                          "" !== N.a.trim(t)
                            ? "server" === N.a.toLower(t) ||
                              N.a.toLower(t).includes("server")
                              ? (i(!0), o(!0))
                              : (i(!1), o(!1))
                            : o(!0);
                      },
                      fullWidth: !0,
                    }),
                  }),
                  Object(I.jsx)(p.a, {
                    children: Object(I.jsx)(C.b, {
                      to: "/message",
                      style: {
                        textDecoration: "none",
                        pointerEvents: r ? "none" : "auto",
                      },
                      children: Object(I.jsx)(O.a, {
                        variant: "contained",
                        fullWidth: !0,
                        className: b.startButton,
                        disabled: r,
                        onClick: function () {
                          return y.apply(this, arguments);
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
      var W = n(20),
        F = n(6),
        U = n(475),
        L = n(476),
        z = n(479),
        M = Object(w.a)(function (e) {
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
          };
        });
      function T(e) {
        var t = e.author,
          n = e.message,
          a = e.username,
          r = e.newUser,
          o = M();
        return Object(I.jsxs)(p.a, {
          container: !0,
          direction: "column",
          children: [
            Object(I.jsx)(p.a, {
              item: !0,
              container: !0,
              direction: "row",
              justifyContent: a === t ? "flex-end" : "flex-start",
              children:
                "Server" === t
                  ? Object(I.jsx)(p.a, {
                      item: !0,
                      children: Object(I.jsx)(z.a, {
                        className: "".concat(o.chat, " ").concat(o.server),
                        children: Object(I.jsxs)(g.a, {
                          align: "left",
                          variant: "subtitle1",
                          className: o.messageContent,
                          display: "inline",
                          children: [
                            Object(I.jsxs)("i", {
                              className: o.newUser,
                              children: [r, " "],
                            }),
                            n,
                          ],
                        }),
                      }),
                    })
                  : Object(I.jsx)(p.a, {
                      item: !0,
                      children: Object(I.jsx)(z.a, {
                        className:
                          a === t
                            ? "".concat(o.chat, " ").concat(o.you)
                            : "".concat(o.chat, " ").concat(o.other),
                        children: Object(I.jsx)(g.a, {
                          align: "left",
                          variant: "subtitle1",
                          className: o.messageContent,
                          display: "inline",
                          children: n,
                        }),
                      }),
                    }),
            }),
            Object(I.jsx)(p.a, {
              item: !0,
              container: !0,
              direction: "row",
              justifyContent: a === t ? "flex-end" : "flex-start",
              children: Object(I.jsx)(g.a, {
                variant: "caption",
                noWrap: !0,
                className:
                  a === t
                    ? "".concat(o.authorName, " ").concat(o.youChatInfo)
                    : "".concat(o.authorName, " ").concat(o.otherChatInfo),
                children: t,
              }),
            }),
          ],
        });
      }
      var _ = n(231),
        D = n(474),
        A = Object(w.a)(function (e) {
          return {
            noMessagesText: { color: e.palette.grey[400] },
            noMessageIcon: { color: e.palette.grey[400], fontSize: "5em" },
          };
        });
      var R = function () {
          var e = A();
          return Object(I.jsxs)(p.a, {
            container: !0,
            direction: "column",
            alignContent: "center",
            children: [
              Object(I.jsx)(p.a, {
                container: !0,
                direction: "row",
                justifyContent: "center",
                children: Object(I.jsx)(D.a, { className: e.noMessageIcon }),
              }),
              Object(I.jsx)(p.a, {
                item: !0,
                children: Object(I.jsx)(g.a, {
                  align: "center",
                  variant: "body1",
                  className: e.noMessagesText,
                  children: "No Messages",
                }),
              }),
            ],
          });
        },
        V = n(481),
        J = n(14),
        P = Object(w.a)(function (e) {
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
              backgroundColor: d.palette.secondary.main,
              transition: "0.5s ease",
              marginLeft: "10px",
              height: "100%",
              "&:hover": { backgroundColor: d.palette.secondary.light },
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
          };
        }),
        H = Object(F.a)({
          root: {
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: d.palette.secondary.light },
              "&:hover fieldset": { borderColor: d.palette.secondary.main },
              "&.Mui-focused fieldset": {
                borderColor: d.palette.secondary.main,
              },
            },
          },
        })(x.a);
      function q(e) {
        var t = e.inputName,
          n = e.socket,
          r = P(),
          o = Object(a.useState)(!0),
          i = Object(c.a)(o, 2),
          s = i[0],
          l = i[1],
          u = Object(a.useState)(""),
          d = Object(c.a)(u, 2),
          m = d[0],
          b = d[1],
          f = Object(a.useState)([]),
          x = Object(c.a)(f, 2),
          w = x[0],
          v = x[1],
          C = Object(a.useState)(0),
          y = Object(c.a)(C, 2),
          N = y[0],
          k = y[1];
        var S = (function () {
          var e = Object(j.a)(
            h.a.mark(function e(a) {
              var r;
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if ((a.preventDefault(), "" === m)) {
                        e.next = 8;
                        break;
                      }
                      return (
                        (r = { id: Object(V.a)(), author: t, message: m }),
                        (e.next = 5),
                        n.emit("send_message", r)
                      );
                    case 5:
                      v(function (e) {
                        return [].concat(Object(W.a)(e), [r]);
                      }),
                        b(""),
                        l(!0);
                    case 8:
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
                      return [].concat(Object(W.a)(e), [t]);
                    });
                }),
                n.on("user_counter", function (t) {
                  e || k(t);
                }),
                n.on("new_user", function (t) {
                  e ||
                    v(function (e) {
                      return [].concat(Object(W.a)(e), [t]);
                    });
                }),
                function () {
                  e = !0;
                }
              );
            },
            [n]
          ),
          Object(I.jsx)(I.Fragment, {
            children:
              "" === t
                ? Object(I.jsx)(J.a, { to: "/" })
                : Object(I.jsx)(p.a, {
                    container: !0,
                    direction: "row",
                    justifyContent: "center",
                    alignContent: "center",
                    style: { width: "100%", height: "100vh" },
                    children: Object(I.jsx)(p.a, {
                      item: !0,
                      container: !0,
                      direction: "column",
                      alignContent: "center",
                      className: r.chatContainer,
                      children: Object(I.jsxs)(p.a, {
                        item: !0,
                        container: !0,
                        direction: "column",
                        className: r.chatContent,
                        wrap: "nowrap",
                        children: [
                          Object(I.jsxs)(p.a, {
                            item: !0,
                            container: !0,
                            direction: "row",
                            justifyContent: "center",
                            alignContent: "center",
                            children: [
                              Object(I.jsx)(U.a, { color: "secondary" }),
                              Object(I.jsx)(g.a, {
                                variant: "body1",
                                className: r.userCount,
                                children: N,
                              }),
                            ],
                          }),
                          Object(I.jsx)(p.a, {
                            item: !0,
                            className: r.messages,
                            container: !0,
                            direction: "row",
                            alignContent: "center",
                            children:
                              0 === w.length
                                ? Object(I.jsx)(R, {})
                                : Object(I.jsx)(_.a, {
                                    className: r.autoScroll,
                                    children: w.map(function (e) {
                                      return Object(I.jsx)(
                                        T,
                                        {
                                          author: e.author,
                                          message: e.message,
                                          username: t,
                                          newUser: e.newUser,
                                        },
                                        e.id
                                      );
                                    }),
                                  }),
                          }),
                          Object(I.jsx)("form", {
                            id: "form",
                            action: "",
                            autoComplete: "off",
                            onSubmit: S,
                            children: Object(I.jsxs)(p.a, {
                              container: !0,
                              direction: "row",
                              justifyContent: "flex-end",
                              style: { width: "100%", height: "56px" },
                              wrap: "nowrap",
                              children: [
                                Object(I.jsx)(H, {
                                  variant: "outlined",
                                  className: r.messageInput,
                                  color: "secondary",
                                  placeholder: "Enter your message",
                                  value: m,
                                  onChange: function (e) {
                                    var t = e.target.value;
                                    b(t), l("" === t);
                                  },
                                  autoFocus: !0,
                                  fullWidth: !0,
                                }),
                                Object(I.jsx)(p.a, {
                                  item: !0,
                                  className: r.buttonContainer,
                                  children: Object(I.jsx)(O.a, {
                                    variant: "contained",
                                    className: r.sendButton,
                                    disableElevation: !0,
                                    disabled: s,
                                    onClick: S,
                                    children: Object(I.jsx)(L.a, {
                                      fontSize: "large",
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
      var G = S.a.connect("https://jsph-chat-app-server.herokuapp.com");
      var K = function () {
        var e = Object(a.useState)(""),
          t = Object(c.a)(e, 2),
          n = t[0],
          r = t[1],
          o = Object(a.useState)(!0),
          s = Object(c.a)(o, 2),
          l = s[0],
          u = s[1],
          m = Object(a.useState)(!1),
          h = Object(c.a)(m, 2),
          j = h[0],
          b = h[1],
          p = Object(a.useState)(!1),
          f = Object(c.a)(p, 2),
          g = f[0],
          x = f[1],
          O = Object(a.useState)([]),
          w = Object(c.a)(O, 2),
          v = w[0],
          y = w[1];
        return Object(I.jsx)(i.a, {
          theme: d,
          children: Object(I.jsx)(C.a, {
            children: Object(I.jsxs)(J.d, {
              children: [
                Object(I.jsx)(J.b, {
                  exact: !0,
                  path: "/",
                  component: function () {
                    return Object(I.jsx)(B, {
                      inputName: n,
                      setInputName: r,
                      validate: l,
                      setValidate: u,
                      invalidName: j,
                      setInValidName: b,
                      existingName: g,
                      existingUser: v,
                      setExistingUser: y,
                      setExistingName: x,
                      socket: G,
                    });
                  },
                }),
                Object(I.jsx)(J.b, {
                  exact: !0,
                  path: "/message",
                  component: function () {
                    return Object(I.jsx)(q, {
                      socket: G,
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
      o.a.render(Object(I.jsx)(K, {}), document.getElementById("root"));
    },
  },
  [[441, 1, 2]],
]);
//# sourceMappingURL=main.7385def6.chunk.js.map
