import { Router } from 'express'
import * as listingsCtrl from '../controllers/listings.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

router.post('/', checkAuth, listingsCtrl.create)
router.get('/', checkAuth, listingsCtrl.index)
router.get('/:id', checkAuth, listingsCtrl.show)
router.put('/:id', checkAuth, listingsCtrl.update)
router.delete('/:id', checkAuth, listingsCtrl.delete)
router.post('/:id/reviews', checkAuth, listingsCtrl.createReview)
router.delete('/:id/reviews/:reviewId', checkAuth, listingsCtrl.deleteReview)
router.post('/:id/reservations', checkAuth, listingsCtrl.createReservation)
router.post('/:id/activities', checkAuth, listingsCtrl.createActivity)
router.put('/:id/add-photo', checkAuth, listingsCtrl.addPhoto)

export { router }