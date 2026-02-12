import { createPortal } from 'react-dom'

export function Modal({ open, onClose, title, children }) {
    if (!open) return null

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={onClose}>
            <div className="w-full max-w-xl rounded-xl bg-white shadow-lg border border-black/15" onClick={(e) => e.stopPropagation()}>
                <div className="border-b border-black/15 px-4 py-3 font-semibold text-center">
                    {title}
                </div>

                <div className="px-5 py-4">
                    {children}
                </div>
            </div>
        </div>,
        document.body
    )
}
