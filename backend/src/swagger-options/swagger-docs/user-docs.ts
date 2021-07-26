/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Authorization API endpoints
 */

/**
 * @swagger
 * /users/profile:
 *   put:
 *     description: Update profile
 *     tags: [Users]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *               email:
 *                 type: string
 *               birthDate:
 *                 type: string
 *               avatar:
 *                 type: string
 *             example:
 *               firstName: John
 *               lastName: Lenon
 *               phoneNumber: +380501230659
 *               email: somemail@gmail.com
 *               birthDate: 05/06/1986
 *               avatar: http://path-to-image
 *     responses:
 *       200:
 *         description: User updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 tokens:
 *                   $ref: '#/components/schemas/tokens'
 *       400:
 *         description: User is not found in the db
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type:string
 *             example:
 *               message: User not found
 *       401:
 *         description: Not authorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type:string
 *             example:
 *               message: Not authorized
 */
export {};
