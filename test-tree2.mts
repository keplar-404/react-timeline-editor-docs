import { source } from './lib/source';
console.log('pageTree is array:', Array.isArray(source.pageTree));
console.log('getPageTree returns:', source.getPageTree()?.name);
