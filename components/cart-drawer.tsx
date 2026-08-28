"use client";

import { Close, ShoppingBag } from "@/components/icons";
import { VialMedia } from "@/components/vial-media";
import { useCart } from "@/components/cart-context";
import { PROGRAMS } from "@/lib/content";

export function CartDrawer() {
  const { items, open, setOpen, add, remove, subtotal } = useCart();
  const suggestion = PROGRAMS.find((program) => !items.some((item) => item.id === program.id));

  return (
    <div className={`fixed inset-0 z-100 ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
      <button
        type="button"
        tabIndex={-1}
        aria-label="Close cart"
        className={`absolute inset-0 h-full w-full cursor-default bg-foreground/35 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        onClick={() => setOpen(false)}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`absolute top-0 right-0 flex h-full w-full max-w-[440px] flex-col bg-background shadow-lift transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] sm:w-[92vw] ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <header className="flex items-start justify-between gap-4 border-b border-border px-5 py-4">
          <div>
            <h2 className="font-display text-xl text-foreground">Your Cart</h2>
            <p className="mt-0.5 text-xs text-muted-foreground">Demonstration checkout only</p>
          </div>
          <button
            type="button"
            aria-label="Close cart"
            className="-mr-1 rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            onClick={() => setOpen(false)}
          >
            <Close className="size-5" />
          </button>
        </header>
        <div className="flex-1 overflow-y-auto px-5">
          {items.length === 0 ? (
            <div className="py-14 text-center">
              <span className="mx-auto grid size-14 place-items-center rounded-full bg-secondary">
                <ShoppingBag className="size-6 text-muted-foreground" />
              </span>
              <p className="mt-5 font-display text-lg text-foreground">Your cart is empty</p>
              <p className="mt-1.5 text-sm text-muted-foreground">Explore our products to get started.</p>
              <button
                type="button"
                className="mt-6 rounded-full border border-input px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary"
                onClick={() => setOpen(false)}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-border py-4">
              {items.map((item) => (
                <li key={item.id} className="flex items-center gap-3 py-3">
                  <span className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-lg border border-border bg-card">
                    <VialMedia
                      programId={item.id}
                      idPrefix={`cart-${item.id}`}
                      name={item.name}
                      strength=""
                      form=""
                      shot="front"
                      overlay={false}
                      className="size-12"
                    />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.category} · Qty {item.quantity}
                    </p>
                    <button type="button" className="mt-1 text-xs text-muted-foreground hover:text-foreground" onClick={() => remove(item.id)}>
                      Remove
                    </button>
                  </div>
                  <p className="shrink-0 text-sm font-semibold text-foreground">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>
          )}
          {suggestion ? (
            <section className="mt-2 border-t border-border py-5">
              <h3 className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                You may also like
              </h3>
              <div className="mt-3 flex items-center gap-3 rounded-xl border border-border bg-card p-3">
                <span className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-lg border border-border bg-card">
                  <VialMedia
                    programId={suggestion.id}
                    idPrefix={`suggest-${suggestion.id}`}
                    name={suggestion.name}
                    strength={suggestion.strength}
                    form={suggestion.form}
                    shot="front"
                    overlay={false}
                    className="size-12"
                  />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-foreground">{suggestion.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{suggestion.category}</p>
                </div>
                <p className="shrink-0 text-sm font-semibold text-foreground">${suggestion.price}.00</p>
                <button
                  type="button"
                  aria-label={`Add ${suggestion.name} to cart`}
                  className="rv-cta shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold"
                  onClick={() => add(suggestion)}
                >
                  Add
                </button>
              </div>
            </section>
          ) : null}
        </div>
        <footer className="border-t border-border bg-background px-5 py-5">
          <div className="flex items-baseline justify-between">
            <span className="text-sm font-semibold text-foreground">Subtotal</span>
            <span className="font-display text-xl text-foreground">${subtotal.toFixed(2)}</span>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">Taxes are calculated at checkout.</p>
          <button
            type="button"
            disabled={items.length === 0}
            className="rv-cta mt-4 w-full rounded-full px-6 py-3.5 text-sm font-semibold transition-colors disabled:opacity-40"
            onClick={() => alert("Checkout is simulated in this demonstration clone.")}
          >
            Checkout
          </button>
          <button type="button" className="mt-2 w-full rounded-full px-6 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>
            Continue Shopping
          </button>
        </footer>
      </div>
    </div>
  );
}
