export default function AvatarPic({ author, size }) {
    const word = author?.split(' ').map(word => word.charAt(0)).join('').toUpperCase().slice(0, 2);

    return (
        <div className={`rounded-full bg-blue-100 shrink-0 text-blue-700 flex justify-center items-center font-semibold ${size == '0' ? 'size-9.5' : size == '1' ? 'size-12' : 'size-17'} ${size == '0' ? 'text-base' : size == '1' ? 'text-lg' : 'text-xl'}`}>
            {word}
        </div>)
}
