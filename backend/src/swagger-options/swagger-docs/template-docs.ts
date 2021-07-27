/**
 * @swagger
 * components:
 *   schemas:
 *     Template:
 *       type: object
 *       properties:
 *         name:
 *           required: true
 *           type: string
 *         type:
 *           required: true
 *           type: string
 *         isReadOnly:
 *           required: true
 *           type: boolean
 *         label:
 *           required: false
 *           type: string
 *         options:
 *           required: false
 *           type: array
 *           items:
 *             type: string
 *         placeholder:
 *           required: false
 *           type: string
 *         validation:
 *           required: false
 *           type: string
 *         defaultValue:
 *           required: false
 *           type: string
 *       example:
 *         name: education
 *         type: text
 *         isReadOnly: false
 *         label: Education
 *         placeholder: Education
 */

/**
 * @swagger
 * tags:
 *   name: Template
 *   description: Templates manipulation endpoints
 */

/**
 * @swagger
 * /template:
 *   post:
 *     description: Create new Template
 *     tags: [Template]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Template'
 *     responses:
 *       200:
 *         description: Successful create
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 template:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Template'
 *                 industryId:
 *                   type: number
 *                 id:
 *                   type: string
 *       500:
 *         description: Trouble with validation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type:string
 *       404:
 *         description: Problems with referer domain
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type:string
 */

/**
 * @swagger
 * /template/{id}:
 *   get:
 *     description: Get template by id
 *     tags: [Template]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *          type: integer
 *          minimum: 1
 *     responses:
 *       200:
 *         description: Successful search
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 template:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Template'
 *                 industryId:
 *                   type: number
 *                 id:
 *                   type: string
 *       404:
 *         description: Not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type:string
 */

/**
 * @swagger
 * /template:
 *   put:
 *     description: Update Template
 *     tags: [Template]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Template'
 *     responses:
 *       200:
 *         description: Successful update
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 template:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Template'
 *                 industryId:
 *                   type: number
 *                 id:
 *                   type: string
 *       500:
 *         description: Trouble with validation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type:string
 *       404:
 *         description: Problems with referer domain
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type:string
 */

/**
 * @swagger
 * /template/{id}:
 *   delete:
 *     description: Delete template by id
 *     tags: [Template]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *          type: integer
 *          minimum: 1
 *     responses:
 *       204:
 *         description: Successful delete
 *       500:
 *         description: Trouble on server side
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type:string
 */
export {};
