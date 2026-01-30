export default function AvatarPic({ author, size }) {
    const word = author.split(' ').map(word => word.charAt(0)).join('').toUpperCase().slice(0, 1);

    return (
        <div className={`rounded-full bg-sky-100 text-sky-700 flex justify-center items-center text-lg font-semibold ${size == '1' ? 'size-17' : 'size-12'}`}>
            {word}
        </div>)
}
