//import { debounce } from "./debounce";

const input: any = document.querySelector("input");
const normalText: any = document.querySelector("#normal");
const debounceText: any = document.querySelector("#debounce");

const debounce = (callback: Function, delay: number) => {
  let timer: ReturnType<typeof setTimeout>;

  return function (...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}; 

let normalRequest = (value: string) => {
  normalText.textContent = value;
  console.log("normal request");
};

let debounceRequest: any = debounce((value: string) => {
  debounceText.textContent = value;
  console.log("debounce request");
}, 1000);

input.addEventListener("input", (e: any) => {
  normalRequest(e.target.value);
  debounceRequest(e.target.value);
});