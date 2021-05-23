
import { unZipFromFile, unZipFromURL } from 'https://deno.land/x/flat/mod.ts'


const result = await unZipFromFile('./archives/2021.zip', './2021')
const output = result ? 'File unzipped successfully' : 'Error unzipping'
console.log(output)
