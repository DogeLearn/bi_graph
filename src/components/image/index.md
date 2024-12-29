# Image

```jsx
import { Image } from '@michaeltan9999/bi_graph';

const demoData = {
  url: 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==',
};

export default () => <Image data={demoData} />;
```

```jsx
import { Image } from '@michaeltan9999/bi_graph';

const demoData = {
  url: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1wEIzV.img?w=768&h=454&m=6',
};

export default () => <Image data={demoData} style={{ width: '100%' }} />;
```
