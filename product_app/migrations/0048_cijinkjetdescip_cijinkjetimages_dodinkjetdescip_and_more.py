# Generated by Django 4.2.7 on 2024-06-05 05:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product_app', '0047_alter_cijinkjet_type_alter_dodinkjet_type_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='CIJInkJetDescip',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=70)),
                ('description', models.TextField(default='A Water Invesemet System', verbose_name='Description')),
            ],
            options={
                'verbose_name': '',
                'ordering': ['name'],
            },
        ),
        migrations.CreateModel(
            name='CIJInkJetImages',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(default='', upload_to='Images/WaterInvesemetSystem/%y/%m%d', verbose_name='Images of Water System')),
            ],
            options={
                'verbose_name': 'image DOD',
                'ordering': ['image'],
            },
        ),
        migrations.CreateModel(
            name='DODInkJetDescip',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=70)),
                ('description', models.TextField(default='A Water Invesemet System', verbose_name='Description')),
            ],
            options={
                'verbose_name': '',
                'ordering': ['name'],
            },
        ),
        migrations.CreateModel(
            name='DODInkJetImages',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(default='', upload_to='Images/WaterInvesemetSystem/%y/%m%d', verbose_name='Images of Water System')),
            ],
            options={
                'verbose_name': 'image DOD',
                'ordering': ['image'],
            },
        ),
        migrations.CreateModel(
            name='LaserMarkingInkJetDescip',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=70)),
                ('description', models.TextField(default='A Water Invesemet System', verbose_name='Description')),
            ],
            options={
                'verbose_name': '',
                'ordering': ['name'],
            },
        ),
        migrations.CreateModel(
            name='LaserMarkingInkJetImages',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(default='', upload_to='Images/WaterInvesemetSystem/%y/%m%d', verbose_name='Images of Water System')),
            ],
            options={
                'verbose_name': 'image DOD',
                'ordering': ['image'],
            },
        ),
        migrations.CreateModel(
            name='TIJInkJetDescip',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=70)),
                ('description', models.TextField(default='A Water Invesemet System', verbose_name='Description')),
            ],
            options={
                'verbose_name': '',
                'ordering': ['name'],
            },
        ),
        migrations.CreateModel(
            name='TIJInkJetImages',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(default='', upload_to='Images/WaterInvesemetSystem/%y/%m%d', verbose_name='Images of Water System')),
            ],
            options={
                'verbose_name': 'image DOD',
                'ordering': ['image'],
            },
        ),
        migrations.DeleteModel(
            name='CIJInkJet',
        ),
        migrations.DeleteModel(
            name='DODInkJet',
        ),
        migrations.DeleteModel(
            name='LaserMarkingInkJet',
        ),
        migrations.DeleteModel(
            name='TIJInkJet',
        ),
    ]
