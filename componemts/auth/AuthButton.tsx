'use client'
import GText from '../Share/GText'

interface Props {
    name: string
    onClick: () => void
    isLoading?: boolean
}

/**
 * @since October 2025
 * @author Gedeon Twizermana
 * @see {@link https://my-brand-twizerimana-gedeons-projects.vercel.app/} - Author's website
 */

export const AuthButton = ({ name, onClick, isLoading = false }: Props) => {
    return (
        <button
            type="button"
            onClick={!isLoading ? onClick : undefined}
            disabled={isLoading}
            className={`bg-[#2E4F4F] w-[310px] rounded-4xl py-2.5 transition-all flex justify-center items-center
        ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#3C6E71] active:scale-95'}`}
        >
            {isLoading ? (
                <div className="flex items-center gap-2 text-white">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <GText weight="bold" color="white">
                        Loading...
                    </GText>
                </div>
            ) : (
                <GText weight="bold" color="white" className="text-center">
                    {name}
                </GText>
            )}
        </button>
    )
}
