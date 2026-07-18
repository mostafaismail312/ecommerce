type ErrorProps = {
  message: string;
};

export default function Error({ message }: ErrorProps) {
  return (
    <div className="text-center text-red-600">
      {message}
    </div>
  );
}