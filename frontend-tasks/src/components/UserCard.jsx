/* Props: name, email */
export default function UserCard({ name, email }) {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
      <div className="w-16 h-16 mx-auto rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold">
        {name.charAt(0)}
      </div>
      <h2 className="mt-4 text-lg font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600 text-sm">{email}</p>
    </div>
  );
}
