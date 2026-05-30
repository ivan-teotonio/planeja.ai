export function Footer() {
  return (
    <footer className="flex h-16 w-full items-center justify-center bg-gray-200">
      <p className="text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Planejai. Todos os direitos
        reservados.
      </p>
    </footer>
  )
}
