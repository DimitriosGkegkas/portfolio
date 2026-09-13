import { createWarehouseScanner, type ScanRequest, type ScanResponse } from './scanWarehouse';

// A single worker owns the acceleration structure. Small elevation batches are
// transferred as soon as they finish and their sample buffer is then recycled.
const worker = self as unknown as {
  onmessage: ((event: MessageEvent<ScanRequest>) => void) | null;
  postMessage: (message: ScanResponse, transfer?: Transferable[]) => void;
};
let scanner: ReturnType<typeof createWarehouseScanner>;

worker.onmessage = ({ data }) => {
  if (data.type === 'init') {
    scanner = createWarehouseScanner(data.triangles, data.columns);
    worker.postMessage({ type: 'ready' });
    return;
  }
  const { pose, startRing, ringCount } = data;
  const { samples, count } = scanner.scanChunk(pose, startRing, ringCount, data.samples);
  worker.postMessage({ type: 'scan', pose, startRing, ringCount, samples, count }, [samples.buffer as ArrayBuffer]);
};
