import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import pkg from "firebase-admin";
const FB_PROJECT_ID = "link-tree-47f84";
const FB_CLIENT_EMAIL = "firebase-adminsdk-azlsl@link-tree-47f84.iam.gserviceaccount.com";
const FB_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDSzZqyU9GvBHGl\nsam7nR8WbewTkke14zQ5lHWzgEgxpTGVAjoRUZiE7+20BLfxbKn8AQZ9tRIMBO6h\nkUUCgL/1pXZA+y1DKTbIuKBfYtxrE0dgzJ8yIbNCIqlxKaPT66Yl+vo8IYxePsj/\nHpldTwujtUSKuSwe/EexYefqhM17rDJZkaTeJlbuWjD3jB3wGNdSOyFafkra14E1\n74KUESacV64gCMx8qdE67sA85H9opx6eIS95oIPTUANj81pEKJxXfS7z8dgtVh1f\nGyZQDISngk/mRQgI+YblkJVauH3R2liAnoWj23jyxQLuIBee3sC8YI4WaLJYv+M+\nN5OQScqtAgMBAAECggEAIhfRG2K9gJwMIlNlw1tRvg+olPC9StA0b9SQJagLZQYV\nywbpa8ghzew86jayJihgJIro6RdKFCoPCw/i1JkMkrbANZm59Aj8HIHppAup4OJl\nEqV9YL79DibrdwsYPSu5Ox7IbkWxvUNTwBkLjkD8va0RKQtyNI+yK6DNQItabVP8\nxj8zdpsk/LrbC2uKr/boRlGrqsQIr9xRHFxHbQteJ4rgPot/5EfBhwzfKqv4+ewR\n/yOoRo/5Fsl1P0m4u7vFroidTOaCtDXwE7/70iQGRya1nVG6atVLvNKAqAVqRTzi\nB3hj1TDbwIQYfXrxCosa7IOnflqimCzvpmWipxvr4QKBgQDtrLSR7maZL2i0meSw\nlffMfOEHb6DeNP31P3w3LR5f7FzJWXviIyZtnzXo4yHp4tVy16FAQ+IVdOc4My7K\nDH2ngrx42K+7XtZbyQL1FjqtWKtmSQZlYpiR6HfooRN6NXcUPt1vaJVgj4/BuLLm\nAavPSBa9GfrnJmNr/Gx0TGdHIQKBgQDjDoBSnRV8pTsGJN55eHNQA2HXrioaq5YB\nKL6xNCwguYHuJIdQRGBIJTakHy419AbFxtWLqNND4k/X29FSTBOfulQjGdsd93bt\nb9wAjiV4uNDLpvU0oIdVdqzPOga6i6DOoxE2RKDbNLMh1SM5zVsZBoZUpFdPEZju\nINkvDhtuDQKBgAyaMrzmKjSHKgMhgdnHKeuC15/AUIRXxPuDEUAPuWOWsdjPUN1N\nxdTcM0yU9pBjQbQkMN2qe8ttdnEpbZqzDNqb+QhjXPYPckhNoUWDlzrnz7bNunQX\nxUU/UVRZbiH1wcmmB7HHltwW4KWB+KJvhj+ob+Q5A2/MPktUiB+miXdhAoGANzfV\nmUG+cfu06P+aYywZzwGjj9I5Rxcnecyw42Nuv96dbI7RoYGfcKwsJ6m1kUVxSDPc\nxwQdrMqi5Dn/I+aAdz3XLFojYZxG/eNQO4pWLo+zp3NI+q13fB9KU3MnI8LFLruV\nef8ip2yfi8DLukjouKNPk9ILsZzz9iVi7ACgRxkCgYEAwEnQK2WO336HUH95Vty9\nCp3+PHOtChUI3xlDPi1NhN0q4nNC/o2mvY/DcbnzjzoNCr5l0iPbWMdZrv5Rjm4Q\nYdqgpCUSEbDbrMq7UPO6b8qN5Y5tIu/QszfOdUnHdw6mmHD5XDHsdbv2IS1JLLmg\nleT120J/a39RDNL1KN1nQvQ=\n-----END PRIVATE KEY-----\n";
try {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: FB_PROJECT_ID,
      clientEmail: FB_CLIENT_EMAIL,
      privateKey: FB_PRIVATE_KEY
    })
  });
} catch (err) {
  if (!/already exists/u.test(err.message)) {
    console.error("Firebase Admin Error: ", err.stack);
  }
}
const adminDB = getFirestore();
const adminAuth = getAuth();
export {
  adminAuth as a,
  adminDB as b
};
