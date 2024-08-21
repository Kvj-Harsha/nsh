import { exec } from 'child_process';
import path from 'path';

export async function GET(req) {
  return new Promise((resolve, reject) => {
    const scriptPath = path.join(process.cwd(), 'ss.py');
    exec(`python ${scriptPath}`, (error, stdout, stderr) => {
      if (error) {
        reject(stderr);
      } else {
        resolve(stdout);
      }
    });
  }).then((output) => {
    return new Response(JSON.stringify({ message: output }), { status: 200 });
  }).catch((err) => {
    return new Response(JSON.stringify({ error: err }), { status: 500 });
  });
}
