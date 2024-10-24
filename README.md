# Local LLM with Node.js

Run a local LLM in a chat context using Node.js without needing any external
service like Ollama running.

## Installation

Clone this repository.

```sh
git clone http://github.com/travishorn/local-llm
```

Change into the directory.

```sh
cd local-llm
```

Download a GGUF format model file and place it in the `models` directory. By
default, the code will use `llama-2-7b-chat.Q3_K_M.gguf` which you can download
from https://huggingface.co/TheBloke/Llama-2-7B-Chat-GGUF.

If you use a different model, make sure to change the path in `index.js`.

## Usage

Run the code.

```sh
node index.js
```

The model will read the hardcoded question and reply to it in the terminal.

## License

The MIT License

Copyright 2024 Travis Horn

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the “Software”), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
