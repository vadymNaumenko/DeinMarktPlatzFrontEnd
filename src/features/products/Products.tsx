import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { loadProducts } from './productsSlice';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import style from './product.module.css';

export default function Products(): JSX.Element {
	const products = useAppSelector(
		(state: RootState) => state.products.products
	);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(loadProducts());
		// загрузит в массив продукты при первом рендере
	}, []);
	{
		/* <div class="has-bg-img">
  <h2>Hero Section</h2>
  <h4>It's easy to set background image with Torus Kit</h4>
  <img class="bg-img" src="..." alt="...">
</div> */
	}
	return (
		<div className={style.beckImage}>
			{/* <img className="has-bg-img"
				className="bg-img"
				src="https://abrakadabra.fun/uploads/posts/2021-11/1636778678_2-abrakadabra-fun-p-fon-dlya-tovarov-internet-magazina-2.jpg"
				alt="..."
			></img> */}
			
		
			<ul className={style.ProductList}>
				{products.map((p) => (
					<li key={p.id} className={style.ProductCard}>
						<Card style={{ width: '18rem' }}>
							<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
							<Card.Body>
								<Card.Title>{p.title}</Card.Title>
								<Card.Text>{p.description}</Card.Text>
							</Card.Body>
							<ListGroup className="list-group-flush">
								<ListGroup.Item>Cras justo odio</ListGroup.Item>
								<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
								<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
							</ListGroup>
							<Card.Body>
								<Card.Link href="#">Details</Card.Link>
								<Card.Link href="#">To user</Card.Link>
							</Card.Body>
						</Card>
					</li>
				))}
			</ul>
	</div>
	);
}
