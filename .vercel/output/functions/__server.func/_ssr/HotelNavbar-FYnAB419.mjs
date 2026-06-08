import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useNavigate, f as useLocation } from "../_libs/tanstack__react-router.mjs";
import { e as useI18n, u as useAuth, m as useTheme, f as useShift, g as useNow, h as formatRemaining, i as cn } from "./router-CQhdkXg6.mjs";
import { R as Root2$1, T as Trigger$1, P as Portal, C as Content2$1 } from "../_libs/radix-ui__react-popover.mjs";
import { R as Root2, T as Trigger, P as Portal2, C as Content2, I as Item2, L as Label2, S as Separator2, a as SubTrigger2, b as SubContent2, c as CheckboxItem2, d as ItemIndicator2, e as RadioItem2 } from "../_libs/radix-ui__react-dropdown-menu.mjs";
import { aB as Shield, aA as Briefcase, az as Settings2, v as Building2, j as ChevronDown, d as Users, H as History, O as UserCog, J as Sun, K as Moon, V as Timer, i as User, aE as LayoutGrid, aj as CalendarRange, r as Clock, h as LogOut, z as Check, X, a5 as TriangleAlert, Y as ChevronRight, aF as Circle } from "../_libs/lucide-react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
function useClock() {
  const [time, setTime] = reactExports.useState("");
  reactExports.useEffect(() => {
    const update = () => setTime((/* @__PURE__ */ new Date()).toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit", hour12: false }));
    update();
    const id = setInterval(update, 1e3);
    return () => clearInterval(id);
  }, []);
  return time;
}
const Popover = Root2$1;
const PopoverTrigger = Trigger$1;
const PopoverContent = reactExports.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2$1,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = Content2$1.displayName;
const LANGS = [
  { code: "ru", flag: "🇷🇺", name: "Русский", short: "RU" },
  { code: "uz", flag: "🇺🇿", name: "O'zbek", short: "UZ" },
  { code: "en", flag: "🇬🇧", name: "English", short: "EN" }
];
function HotelLanguageDropdown() {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = reactExports.useState(false);
  const current = LANGS.find((l) => l.code === lang);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        className: "flex items-center gap-1.5 rounded-xl bg-white/10 backdrop-blur-sm px-2.5 py-2 text-sm font-semibold text-white border border-white/15 hover:bg-white/20 hover:border-white/25 transition-all duration-300 hover:scale-105 hover:shadow-lg group whitespace-nowrap",
        "aria-label": current.name,
        title: current.name,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base leading-none transition-transform duration-300 group-hover:scale-110", children: current.flag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold tracking-wide", children: current.short }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}` })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PopoverContent,
      {
        align: "end",
        sideOffset: 8,
        className: "z-[100] min-w-[220px] rounded-xl bg-card border border-border shadow-2xl overflow-hidden p-0",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dropdown-animate", children: LANGS.map((l) => {
          const active = lang === l.code;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => {
                setLang(l.code);
                setOpen(false);
              },
              className: `flex w-full items-center gap-3 px-4 py-3.5 text-sm font-medium transition-all duration-200
                  ${active ? "bg-primary/10 text-primary font-bold" : "text-foreground hover:bg-muted hover:pl-5"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl leading-none", children: l.flag }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: l.name }),
                active && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "ml-auto h-4 w-4 text-primary" })
              ]
            },
            l.code
          );
        }) })
      }
    )
  ] });
}
const DropdownMenu = Root2;
const DropdownMenuTrigger = Trigger;
const DropdownMenuSubTrigger = reactExports.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SubTrigger2,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent focus:bg-accent",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "ml-auto h-4 w-4" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
const DropdownMenuSubContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SubContent2,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = SubContent2.displayName;
const DropdownMenuContent = reactExports.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = Content2.displayName;
const DropdownMenuItem = reactExports.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Item2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = Item2.displayName;
const DropdownMenuCheckboxItem = reactExports.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  CheckboxItem2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
const DropdownMenuRadioItem = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  RadioItem2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
const DropdownMenuLabel = reactExports.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Label2,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
    ...props
  }
));
DropdownMenuLabel.displayName = Label2.displayName;
const DropdownMenuSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Separator2, { ref, className: cn("-mx-1 my-1 h-px bg-muted", className), ...props }));
DropdownMenuSeparator.displayName = Separator2.displayName;
function LogoutDialog({ open, onCancel, onConfirm }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "fixed inset-0 z-[100] flex items-center justify-center p-4",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.22 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "absolute inset-0 bg-slate-900/60 backdrop-blur-sm",
            onClick: onCancel,
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.25 }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            role: "dialog",
            "aria-modal": "true",
            initial: { opacity: 0, y: 24, scale: 0.92, rotateX: -8 },
            animate: { opacity: 1, y: 0, scale: 1, rotateX: 0 },
            exit: { opacity: 0, y: 14, scale: 0.96, rotateX: 4 },
            transition: { type: "spring", stiffness: 320, damping: 26, mass: 0.8 },
            style: { transformPerspective: 1e3 },
            className: "relative w-full max-w-md rounded-2xl bg-white shadow-2xl p-6 border border-slate-200",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: onCancel,
                  className: "absolute right-4 top-4 rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 hover:rotate-90 transition-all duration-300",
                  "aria-label": "Close",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { scale: 0, rotate: -30 },
                    animate: { scale: 1, rotate: 0 },
                    transition: { delay: 0.1, type: "spring", stiffness: 360, damping: 18 },
                    className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-rose-600",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-slate-900", children: "Sign out?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-slate-600", children: "Do you really want to log out? You will need to sign in again to access the dashboard." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex justify-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.button,
                  {
                    whileHover: { scale: 1.02 },
                    whileTap: { scale: 0.97 },
                    onClick: onCancel,
                    className: "min-w-[110px] rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors",
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.button,
                  {
                    whileHover: { scale: 1.04, y: -1 },
                    whileTap: { scale: 0.97 },
                    onClick: onConfirm,
                    className: "group flex min-w-[110px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-red-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-red-500/30 hover:shadow-lg hover:shadow-red-500/40 transition-all duration-300",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" }),
                      "Sign out"
                    ]
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  ) });
}
function HotelNavbar({ viewMode, onViewModeChange }) {
  const { t } = useI18n();
  const time = useClock();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout, switchRole } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { session } = useShift();
  const now = useNow();
  const [logoutOpen, setLogoutOpen] = reactExports.useState(false);
  const roles = [
    { to: "/superuser", label: "Superuser", Icon: Shield },
    { to: "/director", label: "Director", Icon: Briefcase },
    { to: "/admin", label: "Admin", Icon: Shield },
    { to: "/manager", label: "Manager", Icon: Settings2 }
  ];
  const isSuperuser = user?.role === "superuser" || !!user?.canSwitchWorkspaces;
  const isAdmin = user?.role === "admin";
  const canManageAdmins = isSuperuser && location.pathname !== "/manager";
  const roleToPath = {
    superuser: roles[0],
    director: roles[1],
    admin: roles[2],
    manager: roles[3]
  };
  const currentRole = (user && roleToPath[user.role]) ?? roles.find((r) => r.to === location.pathname) ?? roles[0];
  const CurrentIcon = currentRole.Icon;
  const handleConfirmLogout = () => {
    setLogoutOpen(false);
    setTimeout(() => {
      logout();
      navigate({ to: "/login", replace: true });
    }, 200);
  };
  const remainingMs = reactExports.useMemo(() => {
    if (!session) return 0;
    return new Date(session.endISO).getTime() - now.getTime();
  }, [session, now]);
  const isDayShift = session?.kind === "day";
  const ShiftIcon = isDayShift ? Sun : Moon;
  const isSubstitute = !!session?.coveringFor;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-40 navbar-gradient shadow-xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between px-3 sm:px-5 py-3 sm:py-3.5 gap-3 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 sm:gap-3.5 min-w-0 animate-fade-in-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              const target = (user && roleToPath[user.role]?.to) ?? currentRole.to;
              navigate({ to: target });
              if (typeof window !== "undefined") {
                window.dispatchEvent(new CustomEvent("workspace:reset", { detail: { to: target } }));
                window.requestAnimationFrame(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                });
              }
            },
            className: "flex items-center gap-2.5 sm:gap-3.5 min-w-0 group/home rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-white/40",
            "aria-label": "Go to default page",
            title: "Go to default page",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm shadow-inner hover-lift transition-transform duration-300 group-hover/home:scale-105", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-5 w-5 text-white transition-transform duration-500 group-hover/home:rotate-12 group-hover/home:scale-110" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-lg font-black leading-tight tracking-tight text-white truncate", children: t("hotelName") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-white/65 font-medium tracking-wide", children: t("roomManagement") })
              ] })
            ]
          }
        ),
        isSuperuser && /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              className: "ml-2 flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm px-3 py-2 text-xs font-semibold text-white border border-white/15 transition-all duration-300 hover-lift",
              "aria-label": "Switch workspace",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CurrentIcon, { className: "h-3.5 w-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: currentRole.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3.5 w-3.5 opacity-70" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuContent, { align: "start", className: "w-44", children: roles.map(({ to, label, Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            DropdownMenuItem,
            {
              onSelect: () => {
                const role = to.slice(1);
                switchRole(role);
                navigate({ to });
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("workspace:reset", { detail: { to } }));
                  window.requestAnimationFrame(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  });
                }
              },
              className: `gap-2 cursor-pointer ${location.pathname === to ? "bg-accent font-semibold" : ""}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }),
                label
              ]
            },
            to
          )) })
        ] }),
        canManageAdmins && /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.button,
            {
              whileHover: { y: -1 },
              whileTap: { scale: 0.96 },
              className: "group ml-1 flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm px-3 py-2 text-xs font-semibold text-white border border-white/15 transition-colors duration-300 shadow-sm shadow-black/10",
              "aria-label": "Manage",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Settings2, { className: "h-3.5 w-3.5 transition-transform duration-500 group-hover:rotate-90" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Manage" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3.5 w-3.5 opacity-70 transition-transform duration-300 group-data-[state=open]:rotate-180" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            DropdownMenuContent,
            {
              align: "start",
              sideOffset: 10,
              className: "w-60 rounded-2xl border border-slate-200/80 bg-white/95 backdrop-blur-xl shadow-2xl shadow-purple-500/10 p-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuLabel, { className: "px-2 pt-1 pb-2 text-[10px] uppercase tracking-[0.18em] font-bold text-[hsl(265_85%_55%)]", children: "Administration" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  DropdownMenuItem,
                  {
                    onSelect: () => {
                      navigate({ to: "/superuser/admins" });
                      if (typeof window !== "undefined") {
                        window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
                      }
                    },
                    className: `group/item gap-2 cursor-pointer rounded-xl px-2.5 py-2 text-sm font-medium transition-all duration-200 hover:bg-gradient-to-r hover:from-[hsl(265_85%_97%)] hover:to-[hsl(280_85%_97%)] focus:bg-gradient-to-r focus:from-[hsl(265_85%_97%)] focus:to-[hsl(280_85%_97%)] ${location.pathname === "/superuser/admins" ? "bg-gradient-to-r from-[hsl(265_85%_95%)] to-[hsl(280_85%_95%)] font-bold text-[hsl(265_85%_45%)]" : "text-slate-700"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-slate-600 group-hover/item:bg-[hsl(265_85%_55%)] group-hover/item:text-white transition-colors duration-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3.5 w-3.5" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: "Administrators" })
                    ]
                  }
                ),
                isSuperuser && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, { className: "my-1.5 bg-slate-200/70" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    DropdownMenuItem,
                    {
                      onSelect: () => {
                        navigate({ to: "/superuser/history" });
                        if (typeof window !== "undefined") {
                          window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
                        }
                      },
                      className: `group/item gap-2 cursor-pointer rounded-xl px-2.5 py-2 text-sm font-medium transition-all duration-200 hover:bg-gradient-to-r hover:from-[hsl(265_85%_97%)] hover:to-[hsl(280_85%_97%)] focus:bg-gradient-to-r focus:from-[hsl(265_85%_97%)] focus:to-[hsl(280_85%_97%)] ${location.pathname === "/superuser/history" ? "bg-gradient-to-r from-[hsl(265_85%_95%)] to-[hsl(280_85%_95%)] font-bold text-[hsl(265_85%_45%)]" : "text-slate-700"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-slate-600 group-hover/item:bg-[hsl(265_85%_55%)] group-hover/item:text-white transition-colors duration-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "h-3.5 w-3.5" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: "Login history" })
                      ]
                    }
                  )
                ] })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-end gap-2 sm:gap-2.5", children: [
        session && isSubstitute && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "hidden md:flex items-center gap-2 rounded-xl bg-amber-400/20 border border-amber-300/40 px-3 py-2 backdrop-blur-sm",
            title: `Covering for ${session.coveringFor}${session.reason ? ` — ${session.reason}` : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(UserCog, { className: "h-4 w-4 text-amber-200" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col leading-tight", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold tracking-wider text-amber-100/90 uppercase", children: "Substitute" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-black text-white", children: [
                  session.name,
                  " → ",
                  session.coveringFor
                ] })
              ] })
            ]
          }
        ),
        isAdmin && session && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `hidden md:flex items-center gap-2.5 rounded-xl px-3 py-2 border backdrop-blur-sm animate-fade-in-up ${isDayShift ? "bg-amber-400/15 border-amber-300/30" : "bg-indigo-400/15 border-indigo-300/30"}`,
            title: `${session.name} · ${isDayShift ? "Day shift 06:00–18:00" : "Night shift 18:00–06:00"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShiftIcon, { className: `h-4 w-4 ${isDayShift ? "text-amber-200" : "text-indigo-200"}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col leading-tight", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-bold tracking-wider text-white/70 uppercase", children: [
                  isDayShift ? "Day · 06–18" : "Night · 18–06",
                  " · ",
                  session.name
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-black text-white tabular-nums flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Timer, { className: "h-3 w-3 opacity-80" }),
                  formatRemaining(remainingMs)
                ] })
              ] })
            ]
          }
        ),
        isSuperuser && /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              className: "hidden md:flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm px-3 py-2 text-xs font-semibold text-white border border-white/15 transition-all duration-300",
              "aria-label": "Current shift",
              children: [
                session ? /* @__PURE__ */ jsxRuntimeExports.jsx(ShiftIcon, { className: `h-3.5 w-3.5 ${isDayShift ? "text-amber-300" : "text-indigo-300"}` }) : /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-3.5 w-3.5 opacity-70" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: session ? session.name : "No shift" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3.5 w-3.5 opacity-70" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { align: "end", className: "w-64", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuLabel, { className: "text-[11px] uppercase tracking-wider text-muted-foreground", children: "Current shift" }),
            session ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-2 py-2 space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShiftIcon, { className: `h-4 w-4 ${isDayShift ? "text-amber-500" : "text-indigo-500"}` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold", children: isDayShift ? "Day shift" : "Night shift" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                  "Window: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold tabular-nums", children: isDayShift ? "06:00 → 18:00" : "18:00 → 06:00" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                  "On shift: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: session.name })
                ] }),
                isSubstitute && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-md px-2 py-1", children: [
                    "Covering for ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: session.coveringFor })
                  ] }),
                  session.reason && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground italic", children: [
                    "Reason: ",
                    session.reason
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-2 py-2 flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold tracking-wider text-muted-foreground uppercase", children: "Time left" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-black tabular-nums", children: formatRemaining(remainingMs) })
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-2 py-3 text-xs text-muted-foreground", children: "Никто не отметился на смене." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 rounded-xl bg-white/10 backdrop-blur-sm p-1 border border-white/15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => onViewModeChange("tiles"),
              className: `p-2 rounded-lg transition-all duration-300 ${viewMode === "tiles" ? "bg-white/25 text-white shadow-lg scale-110" : "text-white/60 hover:text-white hover:bg-white/10"}`,
              "aria-label": t("tilesView"),
              title: t("tilesView"),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGrid, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => onViewModeChange("timeline"),
              className: `p-2 rounded-lg transition-all duration-300 ${viewMode === "timeline" ? "bg-white/25 text-white shadow-lg scale-110" : "text-white/60 hover:text-white hover:bg-white/10"}`,
              "aria-label": t("timelineView"),
              title: t("timelineView"),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarRange, { className: "h-4 w-4" })
            }
          )
        ] }),
        time && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm px-3.5 py-2.5 text-sm border border-white/15 animate-fade-in-up", style: { animationDelay: "100ms" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-white/70 animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white tabular-nums", children: time })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(HotelLanguageDropdown, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: toggleTheme,
            className: "flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/15 text-white transition-colors",
            "aria-label": theme === "dark" ? "Use white theme" : "Use black theme",
            title: theme === "dark" ? "White theme" : "Black theme",
            children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.button,
          {
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 },
            onClick: () => setLogoutOpen(true),
            className: "flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/15 text-white transition-colors",
            "aria-label": "Sign out",
            title: "Sign out",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      LogoutDialog,
      {
        open: logoutOpen,
        onCancel: () => setLogoutOpen(false),
        onConfirm: handleConfirmLogout
      }
    )
  ] });
}
export {
  HotelNavbar as H,
  Popover as P,
  PopoverTrigger as a,
  PopoverContent as b
};
