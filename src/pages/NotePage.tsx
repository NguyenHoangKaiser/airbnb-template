import Button from 'src/Components/Button/Button';
import { PreviewPane, Col } from 'src/Components/Playground/PreviewPane';

function NotePage() {
  return (
    <main className="flex flex-col items-center justify-evenly gap-7 text-black">
      <PreviewPane title="Buttons like you used to build them">
        <Col title="Regular">
          <Button
            onClick={() => {
              console.log('clicked');
            }}
          >
            Add product
          </Button>
          <Button size="slim">Add product (slim)</Button>
          <Button size="large">Add product (large)</Button>
          <Button disabled>Add product (disabled)</Button>
          <Button modifier="outline">Add product (outline)</Button>
          <Button modifier="plain">Add product (plain)</Button>
          <Button modifier="plain" size="large">
            Add product (large, plain)
          </Button>
          <Button loading>Add product</Button>
        </Col>
        <Col title="Monochrome">
          <Button variant="monochrome">Add product</Button>
          <Button variant="monochrome" size="slim">
            Add product (slim)
          </Button>
          <Button variant="monochrome" size="large">
            Add product (large)
          </Button>
          <Button variant="monochrome" disabled>
            Add product (disabled)
          </Button>
          <Button variant="monochrome" modifier="outline">
            Add product (outline)
          </Button>
          <Button variant="monochrome" modifier="plain">
            Add product (plain)
          </Button>
          <Button variant="monochrome" loading>
            Add product
          </Button>
        </Col>
        <Col title="Primary">
          <Button variant="primary">Add product</Button>
          <Button variant="primary" size="slim">
            Add product (slim)
          </Button>
          <Button variant="primary" size="large">
            Add product (large)
          </Button>
          <Button variant="primary" disabled>
            Add product (disabled)
          </Button>
          <Button variant="primary" modifier="outline">
            Add product (outline)
          </Button>
          <Button variant="primary" modifier="plain">
            Add product (plain)
          </Button>
          <Button variant="primary" loading>
            Add Product
          </Button>
        </Col>
        <Col title="Destructive">
          <Button variant="destructive">Add product</Button>
          <Button variant="destructive" size="slim">
            Add product (slim)
          </Button>
          <Button variant="destructive" size="large">
            Add product (large)
          </Button>
          <Button variant="destructive" disabled>
            Add product (disabled)
          </Button>
          <Button variant="destructive" modifier="outline">
            Add product (outline)
          </Button>
          <Button variant="destructive" modifier="plain">
            Add product (plain)
          </Button>
          <Button variant="destructive" loading>
            Add product
          </Button>
        </Col>

        <Col title="Other">
          <Button>Not full width as comparison</Button>
          <Button fullWidth>Add product full width</Button>
        </Col>
      </PreviewPane>
    </main>
  );
}

export default NotePage;
