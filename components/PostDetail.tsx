// pages/posts/[id].js
import { useRouter } from 'next/router';

const PostDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  // Aquí, normalmente obtendrías los detalles del post utilizando el ID recibido
  // desde una fuente de datos como una API o una base de datos.

  return (
    <div>
      <h1>Post Detail</h1>
      <p>Showing detail for post with ID: {id}</p>
      {/* Aquí mostrarías los detalles reales del post */}
    </div>
  );
};

export default PostDetail;
