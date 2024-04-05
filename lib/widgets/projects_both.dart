import 'dart:ui';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:portfolio/constants/colors.dart';
import 'package:portfolio/utils/project_utils.dart';
import 'package:portfolio/widgets/project_card.dart';

class ProjectsDesktop extends StatelessWidget {
  const ProjectsDesktop({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      scrollBehavior: MyCustomScrollBehaviour(),
      home: Container(
        width: double.infinity, // Ensures full width
        padding: const EdgeInsets.fromLTRB(25, 20, 25, 60),
        child: Column(
          children: [
            // work projects title
            const Text(
              "Projects",
              style: TextStyle(
                fontSize: 24.0,
                fontWeight: FontWeight.bold,
                color: CustomColor.whitePrimary,
                decoration: TextDecoration.none,
              ),
            ),
            SizedBox(
              height: 50.0,
            ),
            SizedBox(
              height: 350.0, // Adjust height as needed
              child: ListView.builder(
                scrollDirection: Axis.horizontal,
                itemCount: workProjectUtils.length,
                itemBuilder: (context, index) => ProjectCardWidget(
                  project: workProjectUtils[index],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class MyCustomScrollBehaviour extends MaterialScrollBehavior {
  @override
  Set<PointerDeviceKind> get dragDevices => {
        PointerDeviceKind.touch,
        PointerDeviceKind.mouse,
      };
}
