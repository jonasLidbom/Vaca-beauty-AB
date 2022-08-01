export default function Product(props) {
  return (
    <>
    <div className="block">
      <div class="product-image">
        <img class="product-image-image" src={props.img} alt="product-img"/>
        <div class="image-overlay">
            <h4 class="image-description">
              A plumping 2% Hyaluronic Acid complex with Vitamin C
              to help hydrate and brighten tired-looking skin.
            </h4>
        </div>
      </div>
      <dt class="block-name"><b>{props.name}</b></dt>
      <dt class="block-description">{props.description}</dt>
      <dt class="block-price">{props.price}</dt>
    </div>
    </>
  );
}
