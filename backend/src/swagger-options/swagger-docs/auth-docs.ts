/**
 * @swagger
 * components:
 *   schemas:
 *     tokens:
 *       type: object
 *       properties:
 *         accessToken:
 *           type: string
 *         refreshToken:
 *           type: string
 *       example:
 *         accessToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkNDY1MWNkMS1kYjM0LTRlYzUtYWYxNS02MzFlZjYxNWZkMjYiLCJpYXQiOjE2MjYxMTQ4ODMsImV4cCI6MTYyNjIwMTI4M30.hJLJY34EANFG_t9IK15hLU5P0QkUit6x3kbmjPl81cM
 *         refreshToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkNDY1MWNkMS1kYjM0LTRlYzUtYWYxNS02MzFlZjYxNWZkMjYiLCJpYXQiOjE2MjYxMTQ4ODMsImV4cCI6MTYyODcwNjg4M30.M_2tZVQPuwxpRMhtVOQ3G4HRPi6eNvXj04vOEnyN4q8
 */

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authorization API endpoints
 */

/**
 * @swagger
 * /auth/auth:
 *   post:
 *     description: Sign in
 *     tags: [Auth]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               email: somemail@gmail.com
 *               password: As1@as
 *     responses:
 *       200:
 *         description: Successful auth
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 tokens:
 *                   $ref: '#/components/schemas/tokens'
 *       400:
 *         description: Some trouble with auth dont match password/email
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type:string
 *             example:
 *               message: Don`t match the password
 */

/**
 * @swagger
 * /auth/refresh:
 *   post:
 *     description: Send request to email to confirm password reset
 *     tags: [Auth]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type:string
 *             example:
 *               email: somemail@gmail.com
 *     responses:
 *       200:
 *         description: message was sent to email
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type:string
 *             example:
 *               message: Confirm
 *       400:
 *         description: message was sent to email
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: Some error
 */

/**
 * @swagger
 * /auth/verify:
 *   post:
 *     description: Send request to change password
 *     tags: [Auth]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type:string
 *               password:
 *                 type:string
 *               verifiedPassword:
 *                 type:string
 *             example:
 *               token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkNDY1MWNkMS1kYjM0LTRlYzUtYWYxNS02MzFlZjYxNWZkMjYiLCJpYXQiOjE2MjYxMTQ4ODMsImV4cCI6MTYyNjIwMTI4M30.hJLJY34EANFG_t9IK15hLU5P0QkUit6x3kbmjPl81cM
 *               password: SomeNew1Pass@
 *               verifiedPassword: SomeNew1Pass@
 *     responses:
 *       200:
 *         description: message was sent to email
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type:string
 *             example:
 *               message: Confirm
 *       400:
 *         description: No existing email / No match passwords
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: Some error
 *       403:
 *         description: Expired token time
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: Expired token time
 */

