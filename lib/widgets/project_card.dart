import 'package:flutter/cupertino.dart';
import 'package:portfolio/constants/colors.dart';
import 'package:portfolio/utils/project_utils.dart';

class ProjectCardWidget extends StatelessWidget {
  const ProjectCardWidget({super.key, required this.project});

  final ProjectUtils project;
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(16.0),
      child: Container(
        clipBehavior: Clip.antiAlias,
        height: 290,
        width: 260,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10.0),
          color: CustomColor.bgLight2,
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisSize: MainAxisSize.min,
          children: [
            //project image/logo
            Image.asset(
              project.image,
              height: 140,
              width: 260,
              fit: BoxFit.contain,
            ),
            //title
            Padding(
              padding: const EdgeInsets.fromLTRB(12, 15, 12, 12),
              child: Text(
                project.title,
                style: TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.w600,
                  color: CustomColor.whitePrimary,
                  decoration: TextDecoration.none,
                ),
              ),
            ),
            //subtitle
            Padding(
              padding: const EdgeInsets.fromLTRB(12, 0, 12, 12),
              child: Text(
                project.subtitle,
                style: TextStyle(
                  fontSize: 12.0,
                  color: CustomColor.whitePrimary,
                  decoration: TextDecoration.none,
                ),
              ),
            ),
            const Spacer(),
            //footer
            Container(
              color: CustomColor.bgLight1,
              padding: EdgeInsets.symmetric(
                horizontal: 12.0,
                vertical: 10.0,
              ),
              child: Row(
                children: [
                  const Text(
                    "Technology Used:",
                    style: TextStyle(
                      color: CustomColor.yellowSecondary,
                      fontSize: 10.0,
                      decoration: TextDecoration.none,
                    ),
                  ),
                  const Spacer(),
                  if (project.flutter == 1)
                    Image.asset(
                      "assets/flutter.png",
                      width: 17.0,
                    ),
                  if (project.node == 1)
                    Padding(
                      padding: const EdgeInsets.only(
                        left: 6.0,
                      ),
                      child: Image.asset(
                        "assets/node.png",
                        width: 17.0,
                      ),
                    ),
                  if (project.mongo == 1)
                    Padding(
                      padding: const EdgeInsets.only(
                        left: 6.0,
                      ),
                      child: Image.asset(
                        "assets/mongo.png",
                        width: 17.0,
                      ),
                    ),
                  if (project.firebase == 1)
                    Padding(
                      padding: const EdgeInsets.only(
                        left: 6.0,
                      ),
                      child: Image.asset(
                        "assets/firebase.png",
                        width: 17.0,
                      ),
                    ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
