"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";

function getValidImage(src: string): string {
  if (!src || src === "/images/products/" || src === "/images/products") {
    return "/images/placeholder-product.svg";
  }
  return src;
}

export default function CartDropdown() {
  const { items, removeItem, updateQuantity, clearCart, totalItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState<"cart" | "phone" | "confirm">("cart");
  const [confirmed, setConfirmed] = useState(false);

  const totalPrice = items.reduce((sum, i) => sum + (i.price || 0) * i.quantity, 0);

  const handleConfirm = () => {
    if (items.length === 0) return;
    setStep("phone");
  };

  const handlePurchase = () => {
    if (!phone.trim()) return;

    const orderData = {
      phone: phone.trim(),
      items: items.map((i) => ({
        name: i.name,
        price: i.price || 0,
        quantity: i.quantity,
      })),
      total: totalPrice,
      date: new Date().toISOString(),
    };

    fetch("https://script.google.com/macros/s/AKfycbz_DUMMY/exec", {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    }).catch(() => {});

    setStep("confirm");
    setConfirmed(true);
    clearCart();
  };

  if (confirmed) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="bg-white rounded-2xl p-8 max-w-sm mx-4 text-center shadow-2xl">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            شكراً لك CHIKA TEX على ثقتك
          </h2>
          <p className="text-gray-600 mb-6">
            تم استلام طلبك بنجاح، سنتصل بك قريباً لتأكيد الطلبية.
          </p>
          <button
            onClick={() => { setConfirmed(false); setStep("cart"); setPhone(""); }}
            className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700"
          >
            العودة للتسوق
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-lg text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors"
        aria-label="Panier"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
        </svg>
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-full mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 max-h-[80vh] flex flex-col">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900">
                سلة التسوق
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {items.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                السلة فارغة
              </div>
            ) : step === "cart" ? (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3 p-3 bg-gray-50 rounded-xl">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-200 shrink-0 relative">
                        <Image
                          src={getValidImage(item.image)}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900 truncate">
                          {item.name}
                        </p>
                        {item.price !== undefined && (
                          <p className="text-sm font-bold text-red-600 mt-1">
                            {formatPrice(item.price)}
                          </p>
                        )}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-sm font-bold hover:bg-gray-300"
                          >
                            -
                          </button>
                          <span className="text-sm font-semibold w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-sm font-bold hover:bg-gray-300"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-600 self-start"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t border-gray-100">
                  <div className="flex justify-between mb-3">
                    <span className="font-semibold text-gray-900">المجموع</span>
                    <span className="font-bold text-red-600 text-lg">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>
                  <button
                    onClick={handleConfirm}
                    className="w-full bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700 transition-colors"
                  >
                    تأكيد الطلب
                  </button>
                </div>
              </>
            ) : step === "phone" ? (
              <div className="p-6 space-y-4">
                <p className="text-lg font-bold text-gray-900 text-center">
                  أدخل رقم هاتفك
                </p>
                <p className="text-sm text-gray-500 text-center">
                  سنتصل بك لتأكيد الطلبية
                </p>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="05XX XX XX XX"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-center text-lg font-bold focus:outline-none focus:ring-2 focus:ring-red-500"
                  dir="ltr"
                />
                <button
                  onClick={handlePurchase}
                  disabled={!phone.trim()}
                  className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  شراء
                </button>
                <button
                  onClick={() => setStep("cart")}
                  className="w-full text-gray-500 py-2 text-sm hover:text-gray-700"
                >
                  رجوع
                </button>
              </div>
            ) : null}
          </div>
        </>
      )}
    </>
  );
}
