import {IconType} from "../../types/utility.types";

export const RateIcon: IconType = ({width, height, fill,}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={"25" || width}
    height={"25" || height}
    fill={fill||"#fff"}
    version="1"
    viewBox="0 0 512 512"
  >
    <path
      d="M2459 4787c-64-18-129-59-174-108-27-30-116-200-301-574-144-292-268-536-275-542-8-6-273-48-589-93-346-50-595-90-626-102-109-40-188-124-224-237-34-108-20-216 41-312 16-25 217-229 448-453s421-415 423-424c3-10-39-273-93-587-54-313-99-591-99-616 0-98 61-227 136-284 58-44 142-77 210-83 114-9 73-27 937 427 148 78 277 141 288 141 10 0 254-124 541-275 358-187 540-278 577-286 213-45 429 115 447 333 4 51-14 172-95 642-62 361-97 586-91 595 4 9 195 198 424 420 229 223 429 425 445 450 61 96 75 204 41 312-36 113-115 197-224 237-31 12-278 52-626 102-316 46-581 88-589 94s-132 250-277 542c-288 585-297 600-409 655-74 36-189 48-266 26zm128-315c11-7 277-533 476-942 113-233 171-273 457-314 96-14 348-50 560-81 212-30 402-60 422-65 43-12 59-47 37-80-8-10-203-203-434-428-455-443-463-452-485-578-11-66-16-36 146-976 46-270 47-278 29-298-10-11-26-20-35-20s-248 121-530 270c-283 148-534 276-559 285-67 23-175 19-241-8-30-13-279-141-553-285-275-144-507-262-516-262-10 0-26 9-36 20-18 20-16 35 80 593 58 335 99 597 98 632-1 71-24 144-64 201-15 23-212 220-436 438-224 219-414 406-422 416-22 33-6 68 37 80 20 5 289 46 597 90 496 72 567 84 620 109 63 30 123 82 159 141 12 19 134 262 270 540 137 278 255 511 264 518 18 14 41 15 59 4z"
      transform="matrix(.1 0 0 -.1 0 512)"
    ></path>
  </svg>
);