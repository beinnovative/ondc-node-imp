import { Router } from "express";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { createAuthorizationHeader } from "../utils/cryptic.js";
import "dotenv/config";


const router = Router();

let reqBody = {
  context: {
    domain: process.env.DOMAIN,
    country: process.env.COUNTRY,
    city: process.env.CITY,
    action: "search",
    core_version: "1.2.0",
    bpp_id: process.env.BPP_UNIQUE_KEY_ID,
    bpp_uri: process.env.BPP_URI,
  },
  message: {
    intent: {
      descriptor: {
        name: "Biscuit",
      },
    },
  },
};

async function callApi(reqObj) {
  try {
    let header = await createAuthorizationHeader(reqObj);
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: process.env.ONDC_BASE_URL + "/search",
      headers: {
        Authorization: header,
        "Content-Type": "application/json",
      },
      data: reqObj,
    };

    let response = await axios(config);
    return { reqBody ,result: response.data, header };
  } catch (e) {
    console.log(e);
    return e;
  }
}

router.get("/", async (req, res) => {
  let reqObj = { ...reqBody };
  let context = reqObj.context;
  context = {
    ...context,
    timestamp: new Date().toISOString(),
    transaction_id: uuidv4(),
    message_id: uuidv4(),
  };
  reqObj.context = context;

  let data = await callApi(reqObj);
  res.json({ baseUrl: BASE_URL, data });
});

router.post("/webhook", async (req, res) => {
  // Process the webhook payload
  console.log("Received webhook payload:", req.body);
  res.json({ success: true, message: "from server" });
});

export default router;
